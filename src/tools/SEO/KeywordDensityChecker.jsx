import React, { useState } from 'react';

const KeywordDensityChecker = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState([]);

  const checkDensity = () => {
    const words = text.toLowerCase().match(/\b\w+\b/g);
    if (!words) return;
    const totalWords = words.length;
    const freq = {};

    words.forEach(word => {
      freq[word] = (freq[word] || 0) + 1;
    });

    const sorted = Object.entries(freq)
      .sort((a, b) => b[1] - a[1])
      .map(([word, count]) => ({
        word,
        count,
        percent: ((count / totalWords) * 100).toFixed(2)
      }));

    setResult(sorted.slice(0, 10));
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold text-purple-700">Keyword Density Checker</h1>
      <textarea
        rows="6"
        placeholder="Paste your content here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button
        onClick={checkDensity}
        className="bg-purple-600 text-white px-4 py-2 rounded"
      >
        Analyze
      </button>
      {result.length > 0 && (
        <div className="mt-4">
          <h2 className="font-semibold mb-2">Top Keywords:</h2>
          <table className="w-full border">
            <thead>
              <tr className="bg-purple-100">
                <th className="p-2 border">Keyword</th>
                <th className="p-2 border">Count</th>
                <th className="p-2 border">% Density</th>
              </tr>
            </thead>
            <tbody>
              {result.map((item, idx) => (
                <tr key={idx} className="text-center">
                  <td className="p-2 border">{item.word}</td>
                  <td className="p-2 border">{item.count}</td>
                  <td className="p-2 border">{item.percent}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default KeywordDensityChecker;
