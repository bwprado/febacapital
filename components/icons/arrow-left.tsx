import * as React from 'react'
import { SVGProps } from 'react'

const ArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={28}
    height={16}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m.88 10.12 5.58 5.59 1.42-1.42L2.59 9H28V7H2.59l5.29-5.29L6.46.29.88 5.88a3 3 0 0 0 0 4.24Z"
      fill="currentColor"
    />
  </svg>
)

export default ArrowLeft
