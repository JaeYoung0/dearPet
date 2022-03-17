import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Overlay from '../Overlay'
import * as S from './BasicModal.style'

interface Props {
  visible: boolean
  content: string

  cancelText: string
  onCancel: () => void

  confirmText: string
  onConfirm: () => void
}

export default function BasicModal({ visible, content, cancelText, confirmText, onCancel, onConfirm }: Props) {
  if (!visible) return null

  return (
    <SafeAreaView
      style={{
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100,
      }}
    >
      <Overlay />
      <S.Modal>
        <S.ModalContentText>{content}</S.ModalContentText>
        <S.Actions>
          <S.CancelTouchable onPress={onCancel}>
            <S.ActionText>{cancelText}</S.ActionText>
          </S.CancelTouchable>
          <S.ConfirmTouchable onPress={onConfirm}>
            <S.ActionText>{confirmText}</S.ActionText>
          </S.ConfirmTouchable>
        </S.Actions>
      </S.Modal>
    </SafeAreaView>
  )
}
