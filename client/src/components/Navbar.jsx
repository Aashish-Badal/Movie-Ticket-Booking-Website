import { Search } from 'lucide-react'
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className='flex items-center justify-between'>
        <div><img onClick={()=>navigate('/')} src="logo.svg" alt="logo" className='cursor-pointer' /></div>
        <div className='flex gap-4 border border-gray-200 rounded-full px-10 py-3 backdrop-blur-md bg-gray-400/10'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/movies'>Movies</NavLink>
            <NavLink>Theaters</NavLink>
            <NavLink>Releases</NavLink>
        </div>
        <div className='flex gap-6 items-center'>
            <Search />
            <button className='bg-[#D63854] px-6 py-2 rounded-full'>Login</button>
        </div>
    </div>
  )
}

export default Navbar