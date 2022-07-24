import Image from "next/image"

export default function author() {
  return (
    <div className=" flex justify-start items-center">
        <div>
            <Image src={"/images/author.jpeg"} 
            width={50} 
            height={50} 
            className="rounded-full"
            alt="image"
            />
        </div>
        <div className="ml-2">
            <h3 className="font-[600] text-[#15133C]">Nsikak Owo</h3>
            <p className="font-[100] text-gray-400 text-[14px]">Developer</p>
        </div>
    </div>
  )
}
