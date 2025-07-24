import React, { useState } from 'react';

const ImageToBase64 = () => {
  const [base64, setBase64] = useState('');
  const [preview, setPreview] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setBase64(reader.result);
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(base64).then(() => {
      alert('Base64 copied to clipboard!');
    });
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Image to Base64 Converter</h2>
      <input type="file" accept="image/*" onChange={handleImageUpload} className="mb-4" />

      {preview && (
        <div className="space-y-4">
          <img src={preview} alt="Preview" className="w-64" />
          <textarea
            rows="8"
            value={base64}
            readOnly
            className="w-full border rounded p-2 text-xs"
          ></textarea>
          <button
            onClick={copyToClipboard}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Copy Base64
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageToBase64;
