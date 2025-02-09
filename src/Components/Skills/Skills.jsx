import React from 'react';
import {FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaNodeJs, FaServer} from "react-icons/fa";
import { SiExpress } from 'react-icons/si';
import { SiRedis} from "react-icons/si";
import { SiMongodb } from 'react-icons/si';


function Skills() {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Skills</h1>
      <div className='flex flex-wrap items-center justify-around'>
        <div className='flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10'>

          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaHtml5 color='#E34F26' size={50}/>
          </span>

          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaCss3 color='#1572B6' size={50}/>
          </span>

          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaReact color='#61DAFB' size={50}/>
          </span>

          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaJs color='#F7DF1E' size={50}/>
          </span>

          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <SiMongodb color='#47A248' size={50}/>
          </span>

          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <SiRedis color='#FF4438' size={50}/>
          </span>

          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaFigma color='#F24E1E' size={50}/>
          </span>

          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaNodeJs color='#E34F26' size={50}/>
          </span>

          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <SiExpress color='#47A248' size={50}/>
          </span>

          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaServer color='#47A248' size={50}/>
          </span>

        </div>
      </div>
    
    </div>
      
  
  )
}

export default Skills
