import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import WebView from 'react-native-webview'

function MyWebView() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#13141A' }}>
      <WebView source={{ uri: 'https://j-young-blog-frontend.vercel.app/play' }} />
    </SafeAreaView>
  )
}

export default MyWebView
