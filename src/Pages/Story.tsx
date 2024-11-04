import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import client from "../lib/sanityClient"
import { urlFor } from "../lib/utils"
import { PortableText } from "@portabletext/react";
import { Loader2 } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Story = () => {
   const { id } = useParams()
   
   const { data, isLoading, isError } = useQuery({
      queryKey: ["story"],
      queryFn: async () => {
         const res = await client.getDocument(`${id}`)
         
         return res
      }
   })
   
   if(isLoading) {
      return (
         <div className="min-h-[calc(100vh-80px)] flex flex-col gap-4 items-center justify-center">
            <Loader2 className="w-8 h-8 text-zinc-800 animate-spin"/>
            <p className="text-lg text-zinc-800 font-medium">Loading...</p>
         </div>
      )
   }
   
   if(isError) {
      return (
         <div className="min-h-[calc(100vh-80px)] flex flex-col gap-4 items-center justify-center">
            <p className="text-lg text-zinc-800 font-medium">Error fetching story! Please try again.</p>
         </div>
      )
   }
   
   
   return (
      <>
         <Helmet>
            <title>{data?.title}</title>
            <meta name="description" content={data?.excerpt} />
            <meta name="keywords" content="charity, clean water, rural communities, Nigeria, project" />
            <meta name="author" content="Oladosu Charity Foundation" />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={data?.title} />
            <meta property="og:description" content={data?.excerpt} />
            <meta property="og:image" content={urlFor(data?.images[0].asset._ref)} />
            <meta property="og:url" content={`https://oladosufoundation.org.ng/${data?.id}`} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={data?.title} />
            <meta name="twitter:description" content={data?.excerpt} />
            <meta name="twitter:image" content={urlFor(data?.images[0].asset._ref)} />
         </Helmet>
      
         <section className="min-h-[calc(100vh-80px)] py-16">
            <div className="max-w-[60ch] mx-auto">
               <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-zinc-800">{data?.title}</h2>
               
               <div className="prose pt-8">
                  <PortableText 
                     value={data?.content}
                     components={{
                        types: {
                           image: ({ value }) => <img src={urlFor(value.asset._ref)} className="w-full aspect-auto object-cover rounded-md"/> 
                        }
                     }}
                  />
               </div>
               
               <h3 className="py-8 pt-16 text-2xl font-semibold text-zinc-800">More Images</h3>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data?.images.map((image: any) => (
                     <div key={image._key} className="col-span-1 rounded-md overflow-hidden">
                        <img src={urlFor(image.asset._ref)} alt="image alt text" className="w-full h-full object-cover"/>
                     </div>
                  ))}
               </div>
            </div>
         </section>
      </>
   )
}

export default Story
