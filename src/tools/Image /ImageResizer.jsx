import React, { useState } from 'react';

const ImageResizer = () => {
  const [original, setOriginal] = useState(null);
  const [resized, setResized] = useState(null);

  const handleResize = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;

      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width / 2;
        canvas.height = img.height / 2;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const resizedData = canvas.toDataURL('image/png');
        setOriginal(event.target.result);
        setResized(resizedData);
      };
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Image Resizer</h2>
      <input type="file" accept="image/*" onChange={handleResize} className="mb-4" />
      {original && resized && (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Original Image:</h3>
            <img src={original} alt="original" className="w-64" />
          </div>
          <div>
            <h3 className="font-semibold">Resized Image (50%):</h3>
            <img src={resized} alt="resized" className="w-64" />
            <a
              href={resized}
              download="resized.png"
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

export default ImageResizer;
