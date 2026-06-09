const BASE_URL = "http://localhost:5000/api/favorites";

export const getFavorites = async () => {
    const res = await fetch(BASE_URL);
    return res.json();
}

export const addFavorite = async (movie) => {
    const payload = {
        movieId: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        vote_average: movie.vote_average
    }

    await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    });
}

export const removeFavorite = async (id) => {
    await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
    })
}