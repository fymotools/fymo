import React from 'react';
import seoImage from '../assets/blogs/seo-tools.jpg'; // Make sure this image exists

const SEOToolsBlog = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">🔍 Boost Your Rankings with Free SEO Tools</h1>
      <img src={seoImage} alt="SEO tools" className="rounded-xl shadow-md mb-6 w-full" />
      
      <p className="mb-4 text-gray-800 text-lg">
        Want to rank higher on Google? Our collection of free SEO tools can help you optimize your website content, structure, and strategy — no expertise needed!
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-2">📄 1. Meta Tag Generator</h2>
      <p className="mb-4 text-gray-700">
        Easily create SEO-friendly title and description tags for your web pages. Improve CTR and search engine visibility effortlessly.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-2">🤖 2. Robots.txt Generator</h2>
      <p className="mb-4 text-gray-700">
        Control how search engines crawl your site. Generate a valid `robots.txt` file instantly to guide bots and improve crawl efficiency.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-2">📈 3. Keyword Density Checker</h2>
      <p className="mb-4 text-gray-700">
        Analyze the frequency of keywords in your content to ensure proper balance. Avoid keyword stuffing and maintain SEO health.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-2">🔗 4. Backlink Checker</h2>
      <p className="mb-4 text-gray-700">
        Monitor your website's backlinks. Discover who’s linking to your site and improve your off-page SEO performance.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-2">🗺️ 5. XML Sitemap Generator</h2>
      <p className="mb-6 text-gray-700">
        Create a proper XML sitemap to help search engines index your site faster. Ideal for improving crawlability and SEO visibility.
      </p>

      <div className="bg-blue-100 p-4 rounded-xl shadow">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">Why Use Our SEO Tools?</h3>
        <ul className="list-disc pl-6 text-gray-800">
          <li>✅ No coding required</li>
          <li>✅ Beginner friendly</li>
          <li>✅ Improve website rankings</li>
          <li>✅ Free forever</li>
        </ul>
      </div>

      <p className="mt-6 text-gray-700">
        Stay ahead of the SEO game with these free and essential tools. Whether you're a blogger or developer, boost your site's performance now!
      </p>
    </div>
  );
};

export default SEOToolsBlog;
