import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  { slug: 'tax-tools', title: 'Top Tax Tools You Need in 2025' },
  { slug: 'health-tools', title: 'Stay Fit with These Health Calculators' },
  { slug: 'writing-tools', title: 'AI Writing Tools That Save Time' },
  { slug: 'seo-tools', title: 'Boost Your Website with SEO Tools' },
  { slug: 'image-tools', title: 'Image Tools to Compress, Convert & More' },
  { slug: 'daily-tools', title: 'Useful Everyday Tools for Productivity' },
];
<div className="mt-16 text-center">
  <h2 className="text-3xl font-bold text-blue-700 mb-4">📚 Read Our Blog</h2>
  <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
    Learn more about how each tool works, get tips, and stay updated through our detailed blog posts.
  </p>
  <Link
    to="/blog"
    className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-6 py-3 rounded-full transition duration-300"
  >
    Visit Blog
  </Link>
</div>

const Blog = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      <h1 className="text-3xl font-bold text-blue-600 text-center">Fymo Blog</h1>
      <ul className="grid gap-6 sm:grid-cols-2">
        {blogPosts.map(post => (
          <li key={post.slug} className="border rounded-lg p-4 hover:shadow">
            <Link to={`/blog/${post.slug}`} className="text-xl text-blue-600 font-semibold hover:underline">
              {post.title}
            </Link>
            <p className="text-sm text-gray-600 mt-2">Read more about {post.title.toLowerCase()}.</p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Blog;
