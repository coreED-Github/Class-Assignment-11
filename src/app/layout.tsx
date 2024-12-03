"use client"

import Footer from "./Footer/page";
import "./globals.css";
import MobileNav from "./MubNav/page";
import Navbar from "./Navbar/page";
import { useState } from "react";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [Nav, setNav] = useState(false)
  const openNavbar = ()=> setNav(true)
  const closeNavbar = ()=> setNav(false)
  return (
    <html lang="en">
      <body
      
      >
       <MobileNav Nav={Nav} closeNavbar={closeNavbar}/>
       <Navbar openNavbar={openNavbar} />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
