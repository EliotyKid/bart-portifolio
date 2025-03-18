"use client"
import { MenuItens } from "@/MockData/Menu";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [show, setShow] = useState(false)

  const handleShow = () => {
    if (scrolled){
      setShow(!show)
    }
  }

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  },[])

  return ( 
    <header 
      className={`bg-white/80 ${(!scrolled ) ? "w-full top-0 h-20" : `${show ? "w-full" : "w-15 "} h-15 top-5 left-5 rounded-2xl`}  sticky z-40  transition-all duration-500 shadow-xl`}
    >
      <div 
        className={` flex justify-center items-center h-full w-15 z-50 absolute rounded-2xl cursor-pointer ${scrolled ? "block": "hidden"}`} 
        onClick={handleShow}
      >
        {
          !show ? (<Menu className="size-10"/>) : (<X className="size-10"/>)
        }
        
      </div>

      <div className={` w-full h-full flex items-center p-6  mx-auto justify-around ${(scrolled && !show) ? "opacity-0" : "opacity-100 delay-75"} transition-all duration-300`}>
        <h1 className="text-black text-2xl font-bold hidden sm:block"> Consórcio</h1>

        <ul className={`flex gap-4 `}>
          {MenuItens.map((iten) => (
            <li 
              key={iten.id}
              className="text-black text-lg font-bold"
            > 
              
              <Link href={`${iten.route}`}>
                {iten.title} 
              </Link>
            </li>
          ))}
          
        </ul>
      </div>
      
      
    </header>
   );
}
 
export default Header;