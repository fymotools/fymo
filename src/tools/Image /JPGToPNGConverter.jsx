import React, { useState } from 'react';

const JPGToPNGConverter = () => {
  const [original, setOriginal] = useState(null);
  const [converted, setConverted] = useState(null);

  const handleConvert = (e) => {
    const file = e.target.files[0];
    if (!file || !file.type.includes('image/jpeg')) {
      alert('Please upload a JPG image.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;

      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        const pngData = canvas.toDataURL('image/png');
        setOriginal(event.target.result);
        setConverted(pngData);
      };
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">JPG to PNG Converter</h2>
      <input type="file" accept="image/jpeg" onChange={handleConvert} className="mb-4" />
      {original && converted && (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Original JPG:</h3>
            <img src={original} alt="original" className="w-64" />
          </div>
          <div>
            <h3 className="font-semibold">Converted PNG:</h3>
            <img src={converted} alt="converted" className="w-64" />
            <a
              href={converted}
              download="converted.png"
              className="inline-block mt-2 text-white bg-green-600 px-4 py-2 rounded"
            >
              Download
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default JPGToPNGConverter;
