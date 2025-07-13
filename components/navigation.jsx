import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { Button } from './ui/button'
const Navigation = () => {
  return (
    <div className=" mt-2 mx-3 sm:mt-3 sm:mx-7 px-2 h-12 sm:h-12 bg-white rounded-full  flex justify-between items-center">
      <div className="flex items-center relative h-full w-1/2 sm:w-1/3">
        <Link href="/">
        <Image src="/logo.png" fill alt='' className='object-contain object-left'/>
        </Link>
      </div>
       <div>
        <SignedOut>
                   <SignInButton>
                       <div className="">
                      <Button variant="secondary" size="capsule">sign in</Button>
                   </div>
                   </SignInButton>
                </SignedOut>
                <SignedIn >
                  <div className=" h-20 w-20 flex justify-center items-center">
                    <UserButton />
                  </div>
                </SignedIn>
       </div>
           
    </div>
  
  )
}

export default Navigation