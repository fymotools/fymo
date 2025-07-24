import React, { useState } from 'react';

const GSTCalculator = () => {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('');
  const [gst, setGst] = useState(null);

  const calculateGST = () => {
    const gstAmount = (parseFloat(amount) * parseFloat(rate)) / 100;
    setGst(gstAmount);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow rounded-lg space-y-4">
      <h2 className="text-xl font-bold text-blue-600">GST Calculator</h2>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full border px-3 py-2 rounded"
      />
      <input
        type="number"
        placeholder="GST Rate (%)"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
        className="w-full border px-3 py-2 rounded"
      />
      <button onClick={calculateGST} className="bg-blue-600 text-white px-4 py-2 rounded">
        Calculate
      </button>
      {gst !== null && (
        <p className="text-green-600 font-semibold">GST Amount: Rs. {gst.toFixed(2)}</p>
      )}
    </div>
  );
};

export default GSTCalculator;
