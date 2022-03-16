import React, { createContext, useContext, useState, ReactText, ReactNode } from 'react'

/**
 * defaultValue 매개변수는 트리 안에서 적절한 Provider를 찾지 못했을 때만 쓰이는 값입니다.
 * 이 기본값은 컴포넌트를 독립적으로 테스트할 때 유용한 값입니다.
 *
 * Provider를 통해 undefined을 값으로 보낸다고 해도
 * 구독 컴포넌트들이 defaultValue 를 읽지는 않는다는 점에 유의하세요.
 */

type ContextType = {
  tabIndex: number
  setTabIndex: React.Dispatch<React.SetStateAction<number>>
  tabValue: ReactText
  setTabValue: React.Dispatch<React.SetStateAction<number | string>>
}

const Context = createContext<ContextType>({
  tabIndex: 0,
  setTabIndex: () => 0,
  tabValue: '',
  setTabValue: () => 0,
})

interface Props {
  children: ReactNode
  initialValue: ReactText
}

export default function TabProvider({ children, initialValue }: Props) {
  const [tabValue, setTabValue] = useState(initialValue)
  const [tabIndex, setTabIndex] = useState(0)

  return (
    <Context.Provider
      value={{
        tabIndex,
        setTabIndex,
        tabValue,
        setTabValue,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export function useTabContext() {
  return useContext(Context)
}
