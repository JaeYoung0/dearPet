import auth from '@react-native-firebase/auth'
import { appleAuth } from '@invertase/react-native-apple-authentication'

import React from 'react'
import { useMeState } from '@/modules/user/atoms'

// FIXME: appleLogin은 android, ios 구현방법이 다르다. 함수를 2개 작성해야한다...
// https://github.com/invertase/react-native-apple-authentication
function useAppleLogin() {
  const { me, setMe } = useMeState()

  async function appleLogin() {
    try {
      // Start the sign-in request
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      })

      // Ensure Apple returned a user identityToken
      if (!appleAuthRequestResponse.identityToken) {
        throw new Error('Apple Sign-In failed - no identify token returned')
      }

      console.log('@@appleAuthRequestResponse', appleAuthRequestResponse)

      // Create a Firebase credential from the response
      const { identityToken, nonce } = appleAuthRequestResponse
      const appleCredential = auth.AppleAuthProvider.credential(identityToken, nonce)

      // Sign the user in with the credential
      return auth().signInWithCredential(appleCredential)
    } catch (error) {
      console.error(error)
    }
  }

  return { appleLogin }
}

export default useAppleLogin
