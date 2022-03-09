import styled, { css } from '@emotion/native'

// https://stackoverflow.com/questions/69183045/difference-between-textinput-from-react-native-and-react-native-gesture-handl
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import Video from 'react-native-video'

export const BackVideo = styled(Video)({
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  width: '100%',
})

export const Backdrop = styled.View({
  flex: 1,
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  width: '100%',
  backgroundColor: '#000000',
  opacity: 0.5,
  alignItems: 'center',
  justifyContent: 'center',
})

export const Divider = styled.View({
  marginTop: 50,
  marginBottom: 50,
  borderBottomWidth: 1,
  borderColor: '#dcdcdc',
})

export const Logo = styled.Image({
  width: 35,
  height: 35,
})

export const LoginTouchable = styled.TouchableOpacity({
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: 35,
  borderRadius: 5,
})

export const LogoText = styled.Text({
  color: '#000000',
})

export const PhoneLoginInput = styled(TextInput)({
  backgroundColor: '#fff',
  borderRadius: 5,
  height: 40,
  marginBottom: 20,
  fontSize: 12,
  padding: 10,
})

export const PhoneLoginLabel = styled.Text({
  fontSize: 15,
  color: '#fff',
  marginBottom: 10,
})

export const PhoneLoginTouchable = styled(TouchableOpacity)({
  backgroundColor: '#7E71F3',
  borderRadius: 5,
  height: 40,
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 10,
})
