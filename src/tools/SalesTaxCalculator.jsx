import React, { useState } from 'react';

const SalesTaxCalculator = () => {
  const [price, setPrice] = useState('');
  const [rate, setRate] = useState('');
  const [salesTax, setSalesTax] = useState(null);

  const calculateSalesTax = () => {
    const tax = (parseFloat(price) * parseFloat(rate)) / 100;
    setSalesTax(tax);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow rounded-lg space-y-4">
      <h2 className="text-xl font-bold text-blue-600">Sales Tax Calculator</h2>
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full border px-3 py-2 rounded"
      />
      <input
        type="number"
        placeholder="Tax Rate (%)"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
        className="w-full border px-3 py-2 rounded"
      />
      <button onClick={calculateSalesTax} className="bg-blue-600 text-white px-4 py-2 rounded">
        Calculate
      </button>
      {salesTax !== null && (
        <p className="text-green-600 font-semibold">Sales Tax: Rs. {salesTax.toFixed(2)}</p>
      )}
    </div>
  );
};

export default SalesTaxCalculator;
