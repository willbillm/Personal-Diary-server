import express from 'express';
import { getEntry, createEntry, deleteEntry } from '../controllers/entry.js';
import entry from '../models/entry.js';

const router = express.Router();

router.get('/', getEntry);

router.post('/', createEntry);

router.delete('/:id', deleteEntry)

export default router;