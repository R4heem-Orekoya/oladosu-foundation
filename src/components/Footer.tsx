import { Facebook, Instagram, Twitter } from "lucide-react"
import Logo from "./Logo"

const Footer = () => {
   return (
      <footer className="w-[min(1400px,90%)] mx-auto py-8">
         <div className="flex justify-between items-start max-sm:flex-col max-sm:items-center gap-8 pb-16">
            <div className="flex items-center gap-2">
               <Logo />
               <p className="text-lg font-medium text-emerald-600">Helping the needy</p>
            </div>
            
            <div className="flex flex-col max-sm:text-center">
               <h2 className="font-semibold text-emerald-600 text-lg">GET IN TOUCH</h2>
               <p className="font-medium text-sm">Contact Us</p>
               <ul className="flex gap-4 items-center mt-4">
                  <li>
                     <a href="https://www.facebook.com/profile.php?id=61560487091903&mibextid=ZbWKwL">
                        <Facebook className="w-7 h-7 text-zinc-500 hover:text-zinc-600 duration-300" strokeWidth={1.5}/>
                     </a>
                  </li>
                  <li>
                     <a href="#">
                        <Twitter className="w-7 h-7 text-zinc-500 hover:text-zinc-600 duration-300" strokeWidth={1.5}/>
                     </a>
                  </li>
                  <li>
                     <a href="https://www.instagram.com/_oladosucharityfoundation?igsh=MXQ2bnhpbXlpcGU3Yw==">
                        <Instagram className="w-7 h-7 text-zinc-500 hover:text-zinc-600 duration-300" strokeWidth={1.5}/>
                     </a>
                  </li>
               </ul>
            </div>
         </div>
         
         <div className="border-t border-zinc-200 pt-8">
            <p className="text-center text-sm font-medium text-zinc-600">copyright@2024</p>
         </div>
         
      </footer>
   )
}

export default Footer
