import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AppStateStatus, Platform } from 'react-native'

import { RecoilRoot } from 'recoil'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { QueryClient, QueryClientProvider, focusManager } from 'react-query'
import useAppState from '@/hooks/useAppState'
import useOnlineManager from '@/hooks/useOnlineManager'

function onAppStateChange(status: AppStateStatus) {
  // React Query already supports in web browser refetch on window focus by default
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active')
  }
}

const AppWrapper = ({ children }: { children: React.ReactElement }) => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: 2 } },
  })

  useOnlineManager()
  useAppState(onAppStateChange)

  return (
    <React.Suspense fallback={null}>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <SafeAreaProvider>
            <NavigationContainer>{children}</NavigationContainer>
          </SafeAreaProvider>
        </RecoilRoot>
      </QueryClientProvider>
    </React.Suspense>
  )
}

export default AppWrapper
