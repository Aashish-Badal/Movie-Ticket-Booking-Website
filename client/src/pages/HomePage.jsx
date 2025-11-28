import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import NowShowing from '../components/NowShowing'
import Trailers from '../components/Trailers'
import Footer from '../components/Footer'
import CopyRight from '../components/CopyRight'

const HomePage = () => {
  return (
    <>
    <div  className=' h-screen bg-cover bg-center bg-[url("assets/backgroundImage.png")] px-40 py-8'>
        <Navbar />
        <Hero />
    </div>
    <NowShowing />
    <Trailers />
    <Footer />
    <CopyRight />
    </>
  )
}

export default HomePage