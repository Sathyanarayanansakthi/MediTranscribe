import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import fs from 'fs';
import Prescription from './models/Prescription.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Create 'uploads' folder if it doesn't exist
const uploadDir = './uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Multer setup for handling file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});
const upload = multer({ storage });

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected')).catch(err => console.error(err));

// POST /upload - Upload audio file and return dummy prescription text
app.post('/upload', upload.single('audio'), async (req, res) => {
  try {
    const { file } = req;
    if (!file) return res.status(400).json({ message: 'No file uploaded' });

    const dummyText = `Patient: Jane Doe\nPrescription:\n- Ibuprofen 400mg\n- Twice daily after meals\n- Duration: 7 days`;

    // Save prescription info to DB
    const prescription = new Prescription({
      audioFile: file.filename,
      text: dummyText
    });

    await prescription.save();

    res.status(200).json({ id: prescription._id, prescription: dummyText });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// PUT /prescription/:id - Save edited prescription text
app.put('/prescription/:id', async (req, res) => {
  try {
    const { text } = req.body;
    const { id } = req.params;

    const updated = await Prescription.findByIdAndUpdate(id, { text }, { new: true });

    if (!updated) return res.status(404).json({ message: 'Prescription not found' });

    res.status(200).json({ message: 'Updated successfully', updated });
  } catch (err) {
    res.status(500).json({ message: 'Update failed' });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
