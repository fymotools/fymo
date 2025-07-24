import React from 'react';
import dailyToolsImage from '../assets/blogs/daily-tools.jpg'; // Add this image

const DailyToolsBlog = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">🧰 Essential Daily Utility Tools You Need!</h1>
      <img src={dailyToolsImage} alt="Daily utility tools" className="rounded-xl shadow-md mb-6 w-full" />

      <p className="mb-4 text-gray-800 text-lg">
        Fymo-Tool provides free and reliable tools to solve your everyday needs. From age calculation to screen recording, these tools are made for speed, simplicity, and accuracy — right in your browser.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-2">🎂 1. Age Calculator</h2>
      <p className="mb-4 text-gray-700">
        Calculate your exact age in years, months, and days. Useful for forms, birthdays, or fun facts!
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-2">📊 2. Loan EMI Calculator</h2>
      <p className="mb-4 text-gray-700">
        Know your monthly EMI before taking any loan. Just enter the loan amount, interest rate, and time period.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-2">📹 3. Screen Recorder</h2>
      <p className="mb-4 text-gray-700">
        Record your screen with a single click — great for tutorials, presentations, or quick demos.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-2">🔁 4. Unit Converter</h2>
      <p className="mb-4 text-gray-700">
        Convert between units of length, weight, temperature, and more. Ideal for students and professionals alike.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-2">🗒️ 5. Notepad (Local Storage)</h2>
      <p className="mb-6 text-gray-700">
        A simple notepad tool that saves your notes directly in your browser — no logins, no ads.
      </p>

      <div className="bg-blue-100 p-4 rounded-xl shadow">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">🔧 Why Use Our Daily Tools?</h3>
        <ul className="list-disc pl-6 text-gray-800">
          <li>✅ Fast, lightweight, and free</li>
          <li>✅ Works offline (some tools)</li>
          <li>✅ No account needed</li>
          <li>✅ Helps in studies, work, and daily tasks</li>
        </ul>
      </div>

      <p className="mt-6 text-gray-700">
        Use these free daily tools on your mobile or desktop — everything is just a click away. Powered by Fymo Tools.
      </p>
    </div>
  );
};

export default DailyToolsBlog;
