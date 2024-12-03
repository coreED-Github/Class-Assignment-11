import { DevicePhoneMobileIcon, EnvelopeIcon, EnvelopeOpenIcon } from '@heroicons/react/16/solid'
import { MapIcon } from '@heroicons/react/24/solid'
import React from 'react'

const Footer = () => {
  return (
    <div className="pt-[8rem] pb-[4rem] bg-slate-200">
        <div className='grid border-b-[1px] pb-[6rem] border-gray-800 grid-cols-1 lg:grid-cols-3 md:grid-cols-3
        w-[80%] mx-auto gap-[3rem]'>
          <div className='flex items-center space-x-6'>
            <div className='md:w-[6.5rem md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center
             rounded-full bg-sky-900'>
                <MapIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-sky-100'/>
                </div>
                <div >
                 <h1 className='text-[25px] mb-[0.2rem] font-semibold text-blue-950'>
                  Address  
                    </h1>
               <p className='text-[17px] w-[90%] text-blue-950 opacity-60'>Sector 11/A , Karachi , Pakistan</p>
                </div>
            </div>

            <div className='flex items-center space-x-6'>
            <div className='md:w-[6.5rem md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center
             rounded-full bg-sky-900'>
                <DevicePhoneMobileIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-sky-100'/>
                </div>
                <div >
                 <h1 className='text-[25px] mb-[0.2rem] font-semibold text-blue-950'>
                  Contact Number  
                    </h1>
               <p className='text-[17px] w-[90%] text-blue-950 opacity-60'>0349-2908035</p>
                </div>
            </div>  

            <div className='flex items-center space-x-6'>
            <div className='md:w-[6.5rem md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center
             rounded-full bg-sky-900'>
                <EnvelopeIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-sky-100'/>
                </div>
                <div >
                 <h1 className='text-[25px] mb-[0.2rem] font-semibold text-blue-950'>
                  Send us Email  
                    </h1>
               <p className='text-[17px] w-[90%] text-blue-950 opacity-60'>sairanasir853@gmail.com</p>
                </div>
            </div>  
</div>



    </div>
  )
}

export default Footer