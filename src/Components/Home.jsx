import React from 'react';
import syed from "../assets/syed.jpg";
import Text from './Text';

const Home = () => {
  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
      <div className='md:w-2/4 md:pt-10'>
       <h1 className='text-2xl md:text-4xl font-bold flex leading-normal tracking-tighter'>
        <Text/>
        </h1>

        <p className='text-sm md:text-1xl tracking-tight'>
          Innovative and details-oriented frontend developer passionate about creating user-centric web applications,
          Proficient in modern web technologies and frameworks.with exprience in delivering responsive and dynamic solutions through collaborative teamwork.
        </p>

        <button className='mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>
          Contact Me
          </button>

          <button className="bg-[#465697] hover:bg-gray-800 text-white font-semibold py-2 px-10 rounded-lg shadow-lg transition">
            Download CV
          </button>
      </div>
        <div className='md:w-1/2 mt-6 md:mt-0 md:text-left' >
          <img className='rounded-full shadow-2xl px-5 py-10 border-4 border-white overflow-hidden inline-block' src={syed} alt="" width={400}/>
        </div>
  
      {/* <div className='absolute top-1/2 right-4 md:right-16 transform -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full shadow-2xl border-4 border-white overflow-hidden'> */}

        {/* </div> */}
      
    </div>
  )
}

export default Home
