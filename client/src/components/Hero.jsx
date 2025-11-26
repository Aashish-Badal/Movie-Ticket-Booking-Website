import { ArrowRight, Calendar, Clock } from 'lucide-react'
import React from 'react'

const Hero = () => {
    return (
        <div className='mt-20'>
            <img src="marvelLogo.svg" alt="marvellogo" />
            <p className='text-7xl font-bold mt-3'>Guardians <br /> of the Galaxy</p>
            <div className='flex gap-4 mt-2'>
                <p>Action | Adventure | Sci-Fi </p>
                <div className='flex gap-1 items-center'><Calendar className='h-5' />2018</div>
                <div className='flex gap-1 items-center'><Clock className='h-5' />2h 8m</div>
            </div>
            <div className='w-115 mt-5'>
            <p>In a post-apocalyptic world where cities ride on wheels and consume each other to survive, two people meet in London and try to stop a conspiracy.</p>
            </div>
            
            <button className=' flex gap-1 py-3 mt-5 px-8 bg-[#D63854] rounded-full'>Explore Movies <ArrowRight /></button>
        </div>
    )
}

export default Hero