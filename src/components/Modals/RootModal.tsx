import { useModals } from '@/modules/modals/atoms'
import React, { Suspense, ComponentType } from 'react'

import * as S from './RootModal.style'

export type BasicProps = {
  title?: string
  content?: string

  cancelText?: string
  onCancel?: () => void

  confirmText?: string
  onConfirm?: () => void
}

const BasicModal = React.lazy<ComponentType<BasicProps>>(() => import(`./BasicModal`))

export const RegisteredModals = {
  BasicModal,
}

function RootModal() {
  const { modals } = useModals()

  if (!modals) return null

  return (
    <Suspense fallback={null}>
      <S.Container>
        {modals.map((modal, idx) => {
          const Component = RegisteredModals[modal.type]
          console.log('@@Component', Component)
          console.log('@@modal', modal)

          return <Component key={idx} {...modal} />
        })}
      </S.Container>
    </Suspense>
  )
}

export default RootModal
