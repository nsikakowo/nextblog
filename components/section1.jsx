import Image from "next/image"
import Link from "next/link"
import fetcher from "../lib/fetcher";
import  Spinner  from "./spinner";
import  Error  from "./error";
import SectionSide from "./sectionSide";

const section1 = () => {
    const {data, isError, isLoading} = fetcher('api/popular');
    if(isLoading) return <Spinner/>
    if(isError) return <Error/>

  return (
    <div className="my-[80px] px-5 flex items-start sm:flex-col ">
         <div className="flex items-center w-[70%] sm:w-full sm:flex-col sm:mx-auto">
            {
                data.map((value, index)=>(
                    <Single data ={value} key={index}/>
                ))
            }
         </div>
         <div className="mx-5 w-[30%] sm:w-full sm:mx-auto">
            <SectionSide />
         </div>
    </div>
   
  )
}

const Single=({data})=>{
    const {id, img, title, category, description} = data;

    return(
        <div className="mr-5 sm:mb-9 w-full sm:mx-auto">
            <div className="w-full h-[300px] relative mb-5">
                <Image alt="image" src={img}  layout="fill" className="rounded-[8px]"/>
            </div>
            <h2 className="font-[600] text-[#15133C]  text-2xl">{title}</h2>
            <div className="my-3">
                <Link href="/" >
                <a className="font-[500] text-orange-800">{category} </a>
                </Link>
            </div>
            <p className='w-[95%] my-1 mb-7 text-zinc-500'>{description}</p>
            <Link href="/"><a className="border-[2px] border-orange-400 text-orange-400 py-2 px-5 rounded-[5px] hover:bg-orange-400 hover:text-white">Read Article</a></Link>
        </div>
    )
}

export default section1