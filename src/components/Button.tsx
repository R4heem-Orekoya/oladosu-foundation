import { ReactNode } from "react"
import { cn } from "../lib/utils"

interface buttonProps {
   children: ReactNode,
   className?: string,
   disabled?: boolean,
   onClick?: () => void
}

const Button = ({ children, className, disabled, onClick }: buttonProps) => {
   return (
      <button
         onClick={onClick} 
         disabled={disabled} 
         className={cn("px-6 py-3 rounded-md font-medium tracking-tight text-white bg-emerald-600 hover:opacity-90", className)}>
         {children}
      </button>
   )
}

export default Button
