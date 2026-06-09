import React, { useContext } from 'react'
import { FavoriteContext } from '../context/FavoriteContext';

export const MovieCard = ({ movie }) => {
    const { favorites, handleAdd, handleRemove } = useContext(FavoriteContext);

    const movieId = movie.id || movie.movieId;

    const isFavorite = favorites.some(fav => fav.movieId === movieId);

    const image = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
        : "https://via.placeholder.com/500x750?text=No+Image";

    return (
        <div className='flex flex-col items-start p-4 gap-2.5 rounded-lg bg-amber-50'>
            {/* Movie Image */}
            <div className='w-full h-72 rounded-md overflow-hidden'>
                <img 
                className='w-full h-full object-cover'
                src={image} 
                alt={movie.title} />
            </div>

            {/* Movie Description */}
            <div className='w-full mt-2 text-left'>
                <h3 className='font-bold text-gray-800 truncate'>
                    Title: {movie.title}
                </h3>
                <p className='text-sm text-gray-600 font-medium'>
                    Rate: {movie.vote_average.toFixed(1)}
                </p>
            </div>

            {/* Movie Button */}
            <button 
            className='px-6 py-2 rounded-md text-white text-base font-bold bg-red-500 hover:bg-red-800 cursor-pointer'
            onClick={isFavorite ? () => handleRemove(movieId) : () => handleAdd(movie)}>
                {isFavorite ? "Remove" : "Add"}
            </button>
        </div>
    )
}