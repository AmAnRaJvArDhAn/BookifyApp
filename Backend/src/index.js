import express from 'express';
import dotenv from 'dotenv';
import connectDb from './db/index.js';

dotenv.config();
const app = express();

const port = process.env.PORT || 3000;

connectDb();
app.get('/', (req, res) => {
    res.send('<h1>Hehe Aman, this is Bookify API!</h1>');
});
app.listen(port, (req, res) => {
    console.log(`Server running on port ${port}`);
});
