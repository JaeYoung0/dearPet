import { PostModel } from '@/server/posts/model'
import React from 'react'
import * as S from './PostThumbnail.style'
import dayjs from 'dayjs'

type Props = {
  post: PostModel
  order: number
}
function PostThumbnail({ post, order }: Props) {
  return (
    <S.Container>
      <S.LeftColumn>
        <S.Image source={{ uri: post.photoURL[0] }} />
      </S.LeftColumn>
      <S.RightColumn>
        <S.Label>{order + 1}번째 편지</S.Label>
        <S.Title>{post.title}</S.Title>
        <S.BodyText numberOfLines={2}>{post.content}</S.BodyText>
        <S.Date>{dayjs((post?.createdAt.seconds ?? 0) * 1000).format('YYYY.MM.DD')}</S.Date>
      </S.RightColumn>
    </S.Container>
  )
}

export default PostThumbnail
