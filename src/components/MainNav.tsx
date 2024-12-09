"use client"
import { useState } from "react"
import MubNav from "./MubNav"
import Navbar from "./Navbar"
export default function MainNav(){
    const [Nav, setNav] = useState(false)
    const openNavbar = ()=> setNav(true)
    const closeNavbar = ()=> setNav(false)
    return(
        <div>
 <MubNav Nav={Nav} closeNavbar={closeNavbar}/>
 <Navbar openNavbar={openNavbar} />

        </div>
    )
}