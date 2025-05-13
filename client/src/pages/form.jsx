import React, { useState } from 'react';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const [audioFile, setAudioFile] = useState(null);
  const [prescription, setPrescription] = useState('');
  const [savedText, setSavedText] = useState('');
  const [prescriptionId, setPrescriptionId] = useState(null);
  const [loading, setLoading] = useState(false);

  // Toastify setup
  const notify = (message) => toast(message);

  const handleUpload = async () => {
    if (!audioFile) return notify('Please upload an audio file');
    const formData = new FormData();
    formData.append('audio', audioFile);

    setLoading(true); 

    try {
      const res = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        throw new Error('Failed to upload the file');
      }

      const data = await res.json();
      
      setPrescription(data.prescription);
      setPrescriptionId(data.id);
      notify('Audio uploaded successfully!');
    } catch (error) {
      console.error(error); 
      notify('Error uploading file');
    } finally {
      setLoading(false); 
    }
  };

  const handleSave = async () => {
    if (!prescriptionId) return notify('Upload the audio file first');

    setLoading(true);

    try {
      const res = await fetch(`http://localhost:5000/prescription/${prescriptionId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: prescription }),
      });

      if (!res.ok) {
        throw new Error('Failed to save prescription');
      }

      const data = await res.json();
      setSavedText(data.updated.text); 
      notify('Prescription saved successfully!');
    } catch (error) {
      console.error(error); 
      notify('Error saving prescription');
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-4 text-center">Upload Audio & Get Prescription</h1>

        <input
          type="file"
          accept="audio/*"
          onChange={(e) => setAudioFile(e.target.files[0])}
          className="mb-4 w-full"
        />

        <button
          onClick={handleUpload}
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4 w-full hover:bg-blue-600 transition"
          disabled={loading}
        >
          {loading ? 'Uploading...' : 'Upload Audio'}
        </button>

        {prescription && (
          <>
            <textarea
              rows={10}
              value={prescription}
              onChange={(e) => setPrescription(e.target.value)}
              className="w-full border p-3 rounded mb-4"
            />
            <button
              onClick={handleSave}
              className="bg-green-500 text-white px-4 py-2 rounded w-full hover:bg-green-600 transition"
              disabled={loading}
            >
              {loading ? 'Saving...' : 'Save Prescription'}
            </button>
          </>
        )}

        {savedText && (
          <div className="mt-6 bg-gray-100 p-4 rounded">
            <h2 className="font-semibold mb-2">Saved Prescription:</h2>
            <pre className="whitespace-pre-wrap">{savedText}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;

