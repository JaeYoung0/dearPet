import React from 'react'
import { PostModel } from '@/server/posts/model'
import * as S from './ImageCard.style'
import dayjs from 'dayjs'

interface Props extends PostModel {
  userInfo?: boolean
}

function ImageCard({ title, photoURL, content, createdAt, user, userInfo = false }: Props) {
  const date = dayjs((createdAt.seconds ?? 0) * 1000).format('YYYY.MM.DD')

  return (
    <S.Wrapper>
      <S.Image source={{ uri: photoURL[0] }} />
      <S.ContentBox>
        <S.BasicContents>
          <S.Title weight={500}>{title}</S.Title>
          <S.BodyText numberOfLines={2}> {content}</S.BodyText>
        </S.BasicContents>

        <S.MetaContents>
          {userInfo && <S.DisplayName>{user.displayName}</S.DisplayName>}
          <S.DateText>{date}</S.DateText>
        </S.MetaContents>
      </S.ContentBox>
    </S.Wrapper>
  )
}

export default ImageCard
