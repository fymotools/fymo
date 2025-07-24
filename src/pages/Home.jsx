import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="px-4 py-8 max-w-7xl mx-auto space-y-12">

      {/* 🟦 Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-2">Fymo Tools</h1>
        <p className="text-gray-600 text-lg">
          The ultimate free online tools platform – fast, secure, and no sign-up required.
        </p>
      </section>

      {/* 🔥 Top 10 SEO Tools */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Top 10 SEO Tools</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-blue-600 list-disc list-inside">
          <li><Link to="/seo-tools">Meta Tag Generator</Link></li>
          <li><Link to="/seo-tools">Robots.txt Generator</Link></li>
          <li><Link to="/seo-tools">Keyword Density Checker</Link></li>
          <li><Link to="/seo-tools">Backlink Checker</Link></li>
          <li><Link to="/seo-tools">XML Sitemap Generator</Link></li>
          <li><Link to="/writing-tools">SEO Meta Description Generator</Link></li>
          <li><Link to="/writing-tools">Blog Title Generator</Link></li>
          <li><Link to="/writing-tools">AI Article Generator</Link></li>
          <li><Link to="/writing-tools">Summary Generator</Link></li>
          <li><Link to="/writing-tools">Essay Generator</Link></li>
        </ul>
      </section>

      {/* ⚙️ Top 10 General Tools */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Top 10 General Tools</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-blue-600 list-disc list-inside">
          <li><Link to="/image-tools">Image Compressor</Link></li>
          <li><Link to="/image-tools">Image Resizer</Link></li>
          <li><Link to="/image-tools">JPG to PNG Converter</Link></li>
          <li><Link to="/image-tools">Background Remover</Link></li>
          <li><Link to="/daily-tools">Age Calculator</Link></li>
          <li><Link to="/daily-tools">Loan EMI Calculator</Link></li>
          <li><Link to="/daily-tools">Screen Recorder</Link></li>
          <li><Link to="/daily-tools">Unit Converter</Link></li>
          <li><Link to="/daily-tools">Notepad</Link></li>
          <li><Link to="/image-tools">Image to Base64 Converter</Link></li>
        </ul>
      </section>
import { Link } from 'react-router-dom';

// Inside your return JSX:
<div className="mt-12 text-center">
  <h2 className="text-3xl font-bold text-blue-700 mb-4">📚 Read Our Blog</h2>
  <p className="text-gray-600 mb-6 max-w-xl mx-auto">
    Discover guides, tutorials, and updates about all our tools in one place.
  </p>
  <Link
    to="/blog"
    className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-6 py-3 rounded-full transition duration-300"
  >
    Visit Our Blog
  </Link>
</div>

      {/* 💬 CTA Section */}
      <section className="text-center space-y-2">
        <p>Want to support us? <Link to="/donate" className="text-blue-600 underline">Donate here</Link>.</p>
        <p>Check out tips, tutorials and updates on our <Link to="/blog" className="text-blue-600 underline">Blog</Link>.</p>
      </section>
      
    </main>
  );
};

export default Home;
