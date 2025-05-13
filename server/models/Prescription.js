import mongoose from 'mongoose';

const prescriptionSchema = new mongoose.Schema({
  audioFile: String,
  text: String,
});

export default mongoose.model('Prescription', prescriptionSchema);
