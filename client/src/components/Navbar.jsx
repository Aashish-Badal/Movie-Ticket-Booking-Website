import { Search } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between'>
        <div><img src="logo.svg" alt="logo" /></div>
        <div className='flex gap-4 border border-gray-200 rounded-full px-10 py-3 bakdrop-blur-md  bg-gray-200/30'>
            <NavLink>Home</NavLink>
            <NavLink>Movies</NavLink>
            <NavLink>Theaters</NavLink>
            <NavLink>Releases</NavLink>
        </div>
        <div className='flex gap-6 items-center'>
            <Search />
            <button className='bg-[#D63854] px-4 py-2 rounded-full'>Login</button>
        </div>
    </div>
  )
}

export default Navbar