import { cn } from "../lib/utils"
import logo from "../assets/logo.png"

const Logo = ({ className }: {className?: string}) => {
   return (
      <div className={cn("w-14 aspect-square object-cover", className)}>
         <img src={logo} alt="logo" className="w-full h-full"/>
      </div>
   )
}

export default Logo
