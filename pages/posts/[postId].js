import Defaultlayout from "../../layout/defaultlayout"
import { FaFacebook, FaTwitter, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay, Pagination, Navigation} from 'swiper'
import 'swiper/css';
import getPost from "../../lib/helper";
import fetcher from "../../lib/fetcher";
import { Spinner } from "../../components";

const post = ({ img, title, category, description}) => {
    SwiperCore.use([Autoplay, Pagination, Navigation])

    const { data, isLoading, isError } = fetcher(`api/posts`)

    if(isLoading) return <Spinner></Spinner>
    if(isError) return <ErrorComponent></ErrorComponent>

  return (
       <main className="container">
            <Defaultlayout>
                 <section className="text-[#15133C] bg-gradient-to-b from-slate-400 to-zinc-50 w-full h-[400px] text-center flex flex-col justify-center items-center">
                        <h2 className="text-6xl font-[500] w-[80%] sm:w-[90%] sm:text-4xl sm:w-[90%] " >{title}</h2>
                        <p className='w-[70%] sm:w-[90%] text-[22px] sm:text-[18px] my-3 text-zinc-500'></p>
                        <div className="flex social">
                            <li className="text-[16px]"><FaFacebook/></li>
                            <li className="text-[16px]"><FaLinkedin/></li>
                            <li className="text-[16px]"><FaTwitter/></li>
                            <li className="text-[16px]"><FaInstagramSquare/></li>
                        </div>
                 </section>
                 <div className="w-full h-[900px] sm:h-[500px] relative mb-5">
                <Image src={img}  layout="fill" className=""/>
            </div>
                 <section className="w-full sm:flex-col flex justify-start my-[60px] text-zinc-500 sm:mx-auto px-9 sm:px-1">
                    <div className="w-[75%] sm:text-center sm:mx-auto sm:w-[90%] px-9 sm:px-1">
                    {description}

                    <div className="my-5">
                        <h2 className="text-orange-400 text-2xl my-3">Related Articles</h2>
                        <div className="flex items-center justify-between ">
                        <Swiper
                            slidesPerView={3}
                            loop={true}
                            autoplay={{
                                delay:4000
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            
                            >
                            <SwiperSlide>{Related()}</SwiperSlide>
                            <SwiperSlide>{Related()}</SwiperSlide>
                            <SwiperSlide>{Related()}</SwiperSlide>
                            <SwiperSlide>{Related()}</SwiperSlide>
                            <SwiperSlide>{Related()}</SwiperSlide>
                
                        </Swiper>
                    </div>
                    </div>
                    </div>
                    <div className="w-[25%] sm:w-[90%] sm:my-5 sm:mx-auto ml-5 bg-[#15133C] py-7 px-7">
                        <h3 className="text-orange-400 text-2xl">Categories</h3>
                        <ul className="sideCategory">
                            <li>Business</li>
                            <li>Pets</li>
                            <li>Aesthetics</li>
                            <li>Sports</li>
                            <li>Technology</li>
                            <li>Relationship</li>
                            <li>Religion</li>
                            <li>Politics</li>
                        </ul>
                    </div>
                 </section>
            </Defaultlayout>
       </main>
  )
}

const Related = ()=>{
    return(
        <div className="mr-5 w-[25%} sm:w-full mb-[10px]">
            <div className="w-full h-[200px] sm:h-[290px] relative mb-5">
                <Image  src="/images/p2.png"  layout="fill" className="rounded-[8px]"/>
            </div>
            <Link href="/"><a className=" text-[#15133c] hover:text-orange-400"><h2 className="font-[600] text-[#15133C] text-[#15133c] hover:text-orange-400  text-1xl">Time to understand what its takes to move the tide</h2></a></Link>
            {/* <div className="mt-1 mb-5">
                <Link href="/" >
                <a className="font-[500] text-[14px] text-orange-800">Pets, Aesthetics </a>
                </Link>
            </div>
            <Link href="/"><a className="border-[2px] border-orange-400 text-orange-400 py-2 px-5 rounded-[5px] hover:bg-orange-400 hover:text-white">Read Article</a></Link> */}
        </div>
    )
}

export async function getStaticProps({params}){
    const posts = await getPost(4)
    return {
        props:posts
    }
}

export async function getStaticPaths(){
    const posts = await getPost();

    const paths = posts.map(value => {
        return {
            params:{
                postId: value.id.toString()
            }
        }
    })
    return{
        paths,
        fallback:false
    }
}

export default post