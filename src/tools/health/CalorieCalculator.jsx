import React, { useState } from 'react';

const CalorieCalculator = () => {
  const [bmr, setBmr] = useState('');
  const [activity, setActivity] = useState(1.2);
  const [calories, setCalories] = useState(null);

  const calculate = () => {
    const result = (bmr * activity).toFixed(2);
    setCalories(result);
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-green-600">Calorie Needs Calculator</h2>
      <input
        type="number"
        placeholder="BMR value"
        value={bmr}
        onChange={(e) => setBmr(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <select value={activity} onChange={(e) => setActivity(e.target.value)} className="w-full p-2 border rounded mb-4">
        <option value="1.2">Sedentary</option>
        <option value="1.375">Light Activity</option>
        <option value="1.55">Moderate Activity</option>
        <option value="1.725">Very Active</option>
      </select>
      <button
        onClick={calculate}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Calculate
      </button>
      {calories && (
        <p className="mt-4 text-lg">
          You need approximately <span className="font-bold">{calories} kcal</span> per day.
        </p>
      )}
    </div>
  );
};

export default CalorieCalculator;
