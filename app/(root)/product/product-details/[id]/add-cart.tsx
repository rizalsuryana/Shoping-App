'use client';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { addItem,  } from '@/store/cartSlice';
import { Product } from '@/typing';
import React from 'react';
import { useDispatch } from 'react-redux';
import { FaCartPlus } from 'react-icons/fa';

const AddToCart = ({ product }:{product:Product}) => {
  const dispatch = useDispatch();
  const { toast } = useToast();

  const addCartHandler = () =>{
    toast({
      description: 'Item Has Been Added to Cart',
      variant: 'success'
    });

    dispatch(addItem(product));
  };

  return (
    <Button onClick={()=> addCartHandler()} className='mt-6  bg-blue-500 hover:bg-blue-600
         text-white'>
      <FaCartPlus />
        <span>Add To Cart</span>
    </Button>
  );
};

export default AddToCart;