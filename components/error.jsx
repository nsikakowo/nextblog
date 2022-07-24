import Image from "next/image"

const Error = () => {
  return (
    <div className='container flex justify-center items-center '>
        <div className="w-full h-[400px] sm:h-[290px] relative mb-5">
                <Image  src={'/images/404.jpeg'}  layout="fill" className="rounded-[8px]"/>
            </div>
    </div>
  )
}

export default Error