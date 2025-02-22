import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SuccessPage = () => {
  return (
    <div className='w-full h-[60vh] flex items-center justify-center flex-col'>
      <Image src='/images/order.svg' alt='success' width={300} height={300}/>
      <h1 className='mb-8 mt-2 text-3xl font-bold uppercase text-green-600'>
      Order Successful
      </h1>
      <Link href='/'>
        <Button >Back to Home</Button>
      </Link>
    </div>
  );
};

export default SuccessPage;