import React, { useState } from 'react';

const AdvancedTaxCalculator = () => {
  const [income, setIncome] = useState('');
  const [deductions, setDeductions] = useState('');
  const [tax, setTax] = useState(null);

  const calculateAdvancedTax = () => {
    const netIncome = parseFloat(income) - parseFloat(deductions);
    let taxAmount = 0;

    if (netIncome <= 600000) taxAmount = 0;
    else if (netIncome <= 1200000) taxAmount = (netIncome - 600000) * 0.05;
    else if (netIncome <= 1800000) taxAmount = (netIncome - 1200000) * 0.10 + 30000;
    else taxAmount = (netIncome - 1800000) * 0.15 + 90000;

    setTax(taxAmount);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow rounded-lg space-y-4">
      <h2 className="text-xl font-bold text-blue-600">Advanced Tax Calculator</h2>
      <input
        type="number"
        placeholder="Total Income"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
        className="w-full border px-3 py-2 rounded"
      />
      <input
        type="number"
        placeholder="Deductions"
        value={deductions}
        onChange={(e) => setDeductions(e.target.value)}
        className="w-full border px-3 py-2 rounded"
      />
      <button onClick={calculateAdvancedTax} className="bg-blue-600 text-white px-4 py-2 rounded">
        Calculate
      </button>
      {tax !== null && (
        <p className="text-green-600 font-semibold">Net Tax Payable: Rs. {tax.toFixed(2)}</p>
      )}
    </div>
  );
};

export default AdvancedTaxCalculator;
