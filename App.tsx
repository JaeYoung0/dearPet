import React, { useEffect } from 'react'
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import Entry from '@/navigation/Entry'
import AppWrapper from './AppWrapper'
import RootModal from '@/components/Modals/RootModal'

function App() {
  const isDarkMode = useColorScheme() === 'dark'

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 2000)
  }, [])

  return (
    <AppWrapper>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#13141A' }}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Entry />
        <RootModal />
      </SafeAreaView>
    </AppWrapper>
  )
}

export default App
