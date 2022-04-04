import React, { useState } from 'react'
import Layout from '@/components/Layout'
import Header from '@/components/Header'
import { FlatList, Pressable, View } from 'react-native'
import SofiaText from '@/components/SofiaText'

type NoticeItem = {
  id: number
  date: string
  title: string
  content: string
}
const DATA: NoticeItem[] = [
  {
    id: 1,
    date: `22.04.01`,
    title: `노더스 첫 번째 프로젝트 '디어팻'`,
    content: `안녕하세요. 노더스 입니다.

노드(node/점)를 연결하는 사람들라는 의미를 가진 저희는
개발자X디자이너 커플이 창업한 2인 스튜디오로
세상에 이로운 서비스를 월간 프로젝트로 진행하고자 합니다.
그 첫번째 결과물이 펫로스를 겪은 이들을 위로하는
‘디어펫’ 입니다.

둘다 직장인이라 퇴근 후, 주말 시간을 활용해
짬짬이 프로젝트를 진행해 부족함이 많습니다.
그래도 사랑하는 가족을 잃은 누군가에게
위로와 치유의 공간이 되기를 바라는 마음으로
열심히 만들었으니 따뜻한 격려 부탁드립니다.

오류가 생기거나, 개선이 필요한 부분이 있거나,
혹은 추가 아이디어를 제안해주시고 싶으신 분은
[전체설정]-[관리자에게] 메뉴를 통해 전달해주세요.

이 곳이 슬픔과 사랑이 선순환되는 공간으로 자리매김하기를
진심으로 바랍니다.

감사합니다.
`,
  },

  {
    id: 2,
    date: `22.05.01`,
    title: `5월 1.0.3 업데이트 안내`,
    content: `쏼라쏼라`,
  },

  {
    id: 3,
    date: `22.06.01`,
    title: `6월 1.0.4 업데이트 안내`,
    content: `쏼라쏼라`,
  },
]

function Notice() {
  const [showList, setShowList] = useState<number[]>([])

  const renderItem = ({ item, index }: { item: NoticeItem; index: number }) => (
    <View style={{ borderBottomColor: ' rgba(225, 225, 225, 0.18)', borderBottomWidth: 0.5 }}>
      <Pressable
        style={{ padding: 20, paddingTop: index === 0 ? 0 : 20 }}
        onPress={() => {
          if (showList.includes(item.id)) {
            setShowList(showList.filter((el) => el !== item.id))
          } else {
            setShowList([...showList, item.id])
          }
        }}
      >
        <SofiaText style={{ color: 'rgba(255, 255, 255, 0.5)', marginBottom: 10 }}>{item.date}</SofiaText>
        <SofiaText style={{ fontSize: 16, lineHeight: 16 }}>{item.title}</SofiaText>
      </Pressable>

      {showList.includes(item.id) && (
        <View style={{ backgroundColor: '#333333', padding: 20 }}>
          <SofiaText style={{ color: '#fff', fontSize: 14, lineHeight: 20, opacity: 0.8 }}>{item.content}</SofiaText>
        </View>
      )}
    </View>
  )

  return (
    <Layout style={{ padding: 0 }}>
      <View style={{ padding: 15 }}>
        <Header back title='공지사항' />
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA.sort((a, b) => b.id - a.id)}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.id)}
      />
    </Layout>
  )
}

export default Notice
