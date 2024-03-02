import React from 'react'
import Logo from '../Components/Navbar/Logo'
import Home from '../Components/Navbar/Home'
import About from '../Components/Navbar/About'
import Project from '../Components/Navbar/Project'
import Contact from '../Components/Navbar/Contact'

const Navbar = () => {
  return (
    <div className=' py-4 flex justify-between items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white'>
        <div className='pl-4'>
        <Logo/>
        </div>
        <ul className='hidden md:flex space-x-4 pr-4'>
          <Home/>
          <About/>
          <Project/>
          <Contact/>
        </ul>
    </div>
  )
}

export default Navbar