import React from 'react';
import { Link } from 'react-router-dom';

const WritingToolsBlog = () => {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold text-purple-700">AI Writing Tools That Save Time</h1>
      <p className="text-gray-700">
        Whether you're a student or a blogger, our writing tools can generate, summarize, and optimize your content.
      </p>
      <ul className="list-disc list-inside space-y-2 text-purple-600">
        <li><Link to="/writing-tools">AI Text-to-Article Generator</Link></li>
        <li><Link to="/writing-tools">Blog Title Generator</Link></li>
        <li><Link to="/writing-tools">Summary Generator</Link></li>
        <li><Link to="/writing-tools">Essay Generator</Link></li>
        <li><Link to="/writing-tools">SEO Meta Description Generator</Link></li>
      </ul>
      <p className="text-sm text-gray-500">Use them now at <Link to="/writing-tools" className="underline">Writing Tools</Link>.</p>
    </main>
  );
};

export default WritingToolsBlog;
