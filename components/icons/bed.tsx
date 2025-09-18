import * as React from 'react'
import { SVGProps } from 'react'

const Bed = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width || 19}
    height={props.height || 13}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.881 3.211H4.17v2.986h4.712V3.21ZM14.83 3.211H10.12v2.986h4.712V3.21ZM16.07 7.436H0v3.944h2.862v1.217h1.24V11.38h10.797v1.217h1.239V11.38H19V7.436h-2.93Z"
      fill="currentColor"
    />
    <path
      d="M1.156.403v5.793H2.93V1.972h13.14v4.224h1.773V.403H1.156Z"
      fill="currentColor"
    />
  </svg>
)

export default Bed
