import React from 'react';
import  BlogPart from '../component/MainSection/BlogPart/BlogPart'; 
import House from '../component/MainSection/House/House5'; 

import { HeroSection } from '../component/MainSection/HeroSection';

const howitwork = () => { 
    return (
        <div className='bg-white'>
            <House />
            <BlogPart />
        </div>
    );
}

export default howitwork;