import React, { useState } from 'react';

const BackgroundRemover = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setResult(null);
  };

  const removeBackground = async () => {
    if (!file) return alert('Please upload an image.');

    const formData = new FormData();
    formData.append('image_file', file);
    formData.append('size', 'auto');

    setLoading(true);
    try {
      const response = await fetch('https://api.remove.bg/v1.0/removebg', {
        method: 'POST',
        headers: {
          'X-Api-Key': 'YOUR_API_KEY_HERE', // <-- Replace with your actual API Key
        },
        body: formData,
      });

      if (!response.ok) throw new Error('Failed to remove background');

      const blob = await response.blob();
      const resultUrl = URL.createObjectURL(blob);
      setResult(resultUrl);
    } catch (error) {
      alert('Error removing background. Check API key or limits.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Background Remover</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} className="mb-4" />
      <button
        onClick={removeBackground}
        className="bg-blue-600 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? 'Processing...' : 'Remove Background'}
      </button>

      {result && (
        <div className="mt-6">
          <h3 className="font-semibold">Background Removed:</h3>
          <img src={result} alt="Result" className="w-64" />
          <a
            href={result}
            download="no-background.png"
            className="inline-block mt-2 bg-green-600 text-white px-4 py-2 rounded"
          >
            Download
          </a>
        </div>
      )}
    </div>
  );
};

export default BackgroundRemover;
