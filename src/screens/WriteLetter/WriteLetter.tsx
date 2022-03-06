import Header from '@/components/Header'
import MyIcons from '@/components/MyIcons'
import { createPost } from '@/server/posts/service'
import React, { useState } from 'react'
import { Alert, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { userStatus } from '@/modules/user/atoms'
import { useRecoilValue } from 'recoil'
import useCustomNavi from '@/hooks/useCustomNavi'
import usePosts from '@/modules/posts/usePosts'
import AssetUploader from '@/components/AssetUploader'
import { useRecoilState } from 'recoil'
import { assetStatus } from '@/modules/uploader/atom'
import useUploadImages from '@/hooks/useUploadImages'

function WriteLetter() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [assets, setAssets] = useRecoilState(assetStatus)
  const { uploadImages } = useUploadImages({
    path: '/images/post',
  })

  const me = useRecoilValue(userStatus)
  const navigation = useCustomNavi()
  const { refetch } = usePosts()
  if (!me) return null

  const handleSubmit = async () => {
    if (!title || !content) {
      return Alert.alert('빈칸을 채워주세요.')
    }

    try {
      const photoURL = await uploadImages()
      console.log('@@@@@@@@@@@@@@@photoURL', photoURL)

      if (!photoURL) return
      await createPost({ user: me, title, content, photoURL })
      setAssets(null)
      await refetch()
      navigation.goBack()
    } catch (error) {
      console.error(error)
    }
    // FIXME: content의 whitespace도 반영하고 싶다면 ?...
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#222222', padding: 25 }}>
      <View style={{ marginBottom: 10 }}>
        <Header title='편지쓰기' onSubmit={handleSubmit} />
      </View>
      <Text style={{ fontSize: 12, color: '#7E71F3', marginBottom: 30 }}>로아에게 보내는 첫번째 편지</Text>
      <TextInput
        placeholder='제목을 입력해주세요.'
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', marginBottom: 20 }}
        value={title}
        onChangeText={setTitle}
        multiline
        textAlignVertical='top'
      />

      <TextInput
        placeholder='내용을 입력해주세요.'
        style={{ flex: 3, backgroundColor: 'rgba(255, 255, 255, 0.15)', marginBottom: 20 }}
        value={content}
        onChangeText={setContent}
        multiline
        textAlignVertical='top'
      />

      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(255, 255, 255, 0.15);',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <AssetUploader />
      </View>
    </SafeAreaView>
  )
}

export default WriteLetter
