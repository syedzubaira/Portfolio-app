import React from 'react';
import { IoArrowForward } from "react-icons/io5";
import syed from "../assets/syed.jpg"

const About = () => {
  return (
    <div id="About" className='text-white md md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
                {/* <img className='rounded-full shadow-2xl border-4 border-white overflow-hidden' src={syed} alt="" width={400}/> */}
      
      <div>
        <h2 className='text-2xl md:text-4xl font-bold'>About</h2>
        <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
          <img className='md:h-95 rounded-full shadow-2xl px-30' src={syed} alt='About'/>

          <ul>
            <div className='flex gap-3 py-4'>
              <IoArrowForward size={30} className="mt-1"/>

              <span className='w-96'>
                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frontend developer</h1>
                <p className='text-sm md:text-md leading-tight'>
                "To design and develop responsive, user-friendly, and visually appealing web applications using modern frontend technologies like HTML, CSS, JavaScript, and React.js. Ensure seamless user experience, optimized performance, and accessibility."
                </p>
              </span>
            </div>

            <div className='flex gap-3 py-4'>
              <IoArrowForward size={30} className="mt-1"/>

              <span className='w-96'>
                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Backend developer</h1>
                <p className='text-sm md:text-md leading-tight'>
                "To design, develop, and maintain scalable, secure, and efficient backend systems using Node.js, Express.js, and MongoDB. Ensure seamless API integration, database optimization, and robust server-side logic to enhance application performance."
                </p>
              </span>
            </div>

            <div className='flex gap-3 py-4'>
              <IoArrowForward size={30} className="mt-1"/>

              <span className='w-96'>
                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Database developer</h1>
                <p className='text-sm md:text-md leading-tight'>
                "To design, implement, and manage efficient and scalable databases using MongoDB. Ensure data integrity, security, and optimized query performance for seamless backend operations."
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default About
