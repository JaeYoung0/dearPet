import { Dimensions } from 'react-native'

const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get('window')

const GUIDE_WIDTH = 375
const GUIDE_HEIGHT = 812

const horizontalScale = (dp: number, factor: number = 1) => {
  return (DEVICE_WIDTH / GUIDE_WIDTH) * dp * factor
}
const verticalScale = (dp: number, factor: number = 1) => {
  return (DEVICE_HEIGHT / GUIDE_HEIGHT) * dp * factor
}

export { horizontalScale, verticalScale }
