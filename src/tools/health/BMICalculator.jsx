import React, { useState } from 'react';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-green-600">BMI Calculator</h2>
      <div className="space-y-4">
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          onClick={calculateBMI}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Calculate
        </button>
        {bmi && (
          <p className="mt-4 text-lg">
            Your BMI is: <span className="font-bold">{bmi}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default BMICalculator;
