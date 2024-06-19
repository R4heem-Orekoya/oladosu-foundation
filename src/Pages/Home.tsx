import { GraduationCap, Soup, Home as House, Droplets, ArrowRight } from "lucide-react"
import Button from "../components/Button"
import heroImage from "../assets/hero-image.webp"
import makingDifferenceImg from "../assets/making a difference.jpg"
import alwaysThereImg from "../assets/always there.jpg"
import StoryReels from "../components/StoryReels"
import { Link } from "react-router-dom"

const Home = () => {
   return (
      <>
         <section className="w-full grid grid-cols-1 md:grid-cols-2 md:items-center gap-8 min-h-[calc(100vh-80px)] py-8">
            <div className="col-span-1 flex flex-col justify-center items-start gap-6 md:gap-8">
               <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] leading-[1.4] tracking-tight font-bold text-zinc-800">
                  Learn to embrace the beauty of kindness.
               </h1>
               <p className="lg:text-xl font-medium text-zinc-500">
                  Listen to that little voice inside your head, and make 
                  a small contribution towards a good cause.
               </p>
               <Link to="/donate">
                  <Button>Donate Now</Button>
               </Link>
            </div>
            <div className="aspect-[4/5] md:aspect-square col-span-1">
               <img src={heroImage} alt="hero image alt text" className="w-full h-full md:w-[90%] md:h-[90%] rounded-lg md:ml-auto object-cover"/>
            </div>
         </section>
         
         <section className="py-20">
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
               <div className="flex flex-col gap-3 max-sm:text-center max-sm:items-center max-sm:px-4">
                  <GraduationCap className="w-7 h-7 text-orange-500" strokeWidth={1.8}/>
                  <h2 className="text-xl font-semibold text-zinc-700">Education</h2>
                  <p className="font-medium text-zinc-500">
                     Providing the best quality of education to those
                     in need of one.
                  </p>
               </div>
               <div className="flex flex-col gap-3 max-sm:text-center max-sm:items-center max-sm:px-4">
                  <Soup className="w-7 h-7 text-orange-500" strokeWidth={1.8}/>
                  <h2 className="text-xl font-semibold text-zinc-700">Quality Food</h2>
                  <p className="font-medium text-zinc-500">
                     Providing the best quality of food to those
                     in need of one.
                  </p>
               </div>
               <div className="flex flex-col gap-3 max-sm:text-center max-sm:items-center max-sm:px-4">
                  <House className="w-7 h-7 text-orange-500" strokeWidth={1.8}/>
                  <h2 className="text-xl font-semibold text-zinc-700">Shelter</h2>
                  <p className="font-medium text-zinc-500">
                     Providing the best quality of housing to those
                     in need of one.
                  </p>
               </div>
               <div className="flex flex-col gap-3 max-sm:text-center max-sm:items-center max-sm:px-4">
                  <Droplets className="w-7 h-7 text-orange-500" strokeWidth={1.8}/>
                  <h2 className="text-xl font-semibold text-zinc-700">Water Supply</h2>
                  <p className="font-medium text-zinc-500">
                     Providing the best quality of water supply to those
                     in need of one.
                  </p>
               </div>
            </div>
         </section>
         
         <section className="py-16 grid grid-cols-1 gap-10 md:grid-cols-2 items-center">
            <div className="aspect-[4/5] md:aspect-square">
               <img src={makingDifferenceImg} alt="making a difference image alt text" className="w-full h-full object-cover rounded-lg"/>
            </div>
            <div className="flex flex-col justify-center gap-6 md:gap-8">
               <div>
                  <h2 className="text-balance text-2xl sm:text-3xl lg:text-4xl leading-[1.4] tracking-tight font-bold text-zinc-700">
                     Changing lives and making a difference
                  </h2>
                  <div className="w-1/5 h-1 rounded-sm bg-amber-500 mt-6" />
               </div>
               <p className="text-lg font-medium text-zinc-600">
                  We are a non-govermental organization dedicated to the betterment of human 
                  lives in rural areas.
               </p>
               <p className="text-lg font-medium text-zinc-600">
                  The abundant life begins from within and then moves outward to other individuals. 
                  If there is richness and righteousness in us, then we can make a difference in the lives
                  of others, just as key individuals have influenced the lives of each of us for good and made us 
                  richer than we otherwise would have been.
               </p>
               <div className="flex gap-4">
                  <a href="#stories">
                     <Button>Learn More</Button> 
                  </a>
                  <Link to="/donate">
                     <Button className="flex items-center gap-1 bg-transparent text-zinc-700 group">
                        Donate Now
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-2 duration-300"/>
                     </Button>
                  </Link>
               </div>
            </div>
         </section>
         
         <section className="py-16 grid grid-cols-1 gap-10 md:grid-cols-2 items-center">
            <div className="flex flex-col justify-center gap-6 md:gap-8 items-start">
               <div>
                  <h2 className="text-balance text-2xl sm:text-3xl lg:text-4xl leading-[1.4] tracking-tight font-bold text-zinc-700">
                     We are always where others need help
                  </h2>
                  <div className="w-1/5 h-1 rounded-sm bg-amber-500 mt-6" />
               </div>
               <p className="text-lg font-medium text-zinc-600">
                  What counts in life is not the fact that we have lived.
                  It is what difference we have made to the lives of others
                  that will determine the significance of the live we live.
                  Change will not come if we wait for some othe time. We are the ones 
                  we've been waiting for. We are the change that we seek.
               </p>
               <Link to="/donate">
                  <Button>Donate Now</Button>
               </Link>
            </div>
            <div className="aspect-[3/4] md:aspect-square border rounded-lg">
               <img src={alwaysThereImg} alt="always there image alt text" className="w-full h-full object-cover rounded-lg"/>
            </div>
         </section>
         
         <section id="stories" className="py-16">
            <div className="mb-16">
               <h2 className="text-2xl sm:text-3xl lg:text-4xl max-w-2xl leading-[1.4] tracking-tight font-bold text-zinc-700 text-balance">Inspiring stories of those we've already helped</h2>
               <div className="w-[10%] h-1 rounded-sm bg-amber-500 mt-6" />
            </div>
            
            <StoryReels />
         </section>
      </>
   )
}

export default Home
