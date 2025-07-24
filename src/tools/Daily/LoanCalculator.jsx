import React, { useState } from 'react';

const LoanCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [result, setResult] = useState(null);

  const calculateEMI = () => {
    const P = parseFloat(principal);
    const R = parseFloat(rate) / 12 / 100;
    const N = parseFloat(tenure) * 12;

    if (isNaN(P) || isNaN(R) || isNaN(N)) return;

    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    const totalPayment = emi * N;
    const totalInterest = totalPayment - P;

    setResult({
      emi: emi.toFixed(2),
      interest: totalInterest.toFixed(2),
      total: totalPayment.toFixed(2),
    });
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Loan EMI Calculator</h2>

      <div className="space-y-3">
        <input
          type="number"
          placeholder="Loan Amount (PKR)"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          placeholder="Annual Interest Rate (%)"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          placeholder="Tenure (in years)"
          value={tenure}
          onChange={(e) => setTenure(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button
          onClick={calculateEMI}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Calculate EMI
        </button>
      </div>

      {result && (
        <div className="mt-4 space-y-2 text-lg">
          <div><strong>Monthly EMI:</strong> PKR {result.emi}</div>
          <div><strong>Total Interest:</strong> PKR {result.interest}</div>
          <div><strong>Total Payment:</strong> PKR {result.total}</div>
        </div>
      )}
    </div>
  );
};

export default LoanCalculator;
