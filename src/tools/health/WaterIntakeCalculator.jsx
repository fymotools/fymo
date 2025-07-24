import React, { useState } from 'react';

const WaterIntakeCalculator = () => {
  const [weight, setWeight] = useState('');
  const [waterIntake, setWaterIntake] = useState(null);

  const calculate = () => {
    if (weight) {
      const intake = (weight * 0.033).toFixed(2);
      setWaterIntake(intake);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-green-600">Water Intake Calculator</h2>
      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <button
        onClick={calculate}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Calculate
      </button>
      {waterIntake && (
        <p className="mt-4 text-lg">
          You should drink <span className="font-bold">{waterIntake} liters</span> of water per day.
        </p>
      )}
    </div>
  );
};

export default WaterIntakeCalculator;
