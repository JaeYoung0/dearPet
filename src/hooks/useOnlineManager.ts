import React from 'react'
import NetInfo from '@react-native-community/netinfo'
import { onlineManager } from 'react-query'
import { Platform } from 'react-native'

// https://react-query.tanstack.com/react-native#online-status-management
// supports auto refetch on reconnect
export default function useOnlineManager() {
  React.useEffect(() => {
    // React Query already supports on reconnect auto refetch in web browser
    if (Platform.OS !== 'web') {
      return NetInfo.addEventListener((state) => {
        onlineManager.setOnline(state.isConnected != null && state.isConnected && Boolean(state.isInternetReachable))
      })
    }
  }, [])
}
