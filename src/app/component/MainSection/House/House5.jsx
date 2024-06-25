'use client';
import React from 'react';
import Image from 'next/image';
import backgroundImage from '/public/assets/images/front4.png';
import { CommonButton } from '../../Button/CommonButton';

const House = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-[500px]">
      <Image 
        src={backgroundImage} 
        alt="Background Image" 
        fill
        style={{ objectFit: 'cover', objectPosition: 'bottom' }}
        className="w-full h-full"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
      <div className="absolute text-center p-4">
        <h1 className="text-white text-2xl font-bold text-center">Blog Page</h1>
      </div>
    </div>
  );
};

export default House;
