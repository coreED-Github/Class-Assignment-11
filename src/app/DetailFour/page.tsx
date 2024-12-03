"use client"
import React from "react";
import Link from "next/link";
 export default function DetailFour(){
   return(
<div>
    <div className="bg-white ">
    <h1 className="text-sm text-gray-600 px-6 py-3 mr-5 ml-5">Home / New Cars / Tyota / Toyata yaris</h1>
    </div>
    <div className="bg-white">
    <h1 className="text-3xl font-bold text-blue-800 px-20 py-1">Toyota Yaris 2024 Price in Pakistan, Images, Reviews & Specs</h1>
    </div>
<div className=" flex justify-center flex-col items-center bg-white">
  <div className="h-80">
<img className="cursor-pointer w-full items-center h-80" src="https://cache3.pakwheels.com/system/car_generation_pictures/7721/original/Yaris.png?1716536903"/>
</div>
<div className="bg-white">
<p className="text-center items-center px-20 ">The price of Toyota Yaris 2024 in Pakistan ranges from PKR 4,479,000 for the base variant GLI MT 1.3 to PKR 6,319,000 for the top of the line ATIV X CVT 1.5 Black Interior variant.
These prices of Toyota Yaris in Pakistan are ex-factory.</p>
<h2 className="text-green-500 py-1 text-center text-2xl font-bold">PKR 63.2 lacs </h2>

    
</div>

<div className="bg-white py-2 w-full flex justify-center">
 <Link href="/PageTwoOne">
 <button className="py-1 bg-blue-950 text-white flex justify-center text-center w-32 h-8 rounded-md hover:bg-blue-800">
Make Pyment
 </button>
 </Link>  
</div> 



</div>


</div>
   ) 
 }