import React from 'react';
import { Link } from 'react-router-dom';

const DailyToolsBlog = () => {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold text-indigo-600">Daily Tools to Boost Your Productivity</h1>
      <p className="text-gray-700">
        Use these practical everyday tools to simplify your routine and get more done.
      </p>
      <ul className="list-disc list-inside space-y-2 text-indigo-600">
        <li><Link to="/daily-tools">Age Calculator</Link></li>
        <li><Link to="/daily-tools">Loan EMI Calculator</Link></li>
        <li><Link to="/daily-tools">Screen Recorder</Link></li>
        <li><Link to="/daily-tools">Unit Converter</Link></li>
        <li><Link to="/daily-tools">Notepad</Link></li>
      </ul>
      <p className="text-sm text-gray-500">Find them at <Link to="/daily-tools" className="underline">Daily Tools</Link>.</p>
    </main>
  );
};

export default DailyToolsBlog;
