import React, { useEffect } from 'react'
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native'
import { RecoilRoot } from 'recoil'

// 왜 절대경로 안되는거야..
// import Guest from '@/navigation/Guest'
import Guest from './src/navigation/Guest'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 2000)
  }, [])

  //   <SafeAreaView style={{ flex: 1, backgroundColor: '#13141A' }}>
  //   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
  //   {/* <Guest /> */}
  //   <WebView source={{ uri: 'https://j-young-blog-frontend.vercel.app/play' }} />
  // </SafeAreaView>

  return (
    <SafeAreaProvider>
      <React.Suspense fallback={null}>
        <RecoilRoot>
          <NavigationContainer>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#13141A' }}>
              <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
              <Guest />
            </SafeAreaView>
          </NavigationContainer>
        </RecoilRoot>
      </React.Suspense>
    </SafeAreaProvider>
  )
}

export default App
