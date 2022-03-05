import { RegisteredIcons } from './MyIcons'

export type IconKey = keyof typeof RegisteredIcons

export type MyIconsProps = {
  name: IconKey
  focused?: boolean
  color?: string
}
export type BasicProps = Omit<MyIconsProps, 'name'>
