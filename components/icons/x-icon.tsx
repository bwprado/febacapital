import * as React from 'react'
import { SVGProps } from 'react'

const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={17}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m15.054 1.909-.733-.768L8.5 7.254 2.679 1.14l-.733.768 5.827 6.107-5.827 6.108.733.768L8.5 8.78l5.821 6.113.733-.768-5.827-6.108 5.827-6.107Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={1.4}
    />
  </svg>
)

export default XIcon
