import React from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import WebView from 'react-native-webview'

const Universe = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#13141A' }}>
      {/* <Guest /> */}
      <WebView source={{ uri: 'https://j-young-blog-frontend.vercel.app/play' }} />
    </SafeAreaView>
  )
}

export default Universe
