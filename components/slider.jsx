import Image from "next/image"
import Link from "next/link"
import Author from './_child/author'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper'
import 'swiper/css';
import  Spinner  from "./spinner";
import  Error  from "./error";
import fetcher from "../lib/fetcher";


const slider = () => {
    SwiperCore.use([Autoplay])

    const {data, isError, isLoading} = fetcher('api/slider');
    if(isLoading) return <Spinner/>
    if(isError) return <Error/>

    console.log(data)


  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay:4000
      }}
    //   onSlideChange={() => console.log('slide change')}
    //   onSwiper={(swiper) => console.log(swiper)}
    >
        {
            data.map((value, index)=>(
                <SwiperSlide>
                    <Slide key={index} data={value} ></Slide>
                </SwiperSlide>
            ))
        }
      
    </Swiper>
  )
}

function Slide({data}){
    const {id, img, title, category, description} = data;

    return (
        <div className="h-[650px] flex flex-col justify-center pt-9  relative">
        <div>
            <Image alt="image" src={img} layout='fill' className="images z-[1]"/>
            <div className="bg-orange-100 z-[2] absolute top-0 w-full h-full opacity-[.4]" />
        </div>
        <div className="px-9 z-[3]">
            <h1 className="text-5xl font-[600] w-[70%] sm:w-full my-3 text-[#15133C] leading-tight ">{title}</h1>
            <div>
                <Link href="/" >
                <a className="font-bold text-orange-800">{category} </a>
                </Link>
            </div>
            <p className="w-[60%] sm:w-full  mt-3 mb-6 sm:mb-10  text-gray-800 text-[16px]">
                {description}
            </p>
            <Link href="/"><a className="bg-orange-400 hover:bg-orange-300 w-[200px] py-3 px-5 rounded-full text-white">Explore Article</a></Link>
            <div className="mt-9">
            <Author></Author>

            </div>
        </div>
        
    </div>
    )
}


export default slider
