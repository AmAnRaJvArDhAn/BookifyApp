import express from 'express';
import cors from 'cors';
import bookRoutes from './routes/bookRoutes.js';
import externalRoutes from './routes/externalRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/books', bookRoutes); // Local DB
app.use('/api/external', externalRoutes); // Google API

export default app;
