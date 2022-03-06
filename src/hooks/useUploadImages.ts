import { assetStatus } from './../modules/uploader/atom'
import { useRecoilState } from 'recoil'
import React, { useState } from 'react'
import storage, { FirebaseStorageTypes } from '@react-native-firebase/storage'
import { launchImageLibrary, ImageLibraryOptions, ImagePickerResponse, Asset } from 'react-native-image-picker'
import { Platform } from 'react-native'
import { v4 } from 'uuid'

type Props = {
  path: string
  fileName?: string[]
  options?: Omit<ImageLibraryOptions, 'mediaType'>
}

/**
 * @property selectionLimit: Default is 1, use 0 to allow any number of files
 */
const OPTIONS: ImageLibraryOptions = {
  mediaType: 'photo',
  maxWidth: 512,
  maxHeight: 512,
  includeBase64: Platform.OS === 'android',
}

/**
 * @param path 확장자(jpg, png)를 제외한 업로드 경로들. undefined인 경우 uuid로 랜덤한 경로를 부여함.
 */
function useUploadImages({ path, fileName, options }: Props) {
  const [isUploading, setIsUploading] = useState(false)
  const [assets, setAssets] = useRecoilState(assetStatus)

  //   const [photoURL, setPhotoURL] = useState<string[]>([])

  const uploadImages = async () => {
    let photoURL: string[] = []
    try {
      setIsUploading(true)

      if (!assets) return

      //   FIXME: forEach로하면 photoURL이 비어있는채로 리턴됨.
      for await (const asset of assets) {
        const ext = asset.fileName?.split('.').pop()!
        const reference = fileName
          ? storage().ref(`${path}/${fileName}.${ext}`)
          : storage().ref(`${path}/${v4()}.${ext}`)

        if (Platform.OS === 'android' && asset.base64) {
          await reference.putString(asset.base64, 'base64', {
            contentType: asset.type,
          })
        } else if (Platform.OS === 'ios' && asset.uri) {
          await reference.putFile(asset.uri)
        }

        const url = await reference.getDownloadURL()
        photoURL.push(url)
      }

      assets.forEach(async (asset, idx) => {
        // const ext = asset.fileName?.split('.').pop()!
        // const reference = fileName
        //   ? storage().ref(`${path}/${fileName[idx]}.${ext}`)
        //   : storage().ref(`${path}/${v4()}.${ext}`)
        // if (Platform.OS === 'android' && asset.base64) {
        //   await reference.putString(asset.base64, 'base64', {
        //     contentType: asset.type,
        //   })
        // } else if (Platform.OS === 'ios' && asset.uri) {
        //   await reference.putFile(asset.uri)
        // }
        // const url = await reference.getDownloadURL()
        // photoURL.push(url)
      })
    } catch (error) {
      console.error(error)
    } finally {
      setIsUploading(false)
      return photoURL
    }
  }

  //   const onSelectImage = () => {
  //     void launchImageLibrary({ ...OPTIONS, ...options }, handleLaunchImage)
  //   }

  return {
    isUploading,
    // onSelectImage,
    // photoURL,
    uploadImages,
  }
}

export default useUploadImages
