import React, { useState } from 'react';

const TextToArticleGenerator = () => {
  const [topic, setTopic] = useState('');
  const [article, setArticle] = useState('');
  const [loading, setLoading] = useState(false);

  const generateArticle = () => {
    if (!topic.trim()) return;
    setLoading(true);

    // Dummy generation logic
    setTimeout(() => {
      const generated = `Title: ${topic}\n\n${topic} is a very interesting subject. This AI-generated article discusses key points about ${topic}, its benefits, challenges, and real-world applications. It helps readers understand the topic in depth.\n\nIn conclusion, ${topic} continues to impact our lives in significant ways.`;
      setArticle(generated);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">🧠 Text to Article Generator</h2>
      
      <input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter your topic..."
        className="w-full p-3 border rounded mb-4"
      />

      <button
        onClick={generateArticle}
        className="bg-green-600 text-white px-4 py-2 rounded disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate Article'}
      </button>

      {article && (
        <div className="mt-6 bg-gray-100 p-4 rounded border">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Generated Article:</h3>
          <pre className="whitespace-pre-wrap text-gray-800">{article}</pre>
        </div>
      )}
    </div>
  );
};

export default TextToArticleGenerator;
