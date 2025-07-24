import React, { useState } from 'react';

const ImageCompressor = () => {
  const [original, setOriginal] = useState(null);
  const [compressed, setCompressed] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (event) {
      const img = new Image();
      img.src = event.target.result;

      img.onload = function () {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        const compressedData = canvas.toDataURL('image/jpeg', 0.5);
        setCompressed(compressedData);
        setOriginal(event.target.result);
      };
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Image Compressor</h2>
      <input type="file" accept="image/*" onChange={handleImageUpload} className="mb-4" />
      {original && (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Original:</h3>
            <img src={original} alt="original" className="w-64" />
          </div>
          <div>
            <h3 className="font-semibold">Compressed (50%):</h3>
            <img src={compressed} alt="compressed" className="w-64" />
            <a
              href={compressed}
              download="compressed.jpg"
              className="inline-block mt-2 text-white bg-blue-600 px-4 py-2 rounded"
            >
              Download
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCompressor;
