"use client"
import { MenuItens } from "@/MockData/Menu";
import Link from "next/link";
import { useEffect, useState } from "react";

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
    <header className={`bg-slate-600 ${(!scrolled ) ? "w-full top-0 h-20" : `${show ? "w-full" : "w-15  opacity-65"} h-15 top-5 left-5 rounded-2xl`} sticky z-40  transition-all duration-500`}
      
    >
      <div 
        className={`${show ? "bg-green-400" : "bg-red-400"} h-full w-15 z-50 absolute rounded-2xl cursor-pointer ${scrolled ? "block": "hidden"}`} 
        onClick={handleShow}
      >
      </div>

        <ul className={`flex gap-4 max-w-[700px] h-full mx-auto items-center justify-center ${(scrolled && !show) ? "opacity-0" : "opacity-100 delay-75"} transition-all duration-300`}>
          {MenuItens.map((iten) => (
            <li 
              key={iten.id}
              className="text-white text-lg font-bold"
            >
              <Link href={`${iten.route}`}>
                {iten.title} 
              </Link>
            </li>
          ))}
          
        </ul>
      
      
    </header>
   );
}
 
export default Header;