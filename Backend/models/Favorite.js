import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema({
    movieId: Number,
    title: String,
    poster_path: String,
    vote_average: Number,
});

export default mongoose.model("Favorite", favoriteSchema);