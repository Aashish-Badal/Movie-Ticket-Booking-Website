import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import NowShowing from '../components/NowShowing'

const HomePage = () => {
  return (
    <>
    <div  className=' h-screen bg-cover bg-center bg-[url("assets/backgroundImage.png")] px-40 py-8'>
        <Navbar />
        <Hero />
    </div>
    <NowShowing />
    </>
  )
}

export default HomePage