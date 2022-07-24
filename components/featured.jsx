import Link from "next/link"
import Image from "next/image"
import Author from "./_child/author"
import fetcher from "../lib/fetcher";
import  Spinner  from "./spinner";
import  Error  from "./error";

const featured = () => {
    const {data, isError, isLoading} = fetcher('api/featured');
    if(isLoading) return <Spinner/>
    if(isError) return <Error/>

  return (
    <section>
        {
            data.map((value, index) => (
                <Featured data={value}  key={index}/>
            ))
        }
    </section>
  )
}

const Featured = ({data})=>{

    const {id, img, title, category} = data;

    return (
        <div className="mb-[80px] px-5 flex sm:flex-col">
        <div className="w-[40%] sm:w-full sm:mb-5">
            
            <h1 className="text-5xl font-[600] w-[90%] sm:w-full my-3 text-[#15133C] leading-tight ">
            {title}
                </h1>
            <div>
                <Link href="/" >
                <a className="font-bold text-orange-800">Pets, Aesthetics </a>
                </Link>
            </div>
            <p className="w-[90%] sm:w-full  mt-3 mb-7 sm:mb-10  text-gray-800 text-[16px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Quibusdam quisquam doloribus libero quaerat adipisci illum minus iure aspernatur, 
                delectus magni modi eligendi.
            </p>
            <Link href="/"><a className="bg-orange-400 hover:bg-orange-300 w-[200px] py-3 px-5 rounded-full text-white">Continue Reading</a></Link>
            <div className="mt-9">
                <Author></Author>
            </div>
        </div>
        
            <div className="w-[60%] sm:w-full h-[500px] sm:h-[350px] relative mb-5">
                    <Image  src={img}  layout="fill" className="rounded-[8px]"/>
            </div>
       
    </div>
    )
}

export default featured