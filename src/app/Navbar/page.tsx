"use client"
import { Bars3Icon } from '@heroicons/react/16/solid'
import Link from 'next/link';
import React from 'react'
interface Props {
    openNavbar: () => void;
};
function Navbar({ openNavbar }: Props) {

    return (
        <div>
            <div className='w-full h-18 flex items-center bg-cyan-900 shadow-md'>
                <div className='flex justify-between ml-10 items-center w-full mx-auto h-20'>
                    <h1 className='flex-0.6 cursor-pointer  text-3xl text-white font-bold'>
                        Rev
                        <span className='text-yellow-500'>
                            Motion
                        </span>
                    </h1>
                  
                            <Link href="./"><div className='nav-link'>Home</div></Link>
               <Link href="/Featured"><div className='nav-link'>Featured</div></Link>
                   <Link href="/Order"><div className='nav-link'>Order</div></Link>
   <Link href="/Footer"><div className='nav-link'>Contact</div></Link>
                                                  
<div onClick={openNavbar}>
                        <Bars3Icon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-500' />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Navbar