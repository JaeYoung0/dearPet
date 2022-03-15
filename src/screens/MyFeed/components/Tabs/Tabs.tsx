import React, { useState } from 'react'
import { View, Animated, useWindowDimensions, Pressable, FlatList } from 'react-native'
import useAnimation from '@/hooks/useAnimation'
import MyIcons from '@/components/MyIcons'
import Posts from '../Posts'
import Comments from '../Comments'
import * as S from './Tabs.style'

export default function Tabs() {
  const { animation, goValueOf } = useAnimation()
  const { width: windowWidth, height } = useWindowDimensions()
  const [currentTab, setCurrentTab] = useState<'posts' | 'comments'>('posts')

  const handlePosts = () => {
    setCurrentTab('posts')
    goValueOf({ toValue: 0 })
  }

  const handleComments = () => {
    setCurrentTab('comments')
    goValueOf({ toValue: 1 })
  }

  return (
    <>
      {/* TabList */}
      <View style={{ flexDirection: 'row', position: 'relative' }}>
        <Animated.View
          style={{
            borderBottomColor: '#fff',
            borderWidth: 1.5,
            position: 'absolute',
            left: 0,
            width: '50%',
            height: '100%',
            transform: [
              {
                translateX: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, windowWidth / 2],
                }),
              },
            ],
          }}
        />

        <Pressable style={{ flex: 1, alignItems: 'center' }} onPress={handlePosts}>
          <MyIcons name='Envelope' focused={currentTab === 'posts'} />
        </Pressable>

        <Pressable style={{ flex: 1, alignItems: 'center' }} onPress={handleComments}>
          <MyIcons name='Flower' focused={currentTab === 'comments'} />
        </Pressable>
      </View>

      {/* TabPanel */}
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {currentTab === 'posts' && <Posts />}

        {currentTab === 'comments' && <Comments />}
      </View>
    </>
  )
}
