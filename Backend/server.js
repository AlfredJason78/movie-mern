import express from 'express';
import cors from 'cors';

// MongoDB
import { connectDB } from './config/db.js';

// Routes
import favoriteRoutes from "./routes/favoriteRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/favorites', favoriteRoutes);

app.listen(5000, () => {
    console.log("Server is running on PORT 5000");
})