import React from 'react'

export const CommonHeading = ( {children, className} ) => {
  return (
    <>
       <h2 className={`${className} font-semibold text-[25px] text-[#222222]`}>{children}</h2>
    </>
  )
}
