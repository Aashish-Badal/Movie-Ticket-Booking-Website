import { ArrowRight } from 'lucide-react'
import React from 'react'
import poster1 from '../assets/1.webp'
import poster2 from '../assets/2.webp'

const NowShowing = () => {
    const dummyMovieData = [
        { id: 1, name: 'Oppenheimer', year: '2023', genre1: 'Drama', genre2: 'History', time: '3h 0m', rating: '8.7', poster: poster1 },
        { id: 2, name: 'Dune: Part Two', year: '2023', genre1: 'Sci-Fi', genre2: 'Adventure', time: '2h 45m', rating: '8.5', poster: poster2 },
        { id: 3, name: 'Spider-Man', year: '2023', genre1: 'Animation', genre2: 'Action', time: '2h 20m', rating: '8.8', poster: poster1 },
        { id: 4, name: 'Barbie', year: '2023', genre1: 'Comedy', genre2: 'Fantasy', time: '1h 54m', rating: '7.1', poster: poster2 },
        { id: 5, name: 'John Wick: Chapter 4', year: '2023', genre1: 'Action', genre2: 'Thriller', time: '2h 49m', rating: '8.1', poster: poster1 },
        { id: 6, name: 'Guardians of the Galaxy Vol. 3', year: '2023', genre1: 'Action', genre2: 'Sci-Fi', time: '2h 30m', rating: '8.0', poster: poster2 },
        { id: 7, name: 'Mission: Impossible – Dead Reckoning Part One', year: '2023', genre1: 'Action', genre2: 'Thriller', time: '2h 40m', rating: '7.9', poster: poster1 },
        { id: 8, name: 'The Marvels', year: '2023', genre1: 'Action', genre2: 'Adventure', time: '2h 10m', rating: '6.8', poster: poster2 },
        { id: 9, name: 'Wonka', year: '2023', genre1: 'Adventure', genre2: 'Family', time: '2h 5m', rating: '7.2', poster: poster1 },
        { id: 10, name: 'A Haunting in Venice', year: '2023', genre1: 'Mystery', genre2: 'Thriller', time: '1h 55m', rating: '6.9', poster: poster2 }
    ];

    const limitedItems = dummyMovieData.slice(0, 4);
    return (
        <div className=' bg-black px-40 py-20'>
            <div className='flex items-center justify-between'>
                <p>Now Showing</p>
                <button className='flex gap-2'>View All <ArrowRight /></button>
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
            <button className='bg-[#D63854] mt-20 px-10 py-4 rounded-4xl'>Show More</button>
            </div>
        </div>
    )
}

export default NowShowing