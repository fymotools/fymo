import React from 'react';
import { Link } from 'react-router-dom';

const TaxToolsBlog = () => {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold text-blue-700">Top Tax Tools You Need in 2025</h1>
      <p className="text-gray-700">
        Managing your taxes is now easier than ever with online tools. Fymo Tools offers a full suite of tax calculators to simplify your finances.
      </p>
      <ul className="list-disc list-inside space-y-2 text-blue-600">
        <li><Link to="/tax-tools">Income Tax Calculator</Link></li>
        <li><Link to="/tax-tools">GST Calculator</Link></li>
        <li><Link to="/tax-tools">Sales Tax Calculator</Link></li>
        <li><Link to="/tax-tools">Property Tax Estimator</Link></li>
        <li><Link to="/tax-tools">Advanced Tax Calculator</Link></li>
      </ul>
      <p className="text-sm text-gray-500">Visit our <Link to="/tax-tools" className="underline">Tax Tools</Link> page to use them all free.</p>
    </main>
  );
};

export default TaxToolsBlog;
