"use client"
import { TypeAnimation } from 'react-type-animation';

const TextEfact = () => {
  return (
    <TypeAnimation
      sequence={[

        "Find Your Car",
         1500,
        "Your Best Partner",
        1500,
        'Accelerate Dreams',
        1500,
        'Drive Smarter',
        1500,
        'Injoy Your Journey',
        1500
      ]}
     
      speed={50}
     className="text-2xl md:text-2xl text-sky-800 font-bold uppercase"
      repeat={Infinity}
    />
  );
};
export default TextEfact;