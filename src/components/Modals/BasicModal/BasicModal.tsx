import { useModals } from '@/modules/modals/atoms'
import React from 'react'
import { Pressable } from 'react-native'
import Overlay from '../Overlay'
import * as S from './BasicModal.style'

interface Props {
  title?: string
  content?: string

  cancelText?: string
  onCancel?: () => void

  confirmText?: string
  onConfirm?: () => void
}

export default function BasicModal({ title, content, cancelText, confirmText, onCancel, onConfirm }: Props) {
  const { closeAll } = useModals()
  return (
    <S.Container>
      <Overlay />

      <S.Modal>
        {title && <S.Title>{title}</S.Title>}
        {content && <S.ModalContentText>{content}</S.ModalContentText>}

        <S.Actions>
          <S.CancelTouchable
            onPress={() => {
              closeAll()
              onCancel?.()
            }}
          >
            <S.ActionText>{cancelText}</S.ActionText>
          </S.CancelTouchable>
          <S.ConfirmTouchable onPress={onConfirm}>
            <S.ActionText>{confirmText}</S.ActionText>
          </S.ConfirmTouchable>
        </S.Actions>
      </S.Modal>
    </S.Container>
  )
}
