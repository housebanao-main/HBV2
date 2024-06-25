import React from 'react'

export const SubHeading = ( {children, className} ) => {
  return (
    <p className={`${className} text-[14px]  w-full font-normal`}>{children}</p>
  )
}
