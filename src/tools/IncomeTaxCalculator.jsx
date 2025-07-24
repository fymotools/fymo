import React, { useState } from 'react';

const IncomeTaxCalculator = () => {
  const [income, setIncome] = useState('');
  const [tax, setTax] = useState(null);

  const calculateTax = () => {
    let taxAmount = 0;
    const incomeNum = parseFloat(income);

    if (incomeNum <= 600000) taxAmount = 0;
    else if (incomeNum <= 1200000) taxAmount = (incomeNum - 600000) * 0.05;
    else if (incomeNum <= 1800000) taxAmount = (incomeNum - 1200000) * 0.10 + 30000;
    else taxAmount = (incomeNum - 1800000) * 0.15 + 90000;

    setTax(taxAmount);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow rounded-lg space-y-4">
      <h2 className="text-xl font-bold text-blue-600">Income Tax Calculator</h2>
      <input
        type="number"
        placeholder="Enter your annual income"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
        className="w-full border px-3 py-2 rounded"
      />
      <button onClick={calculateTax} className="bg-blue-600 text-white px-4 py-2 rounded">
        Calculate
      </button>
      {tax !== null && (
        <p className="text-green-600 font-semibold">Your estimated tax: Rs. {tax.toFixed(2)}</p>
      )}
    </div>
  );
};

export default IncomeTaxCalculator;
