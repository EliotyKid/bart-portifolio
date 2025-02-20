import { MenuItens } from "@/MockData/Menu";
import Link from "next/link";

const Header = () => {
  return ( 
    <header className="bg-slate-600 w-full h-20">
      
      <ul className="flex gap-4 max-w-[700px] h-full mx-auto items-center justify-center">
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