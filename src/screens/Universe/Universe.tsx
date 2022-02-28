import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import WebView from 'react-native-webview'
import Video from 'react-native-video'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

function Universe() {
  const [paused, setPaused] = useState(false)

  const toggleSound = () => {
    setPaused(!paused)
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#13141A' }}>
      <WebView source={{ uri: 'https://j-young-blog-frontend.vercel.app/play' }} />
      <Video paused={paused} audioOnly repeat source={require('@assets/audios/universe.mp3')} />
      <TouchableOpacity onPress={toggleSound} style={{ position: 'absolute', right: 20, bottom: 20 }}>
        {!paused ? <SimpleLineIcons name='volume-2' size={30} /> : <SimpleLineIcons name='volume-off' size={30} />}
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Universe
