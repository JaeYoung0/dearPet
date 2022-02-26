import { Alert } from 'react-native'
import { statusCodes } from '@react-native-google-signin/google-signin'

type SignInError = {
  code: any
}

function isSignInError(error: unknown): error is SignInError {
  return !!(error as SignInError).code
}

export function handleSignInError(error: unknown) {
  if (isSignInError(error)) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
      Alert.alert('Cancel')
    } else if (error.code === statusCodes.IN_PROGRESS) {
      Alert.alert('Signin in progress')
      // operation (f.e. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      Alert.alert('PLAY_SERVICES_NOT_AVAILABLE')
      // play services not available or outdated
    }
  }
}
