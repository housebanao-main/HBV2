'use client';
import React from 'react';
import { CommonButton } from '../../Button/CommonButton';

export const House6 = () => {
  function handleClick() {
    console.log("Button clicked");
  }

  return (
    <section 
      className='relative lg:max-w-[1450px] w-full mx-auto h-screen flex flex-col lg:flex-row items-center'
      style={{
        backgroundImage: "url('/assets/images/background1.png')", 
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className='absolute inset-0' style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}></div> 
      <div className='relative flex flex-col lg:w-1/2 w-full pl-[130px] text-white'>
        <div className='flex flex-col w-full lg:w-[500px] gap-[10px] text-[40px] font-[45px] leading-[37px]'>
          <h1 className='text-black text-[45px]'>Construct your</h1>
          <h1 className='text-[#A46254] text-[45px]'>Dream Home</h1>
        </div>
        <p className='text-[18px] leading-[24px] lg:w-[377px] w-[400px] font-medium mt-[22px] mb-[30px] text-black'>
          <span className="whitespace-nowrap">Hassle free Interiors and Construction from start to</span> finish.
        </p>
        <CommonButton onClick={handleClick}>
          Start your construction
        </CommonButton>
      </div>
    </section>
  )
}

export default House6;
