"use client"

import Featured from "./Featured/page"
import Banner from "./Banner/page"
import Booking from "./Order/page"



export default function Home() {
   return (
  
   <div className='flex flex-col bg-slate-100'>
   
<Banner/>
<Featured/>
<Booking/>

   </div>
  );
}
