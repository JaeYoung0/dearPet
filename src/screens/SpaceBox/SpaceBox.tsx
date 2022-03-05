import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import WebView from 'react-native-webview'
import BGMButton from '@/components/BGMButton'
import { Alert, Button } from 'react-native'
import useCustomNavi from '@/hooks/useCustomNavi'

function SpaceBox() {
  const navigation = useCustomNavi()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#13141A' }}>
      <Button
        title='임시이동버튼'
        onPress={() => {
          navigation.navigate('MyPet', {})
        }}
      />

      <WebView source={{ uri: 'https://j-young-blog-frontend.vercel.app/play' }} />
      <BGMButton />
    </SafeAreaView>
  )
}

export default SpaceBox
