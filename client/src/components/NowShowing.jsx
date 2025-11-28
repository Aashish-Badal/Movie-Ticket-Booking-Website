import { ArrowRight } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { dummyMovieData } from '../assets/assets'

const NowShowing = () => {

    const navigate = useNavigate();

    const limitedItems = dummyMovieData.slice(0, 4);
    return (
        <div className=' bg-black px-40 py-20'>
            <div className='flex items-center justify-between'>
                <p>Now Showing</p>
                <button onClick={()=>navigate('/movies')} className='flex gap-2'>View All <ArrowRight /></button>
            </div>
            <div className='grid grid-cols-4 mt-5 gap-6 items-center justify-center'>
                {limitedItems.map((movie) => (
                    <div className='h-[55vh] w-60 bg-gray-800 rounded-xl p-2'>
                        <img className='rounded-xl h-[30vh] object-cover' src={movie.poster} alt="" />
                        <p className='mt-1'>{movie.name}</p>
                        <p className='text-sm mt-2 text-gray-400!'>{movie.year} • {movie.genre1} | {movie.genre2}  • {movie.time}</p>
                        <button className='bg-[#D63854] px-5 py-2 rounded-2xl mt-3'>Buy Tickets</button>
                    </div>
                ))}
            </div>
            <div className='flex items-center justify-center'>
            <button  className='bg-[#D63854] mt-20 px-10 py-4 rounded-4xl'>Show More</button>
            </div>
        </div>
    )
}

export default NowShowing