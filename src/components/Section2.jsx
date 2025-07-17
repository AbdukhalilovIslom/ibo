import React from 'react';
import Image11 from '../assets/images/11.png';
import Card1 from '../assets/images/Card1.png';
import Card2 from '../assets/images/Card2.png';
import Card3 from '../assets/images/Card3.png';
import Card4 from '../assets/images/Card4.png';
import Card3_2 from '../assets/images/Card3_2.png';
import Card4_2 from '../assets/images/Card4_2.png';

const Section2 = () => {
  return (
    <div className='md:mb-10'>
      <p className='font-[700] text-[15px] md:text-[32px] text-center py-4 w-[100%] my-2  md:my-8 '>
        Мы создаем рай для геймеров
      </p>
      <div className='flex gap-2 flex-col md:hidden'>
        <img className='w-[90%] mx-auto cursor-pointer' src={Card1} alt='' />
        <img className='w-[90%] mx-auto cursor-pointer' src={Card2} alt='' />
        <img className='w-[90%] mx-auto cursor-pointer' src={Card3} alt='' />
        <img className='w-[90%] mx-auto cursor-pointer' src={Card4} alt='' />
      </div>
      <div className='hidden md:flex  items-center justify-center gap-6 max-[1024px]:flex-col'>
        <div className='flex flex-col gap-3'>
          <img className='h-[183.65px] w-[682.65px] cursor-pointer' src={Card1} alt='' />
          <img className='w-[682.65px] h-[318px] cursor-pointer' src={Card2} alt='' />
        </div>
        <div className='flex gap-3'>
          <img className='w-[150px] h-[485px] cursor-pointer' src={Card3_2} alt='' />
          <img className='w-[290px] h-[485px] cursor-pointer' src={Card4_2} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Section2;
