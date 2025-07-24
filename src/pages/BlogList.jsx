import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    title: "📊 Tax Tools Guide",
    image: "/assets/blogs/tax-tools.jpg",
    link: "/blog/tax-tools",
    description: "Understand how to use tax calculators and save more in taxes.",
  },
  {
    title: "❤️ Health Tools Explained",
    image: "/assets/blogs/health-tools.jpg",
    link: "/blog/health-tools",
    description: "Track your health with BMI, BMR, and more — all online and free.",
  },
  {
    title: "✍️ Writing Tools for Creators",
    image: "/assets/blogs/writing-tools.jpg",
    link: "/blog/writing-tools",
    description: "Learn how to use AI to generate articles, summaries, and SEO content.",
  },
  {
    title: "📈 SEO Tools Guide",
    image: "/assets/blogs/seo-tools.jpg",
    link: "/blog/seo-tools",
    description: "Boost your website's Google ranking using Fymo's SEO utilities.",
  },
  {
    title: "🖼️ Image Tools Explained",
    image: "/assets/blogs/image-tools.jpg",
    link: "/blog/image-tools",
    description: "Compress, resize, convert, and edit images directly from your browser.",
  },
  {
    title: "🧰 Daily Utility Tools",
    image: "/assets/blogs/daily-tools.jpg",
    link: "/blog/daily-tools",
    description: "Simplify your everyday work with smart tools like notepad, unit converter, etc.",
  },
];

const BlogList = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">📚 Our Latest Blogs</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {blogPosts.map((post, index) => (
          <Link to={post.link} key={index} className="bg-white rounded-2xl shadow hover:shadow-lg transition duration-300">
            <img src={post.image} alt={post.title} className="rounded-t-2xl w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-blue-600">{post.title}</h2>
              <p className="text-gray-700 mt-2 text-sm">{post.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
