import React, { useState } from 'react'
import Video from 'react-native-video'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { TouchableOpacity } from 'react-native'

function BGMButton() {
  const [paused, setPaused] = useState(false)

  const toggleSound = () => {
    setPaused(!paused)
  }

  return (
    <>
      <Video paused={paused} audioOnly repeat source={require('@assets/audios/universe.mp3')} />
      <TouchableOpacity onPress={toggleSound} style={{ position: 'absolute', right: 20, bottom: 20 }}>
        {!paused ? <SimpleLineIcons name='volume-2' size={30} /> : <SimpleLineIcons name='volume-off' size={30} />}
      </TouchableOpacity>
    </>
  )
}

export default BGMButton
