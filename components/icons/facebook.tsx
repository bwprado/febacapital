import * as React from 'react'
import { SVGProps } from 'react'

const Facebook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width || 25}
    height={props.height || 25}
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M12.32.19C5.62.19.19 5.62.19 12.32c0 6.7 5.43 12.131 12.13 12.131 6.7 0 12.131-5.43 12.131-12.13 0-6.7-5.43-12.131-12.13-12.131Zm4.644 6.539H14.69c-.628 0-1.137.51-1.137 1.137v2.275h3.411l-.379 3.033h-3.032v7.581H10.52v-7.581H7.77V10.14h2.749V7.805a3.874 3.874 0 0 1 4.101-3.868l2.343.138V6.73Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M0 0h24.641v24.641H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default Facebook
