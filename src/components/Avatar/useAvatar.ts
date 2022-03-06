import React, { useState } from 'react'
import { userStatus } from '@/modules/user/atoms'
import { useRecoilState } from 'recoil'
import { Asset, ImagePickerResponse, launchImageLibrary } from 'react-native-image-picker'
import storage from '@react-native-firebase/storage'
import { Platform } from 'react-native'
import { updateUserPhotoUrl } from '@/server/users/service'

function useAvatar() {
  const [isUploading, setIsUploading] = useState(false)
  const [me, setMe] = useRecoilState(userStatus)

  // image upload to Firebase Storage
  const uploadImg = async (asset: Asset, ext: string) => {
    if (!me) return

    const reference = storage().ref(`/images/profile/${me.licenseId}.${ext}`)

    if (Platform.OS === 'android' && asset.base64) {
      await reference.putString(asset.base64, 'base64', {
        contentType: asset.type,
      })
    } else if (Platform.OS === 'ios' && asset.uri) {
      await reference.putFile(asset.uri)
    }
  }

  const onSelectImage = () => {
    void launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 512,
        maxHeight: 512,
        includeBase64: Platform.OS === 'android',
      },
      async (res) => {
        if (!res.assets || !me) return
        const asset = res.assets[0]
        // FIXME: 확장자 webp로 고정. webp사용하기. cloud function ?
        const ext = asset.fileName?.split('.').pop()!
        const reference = storage().ref(`/images/profile/${me.licenseId}.${ext}`)

        setIsUploading(true)

        await uploadImg(asset, ext)

        /**
         * User의 photoURL 업데이트
         * FIXME: 일일이 user data를 수정할게 아니라 회원가입 할 때부터 가지고 있으면 되겠는데 ...
         * 그런데 firebase storage에 올라간 URL은 업데이트할 때마다 변경된다는게 문제
         */

        const photoURL = await reference.getDownloadURL()
        await updateUserPhotoUrl({
          licenseId: me.licenseId,
          photoURL,
        })

        // set AvatarImg
        setMe({ ...me, photoURL })

        setIsUploading(false)
      }
    )
  }

  return { isUploading, onSelectImage }
}

export default useAvatar
