import React, { useState } from 'react';

const EssayGenerator = () => {
  const [topic, setTopic] = useState('');
  const [essay, setEssay] = useState('');
  const [loading, setLoading] = useState(false);

  const generateEssay = () => {
    if (!topic.trim()) return;

    setLoading(true);
    setTimeout(() => {
      const sampleEssay = `
${topic} is an important topic in today's world. It plays a significant role in our daily lives and impacts society in various ways.

Understanding the importance of ${topic} can help us make better decisions and contribute positively to our community. It is essential to learn and spread awareness about ${topic} so that people can become more informed and responsible.

In conclusion, ${topic} is not just a simple concept but something that affects individuals and communities globally. By learning more about ${topic}, we can create a better and more sustainable future.
      `.trim();

      setEssay(sampleEssay);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-purple-700">📝 Essay Generator</h2>

      <input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter a topic..."
        className="w-full p-3 border rounded mb-4"
      />

      <button
        onClick={generateEssay}
        className="bg-indigo-600 text-white px-4 py-2 rounded disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate Essay'}
      </button>

      {essay && (
        <div className="mt-6 bg-gray-50 p-4 rounded border whitespace-pre-line">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Generated Essay:</h3>
          <p className="text-gray-800">{essay}</p>
        </div>
      )}
    </div>
  );
};

export default EssayGenerator;
