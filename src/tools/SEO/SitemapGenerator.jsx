import React, { useState } from 'react';

const SitemapGenerator = () => {
  const [urls, setUrls] = useState('');
  const [output, setOutput] = useState('');

  const generateSitemap = () => {
    const urlList = urls.split('\n').map((url) => url.trim()).filter(Boolean);
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlList.map(url => `  <url><loc>${url}</loc></url>`).join('\n')}
</urlset>`;
    setOutput(sitemap);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold text-purple-700">XML Sitemap Generator</h1>
      <textarea
        rows="6"
        placeholder="Enter one URL per line"
        value={urls}
        onChange={(e) => setUrls(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button
        onClick={generateSitemap}
        className="bg-purple-600 text-white px-4 py-2 rounded"
      >
        Generate Sitemap
      </button>
      {output && (
        <textarea
          className="w-full h-60 p-2 border rounded bg-gray-100"
          value={output}
          readOnly
        />
      )}
    </div>
  );
};

export default SitemapGenerator;
