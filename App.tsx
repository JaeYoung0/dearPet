import React, { useEffect } from 'react'
import { Alert, SafeAreaView, StatusBar, useColorScheme } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import Main from '@/navigation/Main'
import AppWrapper from './AppWrapper'

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
        <Main />
      </SafeAreaView>
    </AppWrapper>
  )
}

export default App
