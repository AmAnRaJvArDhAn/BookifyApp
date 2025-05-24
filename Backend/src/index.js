import express from 'express';
import dotenv from 'dotenv';
import connectDb from './db/index.js';
import bookRoutes from './routes/bookRoutes.js';
import externalRoutes from './routes/externalRoutes.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); 

connectDb();

app.get('/', (req, res) => {
    res.send('<h1>Hehe Aman, this is Bookify API!</h1>');
});

// Mount routes
app.use('/api/books', bookRoutes); // MongoDB routes
app.use('/api/external', externalRoutes); // Google Books API

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
export default app;