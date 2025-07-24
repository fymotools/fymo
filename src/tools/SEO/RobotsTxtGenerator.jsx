import React, { useState } from 'react';

const RobotsTxtGenerator = () => {
  const [sitemap, setSitemap] = useState('');
  const [disallow, setDisallow] = useState('/admin');
  const [output, setOutput] = useState('');

  const generateRobotsTxt = () => {
    const robots = `
User-agent: *
Disallow: ${disallow}
Sitemap: ${sitemap}
    `.trim();
    setOutput(robots);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold text-purple-700">Robots.txt Generator</h1>
      <input
        type="text"
        placeholder="Sitemap URL (e.g. https://yoursite.com/sitemap.xml)"
        value={sitemap}
        onChange={(e) => setSitemap(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Disallow Path (default: /admin)"
        value={disallow}
        onChange={(e) => setDisallow(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button
        onClick={generateRobotsTxt}
        className="bg-purple-600 text-white px-4 py-2 rounded"
      >
        Generate
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

export default RobotsTxtGenerator;
