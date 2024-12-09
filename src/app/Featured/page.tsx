"use client"
import Link from "next/link";
interface Car {
    idNo: number;
    name: string;
    price: string;
    review: string;
    rating: string;
    imageUrl: string;
  }
  
  const cars: Car[] = [
    {
      idNo: 1,
      name: "Toyota Corolla",
      price: "PKR 59.7 - 75.5 lacs",
      review: "989 Reviews",
      rating:"★★★★☆",
      imageUrl: "https://cache1.pakwheels.com/system/car_generation_pictures/5361/original/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg?1606903674",
    },
    {
      idNo: 2,
      name: "Honda Civic",
      price: "PKR 86.6 - 99.0 lacs ",
      review: "865 Reviews",
      rating: "★★★☆☆",
      imageUrl: "https://cache4.pakwheels.com/system/car_generation_pictures/7370/original/Cover.jpg?1677570254",
    },
    {
      idNo: 3,
      name: "KIA Picanto",
      price: "PKR 36.0 - 38.5 lacs ",
      review: "890 Reviews",
      rating: "★★☆☆☆",
      imageUrl: "https://cache3.pakwheels.com/system/car_generation_pictures/6017/original/Picanto_-_PNG.png?1635946684",
    },
    {
      idNo: 4,
      name: "Hyundai Tucson",
      price: "Hyundai Tucson",
      review: "730 Reviews",
      rating: "★★☆☆☆",
      imageUrl: "https://cache3.pakwheels.com/system/car_generation_pictures/6022/original/Tucson_-_PNG.png?1635948541",
    },
    {
      idNo: 5,
      name: "Toyota Land Cruiser",
      price: "PKR 12.0 crore",
      review: "680 Reviews",
      rating: "★★★☆☆",
      imageUrl: "https://cache1.pakwheels.com/system/car_generation_pictures/6008/original/Land_Cruiser_300_-_PNG.png?1635484577",
    },
    {
      idNo: 6,
      name: "Honda BRV",
      price: "PKR 63.0 lacs",
      review: "680 Reviews",
      rating: "★★☆☆☆",
      imageUrl: "https://cache1.pakwheels.com/system/car_generation_pictures/6430/original/Honda_BRV_Front.jpg?1652159445",
    },

  ];
  interface CarCardProps {
    car: Car;
  }
  
  
  
  const CarCard:React.FC<CarCardProps>= ({car}) => {
    return (
     <div>
     
      <div className="border rounded shadow-md bg-white">
      <Link href="/Cart">
        <img
          src={car.imageUrl}
          alt={car.name}
          className="rounded"
        />
        </Link> 
        <div className="flex flex-col justify-center items-center">
        <h1 className="text-blue-900 text-2xl font-bold mt-2">{car.name}</h1>
        <p className="text-green-600 font-bold">{car.price}</p>
        <p className="text-sm text-gray-600">{car.review}</p>
        <p className="text-yellow-500 font-bold text-2xl">{car.rating}</p>
        </div>
      </div>
      </div>
    );
  };
  const Featured  = () => {
    return (
      <div className="p-6  pb-2 bg-slate-100">
         <div className="">
                    <h1 className="text-4xl md:text-2xl mb-3 font-bold text-blue-900">Featured New Cars</h1>
                </div>
                <div className="w-full">
                    <ul className="items-start flex flex-row sm:flex-col md:flex-row lg:flex-row gap-4 mb-5 " >
                        <li><Link href="/DetailOne" className="hover:font-bold mb-2 pb-2 rounded-md text-1xl font-medium">Popular</Link></li>
                        <li><Link href="/DetailTwo" className=" hover:font-bold mb-2 pb-2 rounded-md text-1xl font-medium">Upcoming</Link></li>
                        <li><Link href="/DetailThree" className=" hover:font-bold mb-2 pb-2 rounded-md text-1xl font-medium">Newly Launched</Link></li>
                    </ul>
 </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cars.map((car) => (
            <CarCard key={car.idNo} car={car} />
          ))}
        </div>
       
      </div>
    
    );
   
  };
  
  export default Featured;