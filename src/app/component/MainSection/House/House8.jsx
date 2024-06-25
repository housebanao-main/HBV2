'use client';
import React from 'react';
import Image from 'next/image';
import backgroundImage from '/public/assets/images/Map.png';

const House8 = () => {
  return (
    <div className="relative w-full h-[600px]">
      <Image 
        src={backgroundImage} 
        alt="Background Image" 
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="w-full h-full"
      />
    </div>
  );
};

export default House8;
