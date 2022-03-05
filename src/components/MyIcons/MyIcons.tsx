import React, { Suspense, ComponentType } from 'react'
import { MyIconsProps, BasicProps } from './type'

function MyIcons({ name, ...props }: MyIconsProps) {
  const Component = RegisteredIcons[name]
  return (
    <Suspense fallback={null}>
      <Component {...props} />
    </Suspense>
  )
}

export default MyIcons

// lazy imports
const Universe = React.lazy<ComponentType<BasicProps>>(() => import(`./Universe`))
const Planet = React.lazy<ComponentType<BasicProps>>(() => import(`./Planet`))
const Compass = React.lazy<ComponentType<BasicProps>>(() => import(`./Compass`))
const Person = React.lazy<ComponentType<BasicProps>>(() => import(`./Person`))
const Hamburger = React.lazy<ComponentType<BasicProps>>(() => import(`./Hamburger`))
const SquarePlus = React.lazy<ComponentType<BasicProps>>(() => import(`./SquarePlus`))
const Check = React.lazy<ComponentType<BasicProps>>(() => import(`./Check`))
const Arrow = React.lazy<ComponentType<BasicProps>>(() => import(`./Arrow`))

export const RegisteredIcons = {
  Universe,
  Planet,
  Compass,
  Person,
  Hamburger,
  SquarePlus,
  Check,
  Arrow,
}
