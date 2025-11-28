import React from 'react'
import Navbar from '../components/Navbar'
import NowShowing from '../components/NowShowing'
import { dummyMovieData } from '../assets/assets'

const Movies = () => {
    return (
        <div>
            <div className='bg-black px-40 py-8'>
                <Navbar />
            </div>
            <div className=' bg-black px-40 py-20'>
                <div className='flex items-center justify-between'>
                    <p>Now Showing</p>
                </div>
                <div className='grid grid-cols-4 mt-5 gap-6 items-center justify-center'>
                    {dummyMovieData.map((movie) => (
                        <div className='h-[55vh] w-60 bg-gray-800 rounded-xl p-2'>
                            <img className='rounded-xl h-[30vh] object-cover' src={movie.poster} alt="" />
                            <p className='mt-1'>{movie.name}</p>
                            <p className='text-sm mt-2 text-gray-400!'>{movie.year} • {movie.genre1} | {movie.genre2}  • {movie.time}</p>
                            <button className='bg-[#D63854] px-5 py-2 rounded-2xl mt-3'>Buy Tickets</button>
                        </div>
                    ))}
                </div>
                <div className='flex items-center justify-center'>
                </div>
            </div>
        </div>
    )
}

export default Movies