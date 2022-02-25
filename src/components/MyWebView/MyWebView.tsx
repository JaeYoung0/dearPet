import React from 'react'
import WebView from 'react-native-webview'
import { useRecoilValue } from 'recoil'
import { showSpaceAtom } from '@/modules/auth/atoms'

function MyWebView() {
  const showSpace = useRecoilValue(showSpaceAtom)

  return showSpace ? <WebView source={{ uri: 'https://j-young-blog-frontend.vercel.app/play' }} /> : null
}

export default MyWebView
