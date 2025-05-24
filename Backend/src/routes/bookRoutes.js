import express from 'express';
import { getAllBooks, addBook, deleteBook } from '../controllers/bookController.js';

const router = express.Router();

router.get('/', getAllBooks);
router.post('/', addBook);
router.delete('/:id', deleteBook);

export default router;
