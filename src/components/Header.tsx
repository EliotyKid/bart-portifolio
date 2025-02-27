"use client"
import { MenuItens } from "@/MockData/Menu";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

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
    <header className={`bg-slate-600 ${!scrolled ? "w-full top-0 h-20" : "w-15 h-15 top-5 left-5 rounded-2xl opacity-65"}  sticky z-40  transition-all duration-500`}>
      

        <ul className={`flex gap-4 max-w-[700px] h-full mx-auto items-center justify-center ${scrolled ? "opacity-0" : "opacity-100 delay-75"} transition-all duration-300`}>
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