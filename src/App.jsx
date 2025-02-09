import React from "react"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import About from "./Components/About"
import Skills from "./Components/Skills/Skills"
import Projects from "./Components/Projects/Projects"
import Footer from "./Components/Footer/Footer"


function App() {
  

  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
     <Navbar/>
     <Home/>
     <About/>
     <Skills/>
     <Projects/>
     <Footer/>
    </div>
  )
}

export default App
