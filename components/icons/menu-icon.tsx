import * as React from 'react'
import { SVGProps } from 'react'

const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width || 16}
    height={props.height || 12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 .306H0V3h16V.306ZM16 4.62H0v2.696h16V4.62ZM16 9H0v2.694h16V9Z"
      fill="currentColor"
    />
  </svg>
)

export default MenuIcon
