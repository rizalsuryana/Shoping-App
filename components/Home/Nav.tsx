import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearcBox from '../Helper/SearcBox'
import { HeartIcon, UserIcon } from 'lucide-react'
import ShoppingCartButton from '../Helper/ShoppingCartButton'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

const Nav = () => {
  return (
    <div className='h-[12vh] sticky top-0 z-[1] bg-white shadow-md'>
        <div className="flex items-center justify-between w-[95%] md:w-4/5 mx-auto h-full">
        {/* Logo */}
        <Link href='/'>
        <Image src='/images/logo.png' alt='logo' width={140} height={140} />
        </Link>
        {/* icon */}
        <div className="flex items-center space-x-6">
            {/* searcbox */}
            <SearcBox />
            <HeartIcon size={26} cursor={'pointer'} />
            {/* Shopping card button */}
            <ShoppingCartButton />
            {/* signin user */}
            <SignedIn>
                <UserButton />
            </SignedIn>
            {/* not signin */}
            <SignedOut>
                <SignInButton>
            {/* user button */}
            <UserIcon size={26} cursor={'pointer'} />
                </SignInButton>
            </SignedOut>
        </div>
    </div>
    </div>
  )
}

export default Nav