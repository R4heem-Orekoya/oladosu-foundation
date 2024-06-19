import { Link } from "react-router-dom"
import Button from "../components/Button"
import { usePaystackPayment } from 'react-paystack';
import { useState } from "react";
import { toast } from "sonner";


const Donate = () => {
   const [amount, setAmount] = useState(0)
   const [email, setEmail] = useState("")
   
   const amountInNaira = amount * 100;
   
   const initializePayment = usePaystackPayment({
      reference: (new Date()).getTime().toString(),
      channels: ["card"], 
      email,
      amount: amountInNaira,
      publicKey:  `${import.meta.env.VITE_PAYSTACK_PUBLIC_KEY}`
   })
   
   const onSuccess = () => {
      toast.success("Thank you for your generous donation!. Together, we're building a better future.")
   };
   
   return (
      <section className="py-16 min-h-[calc(100vh-80px)]">
         <h2 className="text-center text-2xl md:text-4xl font-semibold text-zinc-800">Donate Now</h2>
         <p className="max-w-xl text-center my-4 text-sm sm:text-base mx-auto text-zinc-500 font-medium">
            Even a small donation can make a big difference for 
            people living in rural areas. Support <span className="text-zinc-800 font-bold">Oladosu Foundation </span> 
            and help us build a brighter future for those in the rural areas.
         </p>
         
         <div className="mx-auto max-w-[min(400px,100%)] mt-8 flex flex-col items-center">
            <div className="flex flex-col items-center gap-4">
               <div className="flex gap-2 max-sm:items-center max-sm:flex-col">
                  <div className="flex flex-col max-sm:items-center gap-1">
                     <label htmlFor="amount" className="text-xs font-medium ">
                        Email
                     </label>
                     <input
                        value={email}
                        onChange={(e) => {
                           setEmail(e.target.value)
                        }}
                        className="h-10 w-full border-zinc-200 border-2 rounded-md focus:outline-emerald-600 px-4"
                        type="email" name="email" id="email"/>
                  </div>
                  <div className="flex flex-col max-sm:items-center gap-1">
                     <label htmlFor="amount" className="text-xs font-medium ">
                        Amount (Naira)
                     </label>
                     <input
                        value={amount > 0 ? amount : ""}
                        onChange={(e) => {
                           setAmount(Number(e.target.value))
                        }}
                        className="h-10 w-full border-zinc-200 border-2 rounded-md focus:outline-emerald-600 px-4"
                        type="number" name="amount" id="amount"/>
                  </div>
                  
               </div>
               <Button
                  onClick={() => {
                     initializePayment({onSuccess})
                  }}
                  disabled={amount === 0 || email === ""} 
                  className="mt-4 py-2 px-4 text-sm disabled:grayscale disabled:cursor-not-allowed">Donate</Button>
            </div>
            
            <p className="py-6 text-zinc-500 font-medium">OR</p>
            
            <div className="flex flex-col items-center">
               <h3 className="text-lg text-zinc-800 text-center">
                  <span>
                     <Link to="/contact" className="underline underline-offset-2">Contact us </Link>
                  </span>
                   if you want to Get Involved
               </h3>
            </div>
         </div>
      </section>
   )
}

export default Donate