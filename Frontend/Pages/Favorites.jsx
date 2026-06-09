import React, { useContext, useEffect, useState } from 'react'
import { MovieCardContainer } from '../Components/MovieCardContainer'
import { FavoriteContext } from '../context/FavoriteContext'
import ReactPaginate from "react-paginate";

export const Favorites = () => {
  const { favorites } = useContext(FavoriteContext);

  const [page, setPage] = useState(0);

  const PER_PAGE = 12;  // DEFAULT FOR ONE PAGE
  const offset = page * PER_PAGE;

  const currentMovies = favorites.slice(offset, offset + PER_PAGE);
  const pageCount = Math.ceil(favorites.length / PER_PAGE);

  useEffect(() => {
    if (page > 0 && offset >= favorites.length) {
      setPage(page - 1)
    }
  }, [favorites]);

  return (
    <div className='flex flex-col items-center justify-center mt-30'>
      {/* Title */}
      <h1 className='text-white font-bold italic text-4xl'>
        My Favorite Movies
      </h1>

      {/* Favorite Movies Container */}
      <MovieCardContainer movies={currentMovies}/>

      {/* Pagination */}
      {/*<ReactPaginate
        pageCount={pageCount}
        onPageChange={({ selected }) => setPage(selected)} 

        containerClassName='flex items-center justify-center my-14 gap-4'
        pageLinkClassName="pagination-link"
        
        previousLabel={"<"}
        previousLinkClassName='pagination-link'
        nextLabel={">"}
        nextLinkClassName='pagination-link'
      />*/}
      
    </div>
  )
}