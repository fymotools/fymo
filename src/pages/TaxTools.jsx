import React from 'react';
import { Link } from 'react-router-dom';

const tools = [
  { name: 'Income Tax Calculator', path: '/tax-tools/income-tax' },
  { name: 'GST Calculator', path: '/tax-tools/gst' },
  { name: 'Sales Tax Calculator', path: '/tax-tools/sales-tax' },
  { name: 'Property Tax Estimator', path: '/tax-tools/property-tax' },
  { name: 'Advanced Tax Calculator', path: '/tax-tools/advanced-tax' },
];

const TaxTools = () => {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">Tax Tools</h1>
      <p className="text-gray-700">Choose a tax calculator to get started:</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <Link
            key={index}
            to={tool.path}
            className="block border rounded-xl p-4 shadow hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold text-blue-700">{tool.name}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default TaxTools;
