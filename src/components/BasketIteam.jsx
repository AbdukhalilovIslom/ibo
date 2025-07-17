// components/BasketItem.jsx
import React from 'react';

const BasketItem = () => {
  return (
    <div className='flex items-center gap-2 mt-8'>
      <input type='checkbox' className='h-[22px] w-[22px]' />
      <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvmZ72KpVdE0xYtPOn6Frm0m1Nir5yuE3KuQ&s'
        className='rounded-[20px] object-cover 
          max-w-[150px] max-h-[150px]
          max-[900px]:w-[120px] max-[900px]:h-[120px] 
          max-[600px]:w-[60px] max-[600px]:h-[60px]'
        alt='Mahsulot'
      />
      <div className='w-full flex justify-between flex-wrap'>
        <p className='font-bold text-[#202562] text-[32px] max-[900px]:text-[24px] max-[600px]:text-[15px] ml-2'>
          Название товара
        </p>
        <p className='font-bold text-[#202562] text-[32px] max-[900px]:text-[24px] max-[600px]:text-[15px] ml-2'>
          1000Р
        </p>
      </div>
    </div>
  );
};

export default BasketItem;
