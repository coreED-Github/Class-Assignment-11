"use client"
import Link from 'next/link';
import { XMarkIcon } from '@heroicons/react/16/solid';
import React from 'react';

interface Props {
  Nav: boolean;
   closeNavbar: () => void
}
export default function MubNav({ Nav, closeNavbar}:Props){
 const navAnimation = Nav ? 'translate-x-0' : 'translate-x-[-100%]';
 
  return (
    <div
      className={`fixed ${navAnimation} transform bg-gray-100 items-end w-[35%] border border-spacing-9 transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000]
      `}>
<div className='mt-32 flex flex-col items-center text-sm justify-center'>
                                  <Link href="./"><div className='nav-link-mobile  text-sky-900'>Home</div></Link>
                                   <Link href="/Featured"><div className='nav-link-mobile text-sky-900'>Featured</div></Link>
                                    <Link href="/Order"><div className='nav-link-mobile text-sky-900'>Booking</div></Link>
                                    <Link href="/Contact"><div className='nav-link-mobile text-sky-900'>Contac</div></Link>
       </div>
      <div
        onClick={closeNavbar}
        className='absolute z-[100000000] cursor-pointer top-[4rem] right-[1rem] w-[2rem] h-[2rem] text-blue-800'>
      
        <XMarkIcon />
      </div>

    </div>

  )
}
