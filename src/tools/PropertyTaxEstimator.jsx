import React, { useState } from 'react';

const PropertyTaxEstimator = () => {
  const [value, setValue] = useState('');
  const [rate, setRate] = useState('');
  const [tax, setTax] = useState(null);

  const calculatePropertyTax = () => {
    const taxAmt = (parseFloat(value) * parseFloat(rate)) / 100;
    setTax(taxAmt);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow rounded-lg space-y-4">
      <h2 className="text-xl font-bold text-blue-600">Property Tax Estimator</h2>
      <input
        type="number"
        placeholder="Property Value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full border px-3 py-2 rounded"
      />
      <input
        type="number"
        placeholder="Tax Rate (%)"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
        className="w-full border px-3 py-2 rounded"
      />
      <button onClick={calculatePropertyTax} className="bg-blue-600 text-white px-4 py-2 rounded">
        Estimate
      </button>
      {tax !== null && (
        <p className="text-green-600 font-semibold">Estimated Property Tax: Rs. {tax.toFixed(2)}</p>
      )}
    </div>
  );
};

export default PropertyTaxEstimator;
