import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import WebView from 'react-native-webview'
import BGMButton from '@/components/BGMButton'

function SpaceBox() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#13141A' }}>
      <WebView source={{ uri: 'https://j-young-blog-frontend.vercel.app/play' }} />
      <BGMButton />
    </SafeAreaView>
  )
}

export default SpaceBox
