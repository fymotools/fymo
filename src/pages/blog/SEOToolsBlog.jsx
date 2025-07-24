import React from 'react';
import { Link } from 'react-router-dom';

const SEOToolsBlog = () => {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold text-yellow-600">Boost Your Website with SEO Tools</h1>
      <p className="text-gray-700">
        Get more traffic and better rankings using Fymo Tools' SEO optimization tools.
      </p>
      <ul className="list-disc list-inside space-y-2 text-yellow-600">
        <li><Link to="/seo-tools">Meta Tag Generator</Link></li>
        <li><Link to="/seo-tools">Robots.txt Generator</Link></li>
        <li><Link to="/seo-tools">Keyword Density Checker</Link></li>
        <li><Link to="/seo-tools">Backlink Checker</Link></li>
        <li><Link to="/seo-tools">XML Sitemap Generator</Link></li>
      </ul>
      <p className="text-sm text-gray-500">Try them all at <Link to="/seo-tools" className="underline">SEO Tools</Link> section.</p>
    </main>
  );
};

export default SEOToolsBlog;
