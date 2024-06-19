import { Link } from "react-router-dom"
import Logo from "./Logo"
import { AlignJustify, X } from "lucide-react"
import { cn } from "../lib/utils"
import { useState } from "react"

const Navbar = () => {
   const [isActive, setIsActive] = useState(false)
   
   return (
      <header className="sticky top-0 bg-white/70 backdrop-blur-md z-50 h-20">
         <nav className="w-[min(1400px,90%)] mx-auto h-20 flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 text-emerald-600 font-medium">
               <Logo />
               <div className="grid -gap-2">
                  <p className="text-xs">Oladosu</p>
                  <p className="text-xs">Foundation</p>
               </div>
            </Link>
            
            <ul className={cn("flex items-center gap-10 max-sm:flex-col max-sm:bg-white max-sm:backdrop-blur-sm max-sm:absolute max-sm:top-20 max-sm:w-full max-sm:left-[-100%] max-sm:items-start max-sm:pl-[5%] max-sm:gap-4 max-sm:py-[5%] duration-300", {"max-sm:left-0": isActive})}>
               <li className="text-lg font-medium text-zinc-700 relative before:-bottom-1 before:w-0 before:absolute before:h-[3px] before:rounded-sm before:bg-orange-500 hover:before:w-full before:duration-300">
                  <a href="/#stories">Events</a>
               </li>
               <li className="text-lg font-medium text-zinc-700 relative before:-bottom-1 before:w-0 before:absolute before:h-[3px] before:rounded-sm before:bg-orange-500 hover:before:w-full before:duration-300">
                  <Link to="/contact">Contact Us</Link>
               </li>
            </ul>
            
            <button
               onClick={() => setIsActive(!isActive)}
               className="sm:hidden cursor-pointer"
            >
               {isActive ? <X className="h-7 w-7 text-zinc-700 "/> : <AlignJustify className="h-7 w-7 text-zinc-700 " /> }
            </button>
            
         </nav>
      </header> 
   )
}

export default Navbar
