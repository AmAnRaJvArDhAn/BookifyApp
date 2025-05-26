import express from 'express';
import { searchBooksFromGoogle, getBooksByGenre } from '../controllers/externalBookController.js';

const router = express.Router();

router.get('/search', searchBooksFromGoogle);
router.get('/genre/:genre', getBooksByGenre);

export default router;
