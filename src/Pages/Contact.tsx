import { Facebook, Instagram, Mail, MapPin, Phone, Smartphone, Twitter, User } from "lucide-react"
import Button from "../components/Button"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { MessageCredentialsValidator, TMessageCredentialsValidator } from "../lib/validators"
import { cn } from "../lib/utils"
import { useRef, useState } from "react"
import emailjs from '@emailjs/browser';
import { toast } from "sonner"

const Contact = () => {
   const [isLoading, setIsLoading] = useState(false)
   const form = useRef<HTMLFormElement>(null);
   const { register, handleSubmit, formState: { errors } } = useForm<TMessageCredentialsValidator>({
      resolver: zodResolver(MessageCredentialsValidator)
   });
   
   const onSubmit = () => {
      setIsLoading(true)
      emailjs.sendForm(`${import.meta.env.VITE_EMAILJS_SERVICE_ID}`,`${import.meta.env.VITE_EMAILJS_TEMPLATE_ID}`, form.current as HTMLFormElement, {
         publicKey: `${import.meta.env.VITE_EMAILJS_PUBLIC_KEY}`
      })
      .then(
         () => {
         toast.success("Your email was sent successfully. Our team will get back to you within 24 hours.")
         form.current?.reset()
         setIsLoading(false)
      }, (error) => {
         toast.error("Couldn't send your email. Please try again!")
         setIsLoading(false)
         console.log(error);
      })
   }
   
   
   return (
      <section className="py-10 pb-20 min-h-[calc(100vh-80px)] grid grid-cols-1 md:grid-cols-2 items-center gap-16 max-sm:gap-8">
         <div className="md:aspect-square col-span-1 bg-emerald-600 rounded-lg py-8 md:py-16 px-5 md:px-10 text-white flex flex-col">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-medium">Contact Information</h3>
            <p className="max-sm:text-sm mt-4">When you fill out the form our team will get back to you in 24 hours.</p>
            
            <ul className="py-8 flex flex-col gap-4">
               <li className="max-sm:text-sm flex gap-2 items-center font-medium">
                  <Phone className="w-5 h-5" strokeWidth={1.5}/>
                  <span>+234 70 147 2761</span>
               </li>
               <li className="max-sm:text-sm flex gap-2 items-center font-medium">
                  <Mail className="w-5 h-5" strokeWidth={1.5}/>
                  <span>oladosufoundation@gmail.com</span>
               </li>
               <li className="max-sm:text-sm flex gap-2 items-center font-medium">
                  <MapPin className="w-5 h-5" strokeWidth={1.5}/>
                  <span>Address here...</span>
               </li>
            </ul>
            
            <ul className="flex items-center gap-4 mt-8 sm:mt-auto">
               <li>
                  <a href="https://www.instagram.com/_oladosucharityfoundation?igsh=MXQ2bnhpbXlpcGU3Yw==">
                     <Instagram />
                  </a>
               </li>
               <li>
                  <a href="#">
                     <Twitter />
                  </a>
               </li>
               <li>
                  <a href="https://www.facebook.com/profile.php?id=61560487091903&mibextid=ZbWKwL">
                     <Facebook />
                  </a>
               </li>
            </ul>
         </div>
         <div className="aspect-square col-span-1 py-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-800">Contact US</h2>
            <p className="text-zinc-500 pt-4">
               You can reach out to us if you have 
               questions or if you want to get involved.
            </p> 
            
            <form ref={form} onSubmit={handleSubmit(onSubmit)} className="mt-8 flex flex-col gap-6">
               <div className="grid gap-2">
                  <div className={cn("w-full h-12 flex gap-4 px-2 items-center rounded-md border-2 border-zinc-200 focus-within:border-zinc-600 group", {"border-red-400": errors.name})}>
                     <User className={cn("w-5 h-5 text-zinc-300 group-focus-within:text-zinc-600", {"text-red-400": errors.email})}/>
                     <input {...register("name")}
                        className="flex-1 outline-none border-none bg-transparent text-zinc-600 font-medium h-full placeholder:text-zinc-300"
                        type="text" name="name" id="name" placeholder="Your name"
                     />
                  </div>
                  {errors.name && <p className="text-xs font-medium text-red-400">{errors.name.message}</p>}
               </div>
               <div className="grid gap-2">
                  <div  className={cn("w-full h-12 flex gap-4 px-2 items-center rounded-md border-2 border-zinc-200 focus-within:border-zinc-600 group", {"border-red-400": errors.email})}>
                     <Mail className={cn("w-5 h-5 text-zinc-300 group-focus-within:text-zinc-600", {"text-red-400": errors.email})}/>
                     <input {...register("email")}
                        className="flex-1 outline-none border-none bg-transparent text-zinc-600 font-medium h-full placeholder:text-zinc-300"
                        type="email" name="email" id="email" placeholder="Your email address"
                     />
                  </div>
                  {errors.email && <p className="text-xs font-medium text-red-400">{errors.email?.message}</p>}
               </div>
               <div className="grid gap-2">
                  <div className={cn("w-full h-12 flex gap-4 px-2 items-center rounded-md border-2 border-zinc-200 focus-within:border-zinc-600 group", {"border-red-400": errors.phoneNumber})}>
                     <Smartphone className={cn("w-5 h-5 text-zinc-300 group-focus-within:text-zinc-600", {"text-red-400": errors.email})}/>
                     <input {...register("phoneNumber")}
                        className="flex-1 outline-none border-none bg-transparent text-zinc-600 font-medium h-full placeholder:text-zinc-300"
                        type="tel" name="phoneNumber" id="phoneNumber" placeholder="Phone number"
                     />
                  </div>
                  {errors.phoneNumber && <p className="text-xs font-medium text-red-400">{errors.phoneNumber.message}</p>}
               </div>
               <div className="grid gap-2">
                  <textarea {...register('message')}
                     className={cn("p-4 outline-none border-2 border-zinc-200 rounded-md h-20 min-h-16 max-h-32 focus:border-zinc-600 text-zinc-600 font-medium placeholder:text-zinc-300", {"border-red-400": errors.message})}
                     name="message" id="message" placeholder="Message"
                  ></textarea>
                  {errors.message && <p className="text-xs font-medium text-red-400">{errors.message.message}</p>}
               </div>
               <Button disabled={isLoading} className="disabled:opacity-70 disabled:cursor-not-allowed">
                  {isLoading ? "Sending..." : "Send"}
               </Button>
            </form>
         </div>
      </section>
   )
}

export default Contact
