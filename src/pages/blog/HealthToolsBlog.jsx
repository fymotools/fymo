import React from 'react';
import { Link } from 'react-router-dom';

const HealthToolsBlog = () => {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold text-green-700">Stay Fit with These Health Calculators</h1>
      <p className="text-gray-700">
        Your health matters. Fymo Tools provides essential calculators to track your health metrics and stay in shape.
      </p>
      <ul className="list-disc list-inside space-y-2 text-green-600">
        <li><Link to="/health-tools">BMI Calculator</Link></li>
        <li><Link to="/health-tools">BMR Calculator</Link></li>
        <li><Link to="/health-tools">Ideal Weight Calculator</Link></li>
        <li><Link to="/health-tools">Water Intake Calculator</Link></li>
        <li><Link to="/health-tools">Calorie Calculator</Link></li>
      </ul>
      <p className="text-sm text-gray-500">Start tracking on our <Link to="/health-tools" className="underline">Health Tools</Link> page.</p>
    </main>
  );
};

export default HealthToolsBlog;
