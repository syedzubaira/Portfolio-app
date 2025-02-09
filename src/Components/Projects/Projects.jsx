import React from 'react'
import ProjectsCard from './ProjectsCard'
import foodImg from "../../assets/food-app.jpg"
import quizImg from "../../assets/quiz-app.jpg"
import chatImg from "../../assets/chat-app.jpeg"


const Projects = () => {
  return (
    <div id="Projects" className='p-10 md:p-24 text-white'>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
      <div className='py-12 px-8 flex flex-wrap gap-5'>
        <ProjectsCard 
          img={foodImg}
          title="Food-Receipe App"
          main=<p>"Food Recipe App" is a user-friendly platform designed to help food lovers explore, discover, and cook a variety of delicious recipes. Whether you're a beginner or a seasoned chef, this app provides an easy-to-navigate interface with detailed recipe instructions, ingredient lists, cooking time, serving sizes, and dietary information.</p>
        />

        <ProjectsCard 
          img={quizImg}
          title="Quiz-App"
          main=<p>The Quiz App is a fun and interactive web application built using JavaScript, HTML, and CSS, designed to test users' knowledge on various topics. It presents multiple-choice questions, tracks user responses, and calculates the final score.</p>
        />

        <ProjectsCard 
          img={chatImg}
          title="Chat-Application App"
          main=<p>The Chat Application is a real-time messaging platform built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It enables users to send and receive messages instantly, making communication seamless and interactive. The app supports one-on-one chats, group messaging, and real-time updates using WebSockets</p>
        />

        <ProjectsCard 
          img={chatImg}
          title="Calculator"
          main=<p>The Calculator App is a simple and interactive web-based application built using HTML, CSS, and JavaScript. It allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. The app provides a clean and user-friendly interface, making it easy to use for quick calculations.</p>
        />
      </div>
    </div>
  )
}

export default Projects
