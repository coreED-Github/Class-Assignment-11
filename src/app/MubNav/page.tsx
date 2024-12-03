"use client"
import Link from 'next/link';
import { XMarkIcon } from '@heroicons/react/16/solid';
import React from 'react';
interface Props {
  Nav: boolean;
  closeNavbar: () => void
}
const MobileNav = ({ Nav, closeNavbar }: Props) => {
 

  const navAnimation = Nav ? 'translate-x-0' : 'translate-x-[-100%]';
  return (
    <div
      className={`fixed ${navAnimation} transform bg-cyan-900 transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000]
      `}>

      <div className='mt-32 flex flex-col items-center justify-center'>
                                  <Link href="./"><div className='nav-link-mobile'>Home</div></Link>
                                   <Link href="/Featured"><div className='nav-link-mobile'>Featured</div></Link>
                                    <Link href="/Order"><div className='nav-link-mobile'>Booking</div></Link>
                                    <Link href="/Footer"><div className='nav-link-mobile'>Contac</div></Link>
       </div>
      <div
        onClick={closeNavbar}
        className='absolute z-[100000000] cursor-pointer top-[4rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-500'>
      
        <XMarkIcon />
      </div>

    </div>

  )
}
export default MobileNav