// src/app/pages/done/page.tsx

import React from 'react';

const Done: React.FC = () => {
  return (
    <div className='flex flex-col h-screen justify-center items-center bg-gray-200 capitalize'>
      <h1 className='text-8xl mb-[40px] font-bold italic text-blue-500'>
        Thank you for shopping!!!
      </h1>
      <p className='text-2xl'>
        Your order will be delivered in three business days.
      </p>
    </div>
  );
};

// Use only default export
export default Done;
