"use client"
import React from "react";
import Link from "next/link";
 export default function DetailOne(){
   return(
<div>
    <div className="bg-white ">
    <h1 className="text-sm text-gray-600 px-6 py-3 ml-5 mr-5">Home / New Cars / Fortuner /Toyota Fortuner</h1>
    </div>
    <div className="bg-white">
    <h1 className="text-3xl font-bold text-blue-800 px-20 py-1">Toyota Fortuner Price in Pakistan 2024, Images, Reviews & Specs</h1>
    </div>
<div className=" flex justify-center flex-col items-center bg-white">
  <div className="h-80">
<img className="cursor-pointer w-full items-center h-80" src="https://cache4.pakwheels.com/system/car_generation_pictures/7335/original/Fortuner_-_PNG.png?1677568997"/>
</div>
<div className="bg-white">
<p className="text-center items-center px-20 ">
The price of Toyota Fortuner 2024 in Pakistan ranges from PKR 14,499,000 
for the base variant 2.7 G to PKR 19,899,000 for the top of the line GR-S variant.
 These prices of Toyota Fortuner in Pakistan are ex-factory.   </p>
<h2 className="text-green-500 py-1 text-center text-2xl font-bold">PKR 1.99 crore</h2>
    
</div>

<div className="bg-white py-2 w-full flex justify-center">
 <Link href="/PageTwoTwo">
 <button className="py-1 bg-blue-950 text-white flex justify-center text-center w-32 h-8 rounded-md hover:bg-blue-800">
Make Pyment
 </button>
 </Link>  
</div> 



</div>


</div>
   ) 
 }