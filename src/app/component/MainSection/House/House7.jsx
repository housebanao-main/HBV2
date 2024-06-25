'use client';
import React from 'react';
import Image from 'next/image';
import backgroundImage from '/public/assets/images/front6.png';

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
        <h1 className="text-white text-2xl font-bold text-center">Get In Touch With Our Design Experts</h1>
        <p className="text-white text-[45px]mt-2">We take our commitments to our users seriously. Reach us for any complaint or query</p>
      </div>
    </div>
  );
};

export default House;
