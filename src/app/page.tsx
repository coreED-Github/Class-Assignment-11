"use client"
import Banner from "./Banner/page";
import Featured from "./Featured/page";
import Booking from "./Order/page";
export default function Home() {
   return (
  <div className='flex flex-col bg-slate-100'>
<div>
</div>
<Banner/>
<Featured/>
<Booking/>

   </div>
  );
}
