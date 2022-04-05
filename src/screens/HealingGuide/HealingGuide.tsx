import React from 'react'
import Layout from '@/components/Layout'
import Header from '@/components/Header'
import useCustomRoute from '@/hooks/useCustomRoute'
import FastImage from 'react-native-fast-image'
import SofiaText from '@/components/SofiaText'
import { View, ScrollView } from 'react-native'
import { css } from '@emotion/native'
import { HealingGuideItem, FEED_HEALING_DATA } from '@/navigation/Feed/data'

function GuideContent({ item }: { item: HealingGuideItem }) {
  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: '#000000',
        padding: 20,
        paddingTop: 34,
        paddingBottom: 50,
        zIndex: 10,
        borderRadius: 20,
      }}
    >
      {/* FIXME: 한글에도 Sofia를 적용하고 싶을 때 */}
      <SofiaText
        weight={600}
        style={css`
          color: #fff;
          font-size: 20px;
          text-align: center;
          line-height: 30px;
        `}
      >
        {item.title}
      </SofiaText>

      <View style={{ width: '90%', marginTop: 22, marginBottom: 38, borderBottomWidth: 1, borderColor: '#dcdcdc' }} />

      <SofiaText style={{ color: '#999999', fontSize: 16, lineHeight: 25, textAlign: 'center' }}>
        {item.content}
      </SofiaText>
    </View>
  )
}

function HealingGuide() {
  const route = useCustomRoute<'HealingGuide'>()
  const healingId = route.params.healingId

  return (
    <Layout style={{ position: 'relative', backgroundColor: '#000000', padding: 0 }}>
      <View style={{ padding: 15 }}>
        <Header back title='치유의 시간' />
      </View>

      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
        <View>
          <FastImage style={{ width: '100%', height: 400 }} source={FEED_HEALING_DATA[healingId].detail.bgUrl} />
        </View>
        <GuideContent item={FEED_HEALING_DATA[healingId].detail} />
      </ScrollView>
    </Layout>
  )
}

export default HealingGuide
