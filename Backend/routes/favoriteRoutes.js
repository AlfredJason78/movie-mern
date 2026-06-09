import express from "express";
import Favorite from "../models/Favorite.js";

const router = express.Router();

// GET
router.get("/", async (req, res) => {
    const data = await Favorite.find();
    res.json(data);
})

// POST
router.post("/", async (req, res) => {
    const exists = await Favorite.findOne({ movieId: req.body.movieId });
    if (exists) {
        return res.json(exists);
    }

    const fav = new Favorite(req.body);
    await fav.save();
    res.json(fav);
})

// DELETE
router.delete("/:id", async (req, res) => {
    await Favorite.deleteOne({ movieId: Number(req.params.id) });
    res.json({ message: "Deleted" });
})

export default router;
