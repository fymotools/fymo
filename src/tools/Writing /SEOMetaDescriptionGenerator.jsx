import React, { useState } from 'react';

const SEOMetaDescriptionGenerator = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const generateDescription = () => {
    if (!title.trim() || !content.trim()) return;

    setLoading(true);
    setTimeout(() => {
      const words = content.split(' ').slice(0, 25).join(' ');
      const meta = `${title} - ${words}${content.split(' ').length > 25 ? '...' : ''}`;
      setDescription(meta);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-yellow-600">⚙️ SEO Meta Description Generator</h2>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter blog title..."
        className="w-full p-3 border rounded mb-4"
      />

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Paste blog content or summary here..."
        className="w-full p-3 border rounded mb-4 h-40"
      ></textarea>

      <button
        onClick={generateDescription}
        className="bg-yellow-600 text-white px-4 py-2 rounded disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate Meta Description'}
      </button>

      {description && (
        <div className="mt-6 bg-gray-100 p-4 rounded border">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Meta Description:</h3>
          <p className="text-gray-800">{description}</p>
        </div>
      )}
    </div>
  );
};

export default SEOMetaDescriptionGenerator;
