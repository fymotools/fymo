import React from 'react';

const Donate = () => {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 text-center space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">Support Fymo Tools ❤️</h1>
      <p className="text-gray-700">
        Help us keep all tools free, fast, and ad-free forever. Your support means a lot!
      </p>

      <div className="bg-white shadow-md rounded-xl p-6 space-y-4 border">
        <h2 className="text-xl font-semibold text-gray-800">Donate via JazzCash</h2>
        <p className="text-gray-600">Number: <strong className="text-blue-700">+92 3027129449</strong></p>

        <h2 className="text-xl font-semibold text-gray-800 pt-4">Donate via Easypaisa</h2>
        <p className="text-gray-600">Number: <strong className="text-blue-700">923448292001</strong></p>
      </div>

      <div className="pt-4 space-y-2">
        <p className="text-sm text-gray-600">Email us: <strong>fymotools@gmail.com</strong></p>
        <p className="text-sm text-gray-600">WhatsApp: <strong>+92 3027129449</strong></p>
      </div>

      <p className="text-xs text-gray-400 mt-4">Thank you for supporting open tools for everyone! 🌍</p>
    </main>
  );
};

export default Donate;
