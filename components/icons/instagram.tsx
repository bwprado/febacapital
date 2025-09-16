import * as React from 'react'
import { SVGProps } from 'react'

const Instagram = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width || 26}
    height={props.height || 25}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M16.239 6.066H9.684a2.982 2.982 0 0 0-2.977 2.977v6.555a2.982 2.982 0 0 0 2.977 2.978h6.555a2.982 2.982 0 0 0 2.978-2.978V9.043a2.982 2.982 0 0 0-2.978-2.977Zm-3.277 10.15a3.9 3.9 0 0 1-3.896-3.896 3.9 3.9 0 0 1 3.896-3.895 3.9 3.9 0 0 1 3.895 3.895 3.9 3.9 0 0 1-3.895 3.896Zm4-6.995a.91.91 0 1 1 .002-1.82.91.91 0 0 1-.001 1.82Zm-4 .531a2.572 2.572 0 0 0-2.569 2.568 2.572 2.572 0 0 0 2.569 2.569 2.572 2.572 0 0 0 2.568-2.569 2.572 2.572 0 0 0-2.568-2.568Zm0-9.562C6.262.19.83 5.62.83 12.32c0 6.7 5.431 12.131 12.13 12.131 6.7 0 12.132-5.43 12.132-12.13C25.093 5.62 19.66.19 12.962.19Zm7.581 15.408a4.31 4.31 0 0 1-4.304 4.304H9.684a4.31 4.31 0 0 1-4.304-4.304V9.043A4.31 4.31 0 0 1 9.684 4.74h6.555a4.31 4.31 0 0 1 4.304 4.304v6.555Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path
          fill="currentColor"
          transform="translate(.641)"
          d="M0 0h24.641v24.641H0z"
        />
      </clipPath>
    </defs>
  </svg>
)

export default Instagram
