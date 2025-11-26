import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

const HomePage = () => {
  return (
    <div  className=' h-screen bg-cover bg-center bg-[url("assets/backgroundImage.png")] px-30 py-10'>
        <Navbar />
        <Hero />
    </div>
  )
}

export default HomePage