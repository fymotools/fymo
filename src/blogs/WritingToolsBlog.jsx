import React from 'react';
import writingImage from '../assets/blogs/writing-tools.jpg'; // Make sure this image exists

const WritingToolsBlog = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-4">✍️ Unleash Your Creativity with Our Free Writing Tools</h1>
      <img src={writingImage} alt="Writing tools" className="rounded-xl shadow-md mb-6 w-full" />
      
      <p className="mb-4 text-gray-800 text-lg">
        Whether you're a blogger, student, or content creator, our powerful writing tools will help you write faster, smarter, and more creatively. All tools are free, fast, and beginner-friendly.
      </p>

      <h2 className="text-2xl font-semibold text-purple-600 mb-2">🧠 1. AI Text-to-Article Generator</h2>
      <p className="mb-4 text-gray-700">
        Generate full-length articles from just a few keywords. Ideal for blogs, reports, and creative writing — powered by AI.
      </p>

      <h2 className="text-2xl font-semibold text-purple-600 mb-2">📢 2. Blog Title Generator</h2>
      <p className="mb-4 text-gray-700">
        Get attention-grabbing blog titles in seconds. Just enter your topic and get creative suggestions instantly.
      </p>

      <h2 className="text-2xl font-semibold text-purple-600 mb-2">✂️ 3. Summary Generator</h2>
      <p className="mb-4 text-gray-700">
        Summarize long texts into short, meaningful content. Perfect for articles, assignments, and research papers.
      </p>

      <h2 className="text-2xl font-semibold text-purple-600 mb-2">📝 4. Essay Generator</h2>
      <p className="mb-4 text-gray-700">
        Need an essay? Provide a topic and our AI tool will generate a well-structured essay with introduction, body, and conclusion.
      </p>

      <h2 className="text-2xl font-semibold text-purple-600 mb-2">⚙️ 5. SEO Meta Description Generator</h2>
      <p className="mb-6 text-gray-700">
        Boost your blog’s SEO with strong meta descriptions. Just enter your content and get optimized meta tags instantly.
      </p>

      <div className="bg-purple-100 p-4 rounded-xl shadow">
        <h3 className="text-xl font-semibold text-purple-700 mb-2">Why Use Our Writing Tools?</h3>
        <ul className="list-disc pl-6 text-gray-800">
          <li>✅ Save time and effort</li>
          <li>✅ Free and easy to use</li>
          <li>✅ Improve your content quality</li>
          <li>✅ No login required</li>
        </ul>
      </div>

      <p className="mt-6 text-gray-700">
        Don’t let writer’s block stop you. Use these tools to brainstorm ideas, write faster, and create powerful content in minutes!
      </p>
    </div>
  );
};

export default WritingToolsBlog;
