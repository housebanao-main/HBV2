import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Cards = ({ icon, title, bgColor }) => {
  return (
    <div className='rounded-[10px] mb-[13px]   w-full lg:w-[250px] h-[250px] flex flex-col gap-[15px] justify-center items-center py-[20px] px-[30px]' style={{ backgroundColor: '#FAF7F6' }}>
      <div className={`flex items-center justify-center rounded-full p-3 h-[100px] w-[100px]`} style={{ background: bgColor }}>
        <FontAwesomeIcon icon={icon} className='h-[40px] w-[40px]' />
      </div>
      <p className='text-[20px]  w-[150px] text-center'>{title}</p> {/* Adjusted font size and weight */}
    </div>
  );
};
