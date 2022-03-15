import { RegisteredIcons } from './MyIcons'

export type IconKey = keyof typeof RegisteredIcons

export type MyIconsProps = {
  name: IconKey
  focused?: boolean
  color?: string
  stretch?: boolean
  width?: number
  height?: number
}
export type BasicProps = Omit<MyIconsProps, 'name'>
