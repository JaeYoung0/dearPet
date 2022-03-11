import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper'
// vs react-native-snap-carousel
import { styles } from './Welcome.style'
import useCustomNavi from '@/hooks/useCustomNavi'
import { useRecoilValue } from 'recoil'
import { userStatus } from '@/modules/user/atoms'
import { setStorage } from '@/modules/storage/helper'
import * as S from './Welcome.style'

const Welcome = () => {
  const navigation = useCustomNavi()
  const user = useRecoilValue(userStatus)
  return (
    <>
      <Swiper
        loop={false}
        showsButtons={false}
        dotStyle={styles.dot}
        paginationStyle={{ bottom: 80 }}
        activeDotStyle={styles.activeDot}
      >
        <View>
          <S.Title weight={400}>떠나간 반려동물에게{'\n'}못다한 말이 남았나요?</S.Title>
          <S.Text>디어펫을 통해{'\n'}별이된 아이에게 편지를 남겨보세요.</S.Text>
          <S.BackgroundImg source={require('@assets/images/welcome-bg-1.png')} />
        </View>
        <View>
          <S.Title>너에게 배운 사랑만큼{'\n'}더 성숙한 내가 될게.</S.Title>
          <S.Text>영원히 너를 잊지 않겠다는 약속과{'\n'}더 행복해지겠다는 다짐</S.Text>
          <S.BackgroundImg source={require('@assets/images/welcome-bg-2.png')} />
        </View>
        <View>
          <S.Title style={{ color: '#EBEDF2' }}>어두워야 보이는 별처럼{'\n'}늘 우린 함께인거지?</S.Title>
          <S.Text style={{ color: '#B8B0FF' }}>행복했던 추억으로{'\n'}오래도록 기억할 공간을 만들어보세요.</S.Text>
          <S.BackgroundImg source={require('@assets/images/welcome-bg-3.png')} />
        </View>
      </Swiper>

      {/* Button대신 TouchableOpacity를 사용 - Button은 안드로이드와 ios에서 다르게 보이기 때문*/}
      <View style={styles.buttonWrapper}>
        <S.Touchable
          activeOpacity={0.9}
          onPress={() => {
            if (!user) {
              navigation.navigate('Login', {})
              setStorage('@saw/welcome', true)
            } else {
              navigation.navigate('Main', {})
            }
          }}
        >
          <S.ButtonText>시작하기</S.ButtonText>
        </S.Touchable>
      </View>
    </>
  )
}

export default Welcome
