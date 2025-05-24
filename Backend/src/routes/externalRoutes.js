import express from 'express';
import { searchBooksFromGoogle } from '../controllers/externalBookController.js';

const router = express.Router();

router.get('/search', searchBooksFromGoogle);

export default router;
