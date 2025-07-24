import React from 'react';
import imageToolsImage from '../assets/blogs/image-tools.jpg'; // Add this image

const ImageToolsBlog = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-4">🖼️ Powerful Free Image Tools for Daily Use</h1>
      <img src={imageToolsImage} alt="Image editing tools" className="rounded-xl shadow-md mb-6 w-full" />

      <p className="mb-4 text-gray-800 text-lg">
        Whether you're a designer, blogger, developer, or student — image editing tools are essential. That’s why we created a set of free tools to compress, convert, resize, and enhance your images quickly and easily.
      </p>

      <h2 className="text-2xl font-semibold text-purple-600 mb-2">🗜️ 1. Image Compressor</h2>
      <p className="mb-4 text-gray-700">
        Reduce the size of your images without losing quality. Perfect for websites, blogs, and faster loading times.
      </p>

      <h2 className="text-2xl font-semibold text-purple-600 mb-2">📐 2. Image Resizer</h2>
      <p className="mb-4 text-gray-700">
        Instantly resize images to fit your needs. Whether it's for Instagram or a website banner — just upload and go.
      </p>

      <h2 className="text-2xl font-semibold text-purple-600 mb-2">🖼️ 3. JPG to PNG Converter</h2>
      <p className="mb-4 text-gray-700">
        Convert your JPG images to high-quality PNGs in seconds. No software required.
      </p>

      <h2 className="text-2xl font-semibold text-purple-600 mb-2">🎯 4. Background Remover</h2>
      <p className="mb-4 text-gray-700">
        Automatically remove the background from any image using AI. Get a transparent PNG in one click.
      </p>

      <h2 className="text-2xl font-semibold text-purple-600 mb-2">💻 5. Image to Base64 Converter</h2>
      <p className="mb-4 text-gray-700">
        Convert images to Base64 strings for embedding in HTML, CSS, or apps. Quick and developer-friendly.
      </p>

      <h2 className="text-2xl font-semibold text-purple-600 mb-2">🌑 6. Grayscale Image Filter</h2>
      <p className="mb-6 text-gray-700">
        Instantly turn any photo into a black and white version with our simple grayscale filter tool.
      </p>

      <div className="bg-purple-100 p-4 rounded-xl shadow">
        <h3 className="text-xl font-semibold text-purple-700 mb-2">Why Choose Our Image Tools?</h3>
        <ul className="list-disc pl-6 text-gray-800">
          <li>✅ 100% free and unlimited</li>
          <li>✅ Browser-based (no install)</li>
          <li>✅ Beginner friendly</li>
          <li>✅ Useful for web and design work</li>
        </ul>
      </div>

      <p className="mt-6 text-gray-700">
        These tools save time and give you more control over your image workflow. Try them all in one place — no signup needed!
      </p>
    </div>
  );
};

export default ImageToolsBlog;
