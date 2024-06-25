import React from 'react'

export const HeroSectionButton = ( {title, onclick = () => { }} ) => {
  const handleClick = () => {
    if (onclick) {
      onclick();
    }
  }
  return (
    <>
      <button className='bg-white rounded-full lg:py-[7px] py-[5px] lg:px-[10px] px-[6px] border-[0.5px] border-black' onClick={handleClick}>{title}</button>
    </>
  )
}