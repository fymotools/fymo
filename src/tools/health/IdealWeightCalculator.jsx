import React, { useState } from 'react';

const IdealWeightCalculator = () => {
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('male');
  const [idealWeight, setIdealWeight] = useState(null);

  const calculate = () => {
    let result = 0;
    if (gender === 'male') {
      result = 50 + 0.91 * (height - 152.4);
    } else {
      result = 45.5 + 0.91 * (height - 152.4);
    }
    setIdealWeight(result.toFixed(2));
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-green-600">Ideal Weight Calculator</h2>
      <div className="space-y-4">
        <select value={gender} onChange={(e) => setGender(e.target.value)} className="w-full p-2 border rounded">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input type="number" placeholder="Height (cm)" value={height} onChange={(e) => setHeight(e.target.value)} className="w-full p-2 border rounded" />
        <button onClick={calculate} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Calculate</button>
        {idealWeight && <p className="mt-4 text-lg">Ideal Weight: <span className="font-bold">{idealWeight} kg</span></p>}
      </div>
    </div>
  );
};

export default IdealWeightCalculator;
