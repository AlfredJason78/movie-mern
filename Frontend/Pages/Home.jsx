import React, { useState, useEffect } from 'react'
import { MovieCardContainer } from '../Components/MovieCardContainer';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  // Fetching Movies from API
  const fetchMovies = async () => {
    const url = query
      ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
      : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`;

    const res = await fetch(url);
    const data = await res.json();

    console.log(data.results)
    setMovies(data.results); // Insert data into 'movies' state
  }

  // Call fetchMovies Function
  useEffect(() => {
    fetchMovies();
  }, [page]);

  // Keep calling everytime new
  const handleSearch = () => {
    fetchMovies();
    setQuery('');
  }

  return (
    <div className='flex flex-col items-center mt-30'>

      {/* Search Form */}
      <div>
        <input
          className='p-2.5 rounded-lg text-black text-center bg-amber-50'
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setPage(1)
          }}
          placeholder='Search the movie'
        />

        <button
          className='p-2.5 ml-2.5 rounded-lg text-white font-medium bg-red-600 cursor-pointer'
          type='submit'
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <MovieCardContainer movies={movies} />


    </div>
  )
}