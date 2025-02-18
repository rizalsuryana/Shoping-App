'use client';

import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='w-full h-[calc(100vh-12vh)] flex items-center justify-center bg-gradient-to-r from-blue-50 to-green-50'>
      <div className='w-4/5 mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-12'>
        {/* Image Section */}
        <motion.div 
          className='hidden lg:flex justify-center'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image 
            src='/images/hero.png' 
            alt='hero' 
            width={500} 
            height={500} 
            className='w-[80%] h-auto max-w-md'
          />
        </motion.div>

        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-gray-800'>
            Mega Sale <span className='text-blue-500'>Special</span> Offer Up To{' '}
            <span className='text-green-500'>60%</span> Off
          </h1>
          <p className='text-lg md:text-xl text-gray-600 mt-4'>
          Don't miss out on our exclusive deals! Grab your favorite products at the best prices.
          </p>
          <div className='flex mt-6 items-center space-x-4'>
            <Button 
              size='lg' 
              className='bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white px-6 py-3 rounded-lg shadow-lg'
            >
              Shop Now
            </Button>
            <Button 
              size='lg' 
              className='bg-green-500 hover:bg-green-600 transition-all duration-300 text-white px-6 py-3 rounded-lg shadow-lg'
            >
              Explore More
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;