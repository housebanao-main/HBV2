'use client';
import React from 'react';
import House8 from '../component/MainSection/House/House8'; 
import House7 from '../component/MainSection/House/House7'; 
import Contact from '../component/MainSection/Contact/Contact'; 

const service = () => {
    return (
        <div className="bg-[#FAF7F6]">
            <House7 />
            <Contact />
            <House8 />
        </div>
    );
}

export default service;
