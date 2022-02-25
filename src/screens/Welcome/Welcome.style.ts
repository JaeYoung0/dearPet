import { StyleSheet } from 'react-native'

// FIXME: 세팅하자
// import styled from '@emotion/native'

export const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  title: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    left: 30,
    top: 30,
    zIndex: 1,
  },
  text: {
    color: '#30165B',
    fontSize: 12,
    fontWeight: 'bold',
    position: 'absolute',
    left: 30,
    top: 100,
    zIndex: 1,
  },

  title2: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    left: 30,
    top: 30,
    zIndex: 1,
  },

  text2: { color: '#D0CCFA', fontSize: 12, fontWeight: 'bold', position: 'absolute', left: 30, top: 100, zIndex: 1 },

  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  dot: {
    backgroundColor: 'transparent',
    borderColor: '#fff',
    borderWidth: 1,
  },

  activeDot: {
    backgroundColor: '#fff',
  },

  button: {
    backgroundColor: '#7E71F3',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 262,
    height: 40,
    borderRadius: 60,
    position: 'absolute',
    bottom: 24,
  },

  buttonText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 13,
  },

  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})
