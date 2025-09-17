import * as React from 'react'
import { SVGProps } from 'react'

const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={28}
    height={16}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M27.12 5.88 21.54.29l-1.42 1.42L25.41 7H0v2h25.41l-5.29 5.29 1.42 1.42 5.58-5.59a3 3 0 0 0 0-4.24Z"
      fill="currentColor"
    />
  </svg>
)

export default ArrowRight
