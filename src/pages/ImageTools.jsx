import React from 'react';
import { Link } from 'react-router-dom';

const imageTools = [
  { name: 'Image Compressor', path: '/image-tools/compressor' },
  { name: 'Image Resizer', path: '/image-tools/resizer' },
  { name: 'JPG to PNG Converter', path: '/image-tools/jpg-to-png' },
  { name: 'Background Remover', path: '/image-tools/background-remover' },
  { name: 'Image to Base64 Converter', path: '/image-tools/base64-converter' },
  { name: 'Grayscale Image Filter', path: '/image-tools/grayscale' },
];

const ImageTools = () => {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">Image Tools</h1>
      <p className="text-gray-700">Easily transform your images using these tools:</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {imageTools.map((tool, index) => (
          <Link
            key={index}
            to={tool.path}
            className="block border rounded-xl p-4 shadow hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold text-blue-700">{tool.name}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default ImageTools;
