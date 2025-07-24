import React, { useState } from 'react';

const SummaryGenerator = () => {
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const generateSummary = () => {
    if (!inputText.trim()) return;

    setLoading(true);
    setTimeout(() => {
      // Simple placeholder summary logic
      const words = inputText.split(' ');
      const shortSummary = words.slice(0, Math.min(30, words.length)).join(' ') + (words.length > 30 ? '...' : '');
      setSummary(shortSummary);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">✂️ Summary Generator</h2>

      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Paste or type your text here..."
        className="w-full p-3 border rounded mb-4 h-48"
      ></textarea>

      <button
        onClick={generateSummary}
        className="bg-green-600 text-white px-4 py-2 rounded disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate Summary'}
      </button>

      {summary && (
        <div className="mt-6 bg-gray-100 p-4 rounded border">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Summary:</h3>
          <p className="text-gray-800">{summary}</p>
        </div>
      )}
    </div>
  );
};

export default SummaryGenerator;
