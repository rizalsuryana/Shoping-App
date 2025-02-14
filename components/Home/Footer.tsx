import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className="pt-20 pb-12">
      {/* grid sistem */}
      <div className="w-4/5 border-b-[1.2px] pb-8 border-b-slate-500 mx-auto grid
    grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <h1 className='text-[25px] uppercase font-semibold text-black mb-4'>
            Zay Shop
          </h1>
          <p className='text-sm text-black opacity-60'>Lorem ipsum dolor sit amet,
             consectetur adipisicing elit. Nisi alias facilis quaerat.
          </p>
          <p className='text-base mt-6 text-black opacity-80'>
            +62 817-7076-xxxx - itrizalsuryana@gmail.com
          </p>
        </div>
        {/* 2nd part */}

        <div className="lg:mx-auto">
          <h1 className='footer__title'>
                Information
          </h1>
          <p className='footer__link'>About Us</p>
          <p className='footer__link'>Pripacy Police</p>
          <p className='footer__link'>Return Police</p>
          <p className='footer__link'>Dropshipping</p>
          <p className='footer__link'>Shipping Police</p>
        </div>
        {/* 3rd */}
        <div className="lg:mx-auto">
          <h1 className='footer__title'>
                Account
          </h1>
          <p className='footer__link'>Dashboard</p>
          <p className='footer__link'>My Orders</p>
          <p className='footer__link'>Account Details</p>
          <p className='footer__link'>Track Orders</p>
        </div>
        {/* 4 */}
        <div className="lg:mx-auto">
          <h1 className='footer__title'>
                Shop
          </h1>
          <p className='footer__link'>Affiliate</p>
          <p className='footer__link'>Best Sellers</p>
          <p className='footer__link'>Lates Products</p>
          <p className='footer__link'>Sale Products</p>
        </div>
      </div>
      {/* copyright */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 justify-between w-4/5 mx-auto">
        <p className='text-sm text-black opacity-60'>
    © Rizal Suryana 2025
        </p>
        <Image src='/images/pay.svg' alt='pay'
          width={230} height={230}
          className='object-contain sm:ml-auto'/>
      </div>
    </div>
  );
};

export default Footer;