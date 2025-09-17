import * as React from 'react'
import { SVGProps } from 'react'

const FiltersIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={17}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.671 3h5.704V1.875h-5.704a2.25 2.25 0 0 0-4.342 0H.625V3h5.704a2.25 2.25 0 0 0 4.342 0Zm-3.296-.562a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM6.171 8.063h10.204V6.938H6.171a2.25 2.25 0 0 0-4.342 0H.625v1.125h1.204a2.25 2.25 0 0 0 4.342 0ZM2.875 7.5a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM13 14.813a2.25 2.25 0 0 0 2.171-1.688h1.204V12h-1.204a2.25 2.25 0 0 0-4.342 0H.625v1.125h10.204A2.25 2.25 0 0 0 13 14.813Zm-1.125-2.25a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
      fill="currentColor"
    />
  </svg>
)

export default FiltersIcon
