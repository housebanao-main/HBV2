import React from 'react';
import House from '../component/MainSection/House/House2'; 
import Steps from '../component/MainSection/Steps/Steps'; 
import ShowCase from '../component/MainSection/ShowCase/ShowCase'; 
import { Faqs } from '../component/MainSection/FAQs/Faqs';
import { HeroSection } from '../component/MainSection/HeroSection';

const howitwork = () => {
    return (
        <div>
            <House />
            <Steps />
            <ShowCase />
            <Faqs />
            <HeroSection/>
        </div>
    );
}

export default howitwork;
