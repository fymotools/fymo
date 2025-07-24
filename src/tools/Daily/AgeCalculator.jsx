import React, { useState } from 'react';

const AgeCalculator = () => {
  const [dob, setDob] = useState('');
  const [ageResult, setAgeResult] = useState(null);

  const calculateAge = () => {
    if (!dob) return;

    const birthDate = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAgeResult({ years, months, days });
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Age Calculator</h2>
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        className="border p-2 rounded mb-4 block"
      />
      <button
        onClick={calculateAge}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Calculate Age
      </button>

      {ageResult && (
        <div className="mt-4 text-lg">
          You are <span className="font-semibold">{ageResult.years}</span> years,{' '}
          <span className="font-semibold">{ageResult.months}</span> months, and{' '}
          <span className="font-semibold">{ageResult.days}</span> days old.
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;
