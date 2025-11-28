import React from 'react'

const Footer = () => {
  return (
    <div className='flex bg-black justify-between items-center px-40 py-20'>
        <div className='flex flex-col w-[50%]'>
            <img src="logo.svg" alt="" className='w-50 h-30'/>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div className='flex gap-3 mt-5'><img src="gp.svg" alt="gp" /><img src="ap.svg" alt="ap" /></div>
        </div>
        <div>
            <h1>Company</h1>
        <p className='text-sm text-gray-400! mt-3'>Home</p>
        <p className='text-sm text-gray-400! mt-2'>About us</p>
        <p className='text-sm text-gray-400! mt-2'>Contact us</p>
        <p className='text-sm text-gray-400! mt-2'>Privacy Poilcy</p>
        </div>
        <div>
            <h1>Get in Touch</h1>
            <p className='text-sm text-gray-400! mt-3'>+9779847685976</p>
            <p className='text-sm text-gray-400! mt-2'>aashishbadal4@gmail.com</p>
        </div>
    </div>
  )
}

export default Footer