import React from 'react'

export const SubmitButton = ({ children, className }) => {
  return (
    <button className={`bg-[#A46254] text-white mt-8 rounded-lg py-[10px] px-[30px] ${className}`}>
      {children}
    </button>
  )
}
