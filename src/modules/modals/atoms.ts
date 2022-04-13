import { BasicProps, RegisteredModals } from '@/components/Modals/RootModal'

import { atom, useRecoilState } from 'recoil'

export type ModalTypes = keyof typeof RegisteredModals

export type ModalItem = {
  type: ModalTypes
} & BasicProps

export const modalStatus = atom<ModalItem[] | null>({
  key: '@modules/modals',
  default: null,
})

export const useModals = () => {
  const [modals, setModals] = useRecoilState(modalStatus)

  const openModal = ({ ...props }: ModalItem) => {
    setModals(modals ? [...modals, { ...props }] : [{ ...props }])
  }

  // FIXME: 특정 모달 닫기
  // const closeModal = (index: number) => {}

  const closeAll = () => {
    setModals(null)
  }

  return {
    modals,
    setModals,
    openModal,
    closeAll,
  }
}
