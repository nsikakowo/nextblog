import Image from "next/image"
import Link from "next/link"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay, Pagination, Navigation} from 'swiper'
import 'swiper/css';
import fetcher from "../lib/fetcher";
import  Spinner  from "./spinner";
import  Error  from "./error";



const trending = () => {
    SwiperCore.use([Autoplay, Pagination, Navigation])

    const {data, isError, isLoading} = fetcher('api/trending');
    if(isLoading) return <Spinner/>
    if(isError) return <Error/>



  return (
    <div className="mb-[80px] w-full  px-5">
        <div className="flat-flex mr-5 my-3">
        <h2 className="font-[600] text-[#15133C]  text-2xl">Trending Articles </h2>
        <Link href="/"><a className="border-[2px] border-orange-400 text-orange-400 py-2 px-5 rounded-[5px] hover:bg-orange-400 hover:text-white">Explore All</a></Link>

        </div>
        <div className="flex items-center justify-between ">
            <Swiper
                slidesPerView={4}
                loop={true}
                autoplay={{
                    delay:4000
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                
                >
                    {
                        data.map((value, index) => (

                            <SwiperSlide>
                                <Trend data={value} key={index}></Trend>
                            </SwiperSlide> 
                        ))
                    }
      
            </Swiper>
        </div>
    </div>
  )
}

const Trend = ({data})=>{
    const {id, img, title, category} = data;


    return(
        <div className="mr-5 w-[25%} sm:w-full mb-[10px] " >
            <div className="w-full h-[200px] sm:h-[290px] relative mb-5">
                <Image alt="image" src={img}  layout="fill" className="rounded-[8px]"/>
            </div>
            <h2 className="font-[600] text-[#15133C]  text-1xl">{title || "Untitled"}</h2>
            <div className="mt-1 mb-5">
                <Link href="/" >
                <a className="font-[500] text-[14px] text-orange-800">{category || "unknown"}</a>
                </Link>
            </div>
            <Link href="/"><a className="border-[2px] border-orange-400 text-orange-400 py-2 px-5 rounded-[5px] hover:bg-orange-400 hover:text-white">Read Article</a></Link>
        </div>
    )
}

export default trending