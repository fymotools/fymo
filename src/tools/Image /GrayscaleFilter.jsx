import React, { useState } from 'react';

const GrayscaleFilter = () => {
  const [imageURL, setImageURL] = useState(null);
  const [grayscale, setGrayscale] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImageURL(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Grayscale Image Filter</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} className="mb-4" />
      <div className="mb-4">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={grayscale}
            onChange={() => setGrayscale(!grayscale)}
          />
          <span>Apply Grayscale Filter</span>
        </label>
      </div>

      {imageURL && (
        <img
          src={imageURL}
          alt="Preview"
          className={`w-72 border rounded ${grayscale ? 'grayscale' : ''}`}
        />
      )}
    </div>
  );
};

export default GrayscaleFilter;
