"use client"
import React from "react";
import Link from "next/link";
 export default function DetailOne(){
   return(
<div>
    <div className="bg-white ">
    <h1 className="text-sm text-gray-600 px-6 py-3 mr-5 ml-5">Home / New Cars / Toyota /Toyota Land Cruiser</h1>
    </div>
    <div className="bg-white">
    <h1 className="text-3xl font-bold text-blue-800 px-20 py-1">Toyota Land Cruiser 2024 Price in Pakistan, Pictures & Reviews</h1>
    </div>
<div className=" flex justify-center flex-col items-center bg-white">
  <div className="h-80">
<img className="cursor-pointer w-full items-center h-80" src="https://cache1.pakwheels.com/system/car_generation_pictures/6008/original/Land_Cruiser_300_-_PNG.png?1635484577"/>
</div>
<div className="bg-white">
<p className="text-center items-center px-20 ">
The price of Toyota Land Cruiser 2024 in Pakistan is PKR 120,000,000 for its ZX Gasoline 3.5L variant.
 This price of Toyota Land Cruiser in Pakistan is ex-factory.
</p>
<h2 className="text-green-500 py-1 text-center text-2xl font-bold">PKR 12.0 crore</h2>
    
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