import React from 'react'
import { MovieCard } from './MovieCard'

export const MovieCardContainer = ({ movies }) => {

  return (
    <div className='grid grid-cols-4 mt-16 gap-6 w-full max-w-6xl h-[212.5] overflow-y-auto'>
        {movies.map(movie  => (
            <MovieCard 
            key={movie.id || movie.movieId || movie._id}
            movie={movie}
            />
        ))}

        {/* No Movies Found */}
        {movies.length === 0 && (
            <p className='col-span-4 py-10 text-center text-gray-500'>
                No Movies Found
            </p>
        )}
    </div>
  )
}