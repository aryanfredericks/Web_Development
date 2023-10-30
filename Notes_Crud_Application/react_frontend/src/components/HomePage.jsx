import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <div className='w-[600px] rounded-2xl flex flex-col justify-center items-center mx-auto h-[400px] mt-16 bg-blue-700 text-white shadow-black shadow-lg space-y-5 hover:scale-105 duration-300 hover:shadow-cyan-300/100 hover:shadow-xl'>
        <p className="text-3xl font-bold tracking-widest">Welcome to YooSer.</p>
        <p className="text-lg w-4/5 font-semibold text-white pl-7">Built only for YOUR maintance and YOUR comfort. Get started to maintain your personal notes.</p>
        <Link className='bg-white flex justify-center items-center  text-black px-3 py-2 rounded-lg hover:bg-blue-300 duration-300' to="/add">
          Let's Go!
          <span className='ml-2'>{<FaArrowRightLong size={20} color=''/>}</span>
        </Link>
      </div>
    </div>
  )
}

export default HomePage
