import Prescription from '../models/Prescription.js';

export const handleUpload = async (req, res) => {
  try {
    const { file } = req;

    if (!file) return res.status(400).json({ message: 'No audio file uploaded' });

    // Simulate transcription logic (replace with real speech-to-text API)
    const transcribedText = `Prescription from audio: ${file.originalname}`;

    // Save to MongoDB
    const prescription = new Prescription({ audioFile: file.filename, text: transcribedText });
    await prescription.save();

    res.status(200).json({ prescription: transcribedText });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to process audio file' });
  }
};
