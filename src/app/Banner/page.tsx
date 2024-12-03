"use client"
import React from 'react'

import Link from 'next/link'
import TextEfact from '../TextEfect/page'

export default function Banner() {
  return (
    <div className='h-96 relative overflow-hidden bd-gradient-to-r from-black to-white-700 font-sams px-8 py-2 mb-8'>
      <div className='absolute inset-0 cpacity-20' >
        <img src="https://t4.ftcdn.net/jpg/02/21/17/23/240_F_221172345_dk6L7O0E90RL4HHINf6wsizfl4w7l0fE.jpg"
          className='w-full h-full object-covre' />

      </div>
      <div className='relative mt-16 w-6/12'>
        <div className='flex flex-col items-start '>
      <h2 className='text-sky-900 text-3xl sm:text-0.2xl md:text-3xl lg:text-4xl font-bold'>Rev Motion-Ride in Style</h2>
      <p className='text-lg sm:text-sm mt-6'>
        <TextEfact />
        </p>
      
        <div className='py-1 mt-1 w-96 items- '>
       <Link href="/Cart" >
    <button  type="button"
    className='font-bold rounded-sm  bg-slate-200 mt-4 py-2 px-2 shadow-lg hover:bg-transparent transition duration-300 text-blue-800'>
    Advance Filter
  </button> 
  </Link>   
  </div>    
 </div>
       </div>
     
     </div>
  )
}
