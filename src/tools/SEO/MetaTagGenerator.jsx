import React, { useState } from 'react';

const MetaTagGenerator = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [keywords, setKeywords] = useState('');
  const [output, setOutput] = useState('');

  const generateMetaTags = () => {
    const meta = `
<title>${title}</title>
<meta name="description" content="${description}">
<meta name="keywords" content="${keywords}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
    `.trim();
    setOutput(meta);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold text-purple-700">Meta Tag Generator</h1>
      <input
        type="text"
        placeholder="Page Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <textarea
        placeholder="Page Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Keywords (comma separated)"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button
        onClick={generateMetaTags}
        className="bg-purple-600 text-white px-4 py-2 rounded"
      >
        Generate Tags
      </button>
      {output && (
        <textarea
          className="w-full h-40 p-2 border rounded bg-gray-100"
          value={output}
          readOnly
        />
      )}
    </div>
  );
};

export default MetaTagGenerator;
