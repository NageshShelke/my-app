import React from 'react'
import Header from './Componants/Header'
import About from './Componants/About'
import Techstack from './Componants/Teckstack'
import Experience from './Componants/Experience'
import Projects from './Componants/Projects'
import Contact from './Componants/Contact'
import Sidebar from './Componants/Sidebar'

const App = () => {
  return (
    <div className='md:px-30 xl:px-60'>
      <Header />
      <About />
      <Techstack />
      <Experience />
      <Projects />
      <Contact />
      <div className="hidden xl:block">
        <Sidebar/>
      </div>
      
    </div>
  )
}

export default App
