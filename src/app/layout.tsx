"use client"
import Footer from "@/components/Footer";
import "./globals.css";
import MainNav from "@/components/MainNav";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  return (
    <html lang="en">
      <body
      
      >
       <MainNav/>
        {children}
       <Footer/>
      </body>
    </html>
  );
}
