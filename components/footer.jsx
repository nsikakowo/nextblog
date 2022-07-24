import { FaFacebook, FaTwitter, FaGlobe } from "react-icons/fa";

const footer = () => {
  return (
    <div className='text-white pt-[80px] py-7 flex flex-col items-center bg-[#15133C] w-full'>
        <div className="border-[1px] bg-white text-[#15133C] outline-none py-2 px-2 rounded-full sm:w-[90%] w-[500px] flex">
          <input type="text" placeholder="Subscribe to our newsletter" className="border-none outline-none py-2 px-3 rounded-full w-96" />
          <button className="bg-orange-400 hover:bg-orange-300 py-2 px-5 rounded-full">Subscribe</button>
        </div>
        <div className="flex social">
          <li><FaFacebook/></li>
          <li><FaTwitter/></li>
          <li><FaGlobe/></li>
        </div>

        <div className="text-center my-5">
        <div className="font-bold text-4xl text-orange-500 sm:text-lime-500">
            LOGO
        </div>
          <h2>Everything Good happens here</h2>
        </div>
        <p className="mt-5"> Copyright &copy; 2022 <br/> All Rights Reserved </p>
    </div>
  )
}

export default footer