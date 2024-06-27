import React from 'react';
import Image from 'next/image';
// import interior01 from '../../../../../../public/assets/images/interior01.png';
// import interior02 from '../../../../../../public/assets/images/interior02.png';
// import interior03 from '../../../../../../public/assets/images/interior03.png';
// import interior04 from '../../../../../../public/assets/images/interior04.png';
// import interior05 from '../../../../../../public/assets/images/interior05.png';
// import interior06 from '../../../../../../public/assets/images/interior06.png';

import interior01 from '@/public/assets/images/interior01.png';
import interior02 from '@/public/assets/images/interior02.png';
import interior03 from '@/public/assets/images/interior03.png';
import interior04 from '@/public/assets/images/interior04.png';
import interior05 from '@/public/assets/images/interior05.png';
import interior06 from '@/public/assets/images/interior06.png';

const Gallery = () => {
  return (
    <div className='w-full h-auto grid grid-rows-2 gap-[20px] my-[28px] lg:px-0 px-[20px]'>
      {/* row 1 */}
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-[28px]'>
        <div className='relative w-full h-[489px] rounded-[7px] overflow-hidden'>
          <Image src={interior01} alt='Interior design image' layout='fill' objectFit='cover' />
        </div>
        <div className='grid grid-cols-2 gap-[25px]'>
          <div className='relative w-full h-[489px] rounded-[7px] overflow-hidden'>
            <Image src={interior02} alt='Interior design image' layout='fill' objectFit='cover' />
          </div>
          <div className='relative w-full h-[489px] rounded-[7px] overflow-hidden'>
            <Image src={interior03} alt='Interior design image' layout='fill' objectFit='cover' />
          </div>
        </div>
      </div>

      {/* row 2 */}
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-[28px]'>
        <div className='grid grid-cols-2 gap-[25px]'>
          <div className='relative w-full h-[489px] rounded-[7px] overflow-hidden'>
            <Image src={interior04} alt='Interior design image' layout='fill' objectFit='cover' />
          </div>
          <div className='relative w-full h-[489px] rounded-[7px] overflow-hidden'>
            <Image src={interior05} alt='Interior design image' layout='fill' objectFit='cover' />
          </div>
        </div>
        <div className='relative w-full h-[489px] rounded-[7px] overflow-hidden'>
          <Image src={interior06} alt='Interior design image' layout='fill' objectFit='cover' />
        </div>
      </div>
    </div>
  )
}

const Blogging4 = () => {
  return (
    <div className="bg-white p-6 ml-2 mr-2 mt-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-4">AFFORDABLE ELEGANCE</h1>
        <p className="text-gray-700 mb-4">
          To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family.
        </p>
        <div className="relative w-full h-[489px] rounded-[7px] overflow-hidden mb-4">
          <Image src={interior01} alt='Interior design image' layout='fill' objectFit='cover' />
        </div>
        <h2 className="text-2xl font-semibold mb-2">TIPS FOR LUXE DECOR ON A BUDGET</h2>
        <p className="text-gray-700 mb-4">
          To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple.
        </p>
        <p className="text-gray-700 mb-4">
          To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family.
        </p>
      </div>
      <Gallery />
      <p className="text-gray-700 mt-4">
        The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. To achieve this.
      </p>
    </div>
  );
};

export default Blogging4;
