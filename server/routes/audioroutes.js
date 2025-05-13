import express from 'express';
import multer from 'multer';
import { handleUpload } from '../controllers/audioController.js';

const router = express.Router();

// File upload setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});

const upload = multer({ storage });

router.post('/upload', upload.single('audio'), handleUpload);

export default router;
