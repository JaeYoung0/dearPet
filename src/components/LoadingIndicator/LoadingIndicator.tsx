import React from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'

// FIXME: 강아지 발자국
export default function LoadingIndicator() {
  return (
    <View style={styles.fill}>
      <ActivityIndicator size='large' />
    </View>
  )
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222222',
  },
})
