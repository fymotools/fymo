import React, { useState } from 'react';

const BMRCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [bmr, setBmr] = useState(null);

  const calculateBMR = () => {
    let result = 0;
    if (gender === 'male') {
      result = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
    } else {
      result = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
    }
    setBmr(result.toFixed(2));
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-green-600">BMR Calculator</h2>
      <div className="space-y-4">
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input type="number" placeholder="Weight (kg)" value={weight} onChange={(e) => setWeight(e.target.value)} className="w-full p-2 border rounded" />
        <input type="number" placeholder="Height (cm)" value={height} onChange={(e) => setHeight(e.target.value)} className="w-full p-2 border rounded" />
        <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} className="w-full p-2 border rounded" />
        <button onClick={calculateBMR} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Calculate</button>
        {bmr && <p className="mt-4 text-lg">Your BMR is: <span className="font-bold">{bmr} kcal/day</span></p>}
      </div>
    </div>
  );
};

export default BMRCalculator;
