import React from 'react';
import  BlogPart from '../component/MainSection/BlogPart/BlogPart'; 
import House from '../component/MainSection/House/House1'; 

import { HeroSection } from '../component/MainSection/HeroSection';
import Projects from '../component/MainSection/Projects/Projects';
import Projects1 from '../component/MainSection/Projects/Projects1';


const howitwork = () => {
    return (
        <div className='bg-white'>
            <House />
            <Projects/>
            <Projects1 />
            <Projects1 />
        </div>
    );
}

export default howitwork;