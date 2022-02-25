import React, { useEffect } from 'react'
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native'
import { RecoilRoot } from 'recoil'

// 왜 절대경로 안되는거야..
import Main from './src/navigation/Main'
import Guest from './src/navigation/Guest'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 2000)
  }, [])

  return (
    <SafeAreaProvider>
      <React.Suspense fallback={null}>
        <RecoilRoot>
          <NavigationContainer>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#13141A' }}>
              <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
              {/* FIXME: App을 한번 더 감싸서 recoil을 쓸 수 있는 상태로 만들고 Main과 Guest를 구분하기. */}
              {/* <Main /> */}
              <Guest />
            </SafeAreaView>
          </NavigationContainer>
        </RecoilRoot>
      </React.Suspense>
    </SafeAreaProvider>
  )
}

export default App
