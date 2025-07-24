import React, { useState } from 'react';

const BacklinkChecker = () => {
  const [domain, setDomain] = useState('');
  const [output, setOutput] = useState('');

  const checkBacklinks = () => {
    setOutput('⚠️ Backlink checker needs a paid API like Ahrefs, Moz, or SEMrush.\nThis is a placeholder tool only.');
  };

  return (
    <div className="max-w-xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold text-purple-700">Backlink Checker (UI Only)</h1>
      <input
        type="text"
        placeholder="Enter domain (e.g. example.com)"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button
        onClick={checkBacklinks}
        className="bg-purple-600 text-white px-4 py-2 rounded"
      >
        Check
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

export default BacklinkChecker;
