import React from 'react';
import { Link } from 'react-router-dom';

const ImageToolsBlog = () => {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold text-pink-600">Best Free Image Editing Tools</h1>
      <p className="text-gray-700">
        Need to compress, resize, convert or edit your images? Fymo's free tools help you do all of that instantly.
      </p>
      <ul className="list-disc list-inside space-y-2 text-pink-600">
        <li><Link to="/image-tools">Image Compressor</Link></li>
        <li><Link to="/image-tools">Image Resizer</Link></li>
        <li><Link to="/image-tools">JPG to PNG Converter</Link></li>
        <li><Link to="/image-tools">Background Remover</Link></li>
        <li><Link to="/image-tools">Image to Base64 Converter</Link></li>
      </ul>
      <p className="text-sm text-gray-500">All available at <Link to="/image-tools" className="underline">Image Tools</Link>.</p>
    </main>
  );
};

export default ImageToolsBlog;
