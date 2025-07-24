import React from 'react';
import { Link } from 'react-router-dom';

const seoTools = [
  { name: 'Meta Tag Generator', path: '/seo-tools/meta-tags' },
  { name: 'Robots.txt Generator', path: '/seo-tools/robots-txt' },
  { name: 'Keyword Density Checker', path: '/seo-tools/keyword-density' },
  { name: 'Backlink Checker', path: '/seo-tools/backlink-checker' },
  { name: 'XML Sitemap Generator', path: '/seo-tools/sitemap' },
];

const SEOTools = () => {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold text-purple-700">SEO Tools</h1>
      <p className="text-gray-700">Boost your SEO performance with these tools:</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {seoTools.map((tool, index) => (
          <Link
            key={index}
            to={tool.path}
            className="block border rounded-xl p-4 shadow hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold text-purple-800">{tool.name}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default SEOTools;
