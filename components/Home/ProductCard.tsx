'use client';

import { Product } from '@/typing';
import { StarIcon } from 'lucide-react';
import { FaCartPlus, FaRegHeart } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '@/store/cartSlice';
import { useToast } from '@/hooks/use-toast';

type Props = {
    product: Product;
}

const ProductCard = ({ product }:Props) => {
  const num = Math.round(product.rating.rate);
  const ratingArray = new Array(num).fill(0);
  const { toast } = useToast();

  const dispatch = useDispatch();
  const addToCartHandler = (product:Product) => {
    toast({
      description: 'Item has been added to cart',
      variant: 'success',
    });
    dispatch(addItem(product));
  };

  return (
    <div className='p-4 item-shop'>
      <div className='flex justify-end'>
        <Button size={'icon'} className='bg-red-500'>
          <FaRegHeart size={18} />
        </Button>
      </div>
      <div className='w-[200px] h-[150px]'>
        <Image src={product.image}  alt={product.title} width={100} height={100}
          className='w-[80%] h-[80%] object-contain'/>
      </div>
      <p className='mt-5 text-xs capitalize text-gray-600'>{product.category}</p>
      <Link href={`/product/product-details/${product.id}`}>
        {/* title */}
        <h1
          className='text-lg cursor-pointer hover:text-blue-900 transition-all
        hover:underline sm:w-full sm:truncate mt-2 text-black font-semibold'
        >{product.title}</h1>
      </Link>
      {/* rating */}
      <div className="flex items-center">
        {ratingArray.map((star)=>(
          <StarIcon key={Math.random() *1000} size={16} fill='yellow'
            className='text-yellow-500'/>
        ))}
      </div>
      {/*  price */}
      <div className="flex mt-2 items-center space-x-2">
        <p className=' text-black text-base line-through font-semibold opacity-50'>
          {`$${((product?.price ?? 0) / 0.4).toFixed(2)}`}
        </p>
        <p className='text-black text-lg font-bold  opacity-80'>
                ${product?.price}
        </p>
      </div>
      {/* button */}
      <div className="mt-4 flex items-center justify-between">
        <Button
        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600
         text-white px-4 py-2 rounded-lg shadow-md transition-all"
          onClick={() => {addToCartHandler(product);}}
        >
          <FaCartPlus  size={18}/>
          <span>Add To Cart</span>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;