import * as React from 'react'
import { SVGProps } from 'react'

const CameraIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width || 17}
    height={props.height || 16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.414 11.667a4.876 4.876 0 0 1-4.59 3.954l-.198.004H2.087a.713.713 0 0 1-.707-.623l-.005-.09v-1.266c0-.3.223-.55.513-.589l.08-.005h1.584a1.98 1.98 0 0 0 1.842-1.254l.047-.131h2.973ZM9.885.583a2.573 2.573 0 0 1 2.573 2.573v5.146a2.573 2.573 0 0 1-2.573 2.573H3.156A2.573 2.573 0 0 1 .583 8.302V3.156A2.573 2.573 0 0 1 3.156.583h6.73Zm6.23.473a.594.594 0 0 1 .302.517v8.312a.594.594 0 0 1-.9.51L13.25 9.034v-6.61l2.267-1.36a.594.594 0 0 1 .598-.008Z"
      fill="currentColor"
    />
  </svg>
)

export default CameraIcon
