import client from "../lib/sanityClient"
import { useQuery } from "@tanstack/react-query"
import Button from "./Button"
import { Link } from "react-router-dom"
import { urlFor } from "../lib/utils"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const StoryReels = () => {
   const { data, isLoading, isError } = useQuery({
      queryKey: ['stories'],
      queryFn: async () => {
        const res = await client.fetch(`*[_type == 'stories']`)
        return res
      }
   })
   
   
   if(isLoading) return <p className="text-center mt-4">Loading...</p>
   if(isError) return <p className="text-center mt-4">Error fetching strories</p>
   
   return (
      <Swiper
         modules={[Pagination]}
         spaceBetween={20}
         slidesPerView={1}
         pagination={{ clickable: true }}
         className="relative pb-16"
         breakpoints={{
            900: {
              slidesPerView: 3,
            },
            600: {
              slidesPerView: 2,
            },
          }}
      >
         {data.map((story:any) => (
            <SwiperSlide key={story._id}>
               <div className="p-3 border bg-white/30 backdrop-blur-sm border-zinc-100 shadow-sm hover:shadow-md duration-300 rounded-lg group">
                  <img src={urlFor(story.images[0].asset._ref)} alt={story.images[0].asset._ref} className="w-full aspect-video object-cover border rounded-md"/>
                  
                  <p className="py-2 text-sm font-semibold text-emerald-600">{story.tag}</p>
                  <h3 className="text-lg font-bold text-zinc-700">{story.title}</h3>
                  <p className="text-sm text-zinc-500 my-2 line-clamp-2">{story.excerpt}</p>
                  <Link to={`/stories/${story._id}`}>
                     <Button className="py-1.5 px-2 text-[10px] my-2 rounded bg-transparent text-zinc-700 border border-zinc-200 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 duration-300">
                        Read more
                     </Button>
                  </Link>
               </div>
            </SwiperSlide>
         ))}
      </Swiper>
   )
}

export default StoryReels
