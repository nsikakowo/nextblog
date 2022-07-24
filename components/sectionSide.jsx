import Link from "next/link"
import fetcher from "../lib/fetcher";
import  Spinner  from "./spinner";
import  Error  from "./error";

const sectionSide = () => {
    const {data, isError, isLoading} = fetcher('api/sidebar');
    if(isLoading) return <Spinner/>
    if(isError) return <Error/>


  return (
    <main>
             {
                data.map((value, index)=>(
                    <Side data ={value} key={index}/>
        ))
    }
    </main>
   
  )
}

const Side =({data})=>{
    const { title,  description} = data;

    return(
        <div className="mb-[40px]">
        <h2 className="font-[600] text-[#15133C]  text-[18px]">{title}</h2>
        <p className='w-[95%] my-3 mb-2 text-zinc-500'>{description}</p>
        <Link href="/"><a className="border-b-[2px] border-b-orange-400 text-orange-400 py-2   hover:bg-orange-400 hover:text-white">Read Article</a></Link>
    </div>
    )
}

export default sectionSide