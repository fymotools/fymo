import React, { useState } from 'react';

const BlogTitleGenerator = () => {
  const [keyword, setKeyword] = useState('');
  const [titles, setTitles] = useState([]);

  const generateTitles = () => {
    if (!keyword.trim()) return;

    const ideas = [
      `10 Things You Didn't Know About ${keyword}`,
      `How to Master ${keyword} in 7 Days`,
      `The Ultimate Guide to ${keyword}`,
      `${keyword}: Tips, Tricks & Tools You Need`,
      `Why ${keyword} is the Future`,
      `Beginner’s Guide to ${keyword}`,
      `What Everyone Should Know About ${keyword}`,
    ];

    setTitles(ideas);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-green-700">📰 Blog Title Generator</h2>
      
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Enter a keyword or topic..."
        className="w-full p-3 border rounded mb-4"
      />

      <button
        onClick={generateTitles}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Generate Titles
      </button>

      {titles.length > 0 && (
        <div className="mt-6 bg-gray-50 p-4 rounded border">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Generated Titles:</h3>
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            {titles.map((title, index) => (
              <li key={index}>{title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BlogTitleGenerator;
