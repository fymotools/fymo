import React from 'react';
import { Link } from 'react-router-dom';

const healthTools = [
  { name: 'BMI Calculator', path: '/health-tools/bmi' },
  { name: 'BMR Calculator', path: '/health-tools/bmr' },
  { name: 'Ideal Weight Calculator', path: '/health-tools/ideal-weight' },
  { name: 'Water Intake Calculator', path: '/health-tools/water-intake' },
  { name: 'Calorie Calculator', path: '/health-tools/calorie' },
];

const HealthTools = () => {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold text-green-600">Health Tools</h1>
      <p className="text-gray-700">Choose a tool to calculate your health metrics:</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {healthTools.map((tool, index) => (
          <Link
            key={index}
            to={tool.path}
            className="block border rounded-xl p-4 shadow hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold text-green-700">{tool.name}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default HealthTools;
