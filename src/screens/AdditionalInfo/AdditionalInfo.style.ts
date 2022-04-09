import SofiaText from '@/components/SofiaText'
import styled, { css } from '@emotion/native'
import FastImage, { Source } from 'react-native-fast-image'
import AssetUploader from '@/components/AssetUploader'
import Input from '@/components/Form/Input'

export const ContentBox = styled.View`
  flex: 1;
  justify-content: center;
  width: 100%;
`

export const Title = styled(SofiaText)`
  font-size: 22px;
  line-height: 28px;

  text-align: center;

  color: #ffffff;

  margin-bottom: 35px;
`

export const ImgUploaderWrapper = styled.View({})

export const ImgUploader = styled(AssetUploader)({})

export const AvatarWrapper = styled.View({
  left: '50%',
  transform: [{ translateX: -50 }],
  marginBottom: 20,
})

export const ChangeText = styled(SofiaText)`
  font-size: 16px;
  line-height: 16px;
  width: 100%;
  text-align: center;

  color: #7e71f3;
`

export const Spacing = styled.View({})

export const StartDateInput = styled(Input)`
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: #fff;
  opacity: 0.8;
`

export const MessageInput = styled(Input)`
  width: 100%;
  height: 150px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: #fff;
  opacity: 0.8;
`
