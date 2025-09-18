import * as React from 'react'
import { SVGProps } from 'react'

const ChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width || 12}
    height={props.height || 7}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.53.47A.75.75 0 0 0 .47 1.53l5 5a.75.75 0 0 0 1.061 0l5-5A.75.75 0 0 0 10.47.47L6 4.94 1.53.47Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={0.3}
    />
  </svg>
)

export default ChevronDown
