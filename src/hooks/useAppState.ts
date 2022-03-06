import { useEffect } from 'react'
import { AppState, AppStateStatus } from 'react-native'

// https://github.com/tannerlinsley/react-query/blob/7be6d89d689eb61a057d238c95b6701c2a92b7f5/examples/react-native/src/hooks/useAppState.ts#L4

export default function useAppState(onChange: (status: AppStateStatus) => void) {
  useEffect(() => {
    const eventSubscription = AppState.addEventListener('change', onChange)
    return () => {
      eventSubscription.remove()
    }
  }, [onChange])
}
