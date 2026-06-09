import React from 'react';
import { Link } from "react-router-dom";

export const Navbar = () => {

  return (
    <div className='flex justify-around items-center py-5 top-0 w-full 
        text-black font-bold bg-amber-50 fixed'>
        <h1 className='text-xl'>
            Movie Web
        </h1>

        <ul className='flex items-center list-none gap-8'>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/favorites"}>Favorites</Link>
            </li>
        </ul>
    </div>
  )
}