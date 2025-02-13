import { ShoppingBagIcon } from 'lucide-react'
import React from 'react'

const ShoppingCartButton = () => {
  return (
    <div className='relative'>
        <span className='absolute -top-3 -right-2 w-6 h-6
        text-center flex items-center justify-center flex-col text-xs
        bg-red-500 text-white rounded-full'>
            0
        </span>
        <ShoppingBagIcon cursor={'pointer'} size={26}/>
    </div>
  )
}

export default ShoppingCartButton