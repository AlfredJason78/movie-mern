import { useEffect, useState, createContext} from "react";
import { addFavorite, getFavorites, removeFavorite } from "../services/api";

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const loadFavorites = async () => {
        const data = await getFavorites();
        setFavorites(data);
    }

    // Load from backend once
    useEffect(() => {
        loadFavorites();
    }, [])

    // Uses the functions from /services/api.js
    const handleAdd = async (movie) => {
        await addFavorite(movie);
        loadFavorites();
    } 

    const handleRemove = async (id) => {
        await removeFavorite(id);
        loadFavorites();
    }

    return (
        <FavoriteContext.Provider value={{ favorites, handleAdd, handleRemove }}>
            {children}
        </FavoriteContext.Provider>

    )
}
