import React from 'react';
import taxImage from '../assets/blogs/tax-tools.jpg'; // add a related image to your assets

const TaxToolsBlog = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">💼 Master Your Finances with Our Powerful Tax Tools</h1>
      <img src={taxImage} alt="Tax tools" className="rounded-xl shadow-md mb-6 w-full" />
      
      <p className="mb-4 text-gray-800 text-lg">
        Managing taxes can be confusing and time-consuming — that's why we built a set of 5 easy-to-use tax tools designed to help individuals and businesses make better decisions and save time.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-2">🔢 1. Income Tax Calculator</h2>
      <p className="mb-4 text-gray-700">
        Quickly calculate your annual income tax based on your salary or business income. Ideal for freelancers, salaried employees, and business owners.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-2">💰 2. GST Calculator</h2>
      <p className="mb-4 text-gray-700">
        Calculate Goods & Services Tax (GST) in seconds! Enter your amount and choose the GST percentage to get inclusive and exclusive tax breakdowns.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-2">🧾 3. Sales Tax Calculator</h2>
      <p className="mb-4 text-gray-700">
        Whether you're shopping or running a store, our Sales Tax Calculator gives you precise total amounts with or without tax included.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-2">🏠 4. Property Tax Estimator</h2>
      <p className="mb-4 text-gray-700">
        Estimate yearly property tax on your land or house by entering value and location. Useful for homeowners, landlords, and investors.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-2">📊 5. Advanced Tax Calculator</h2>
      <p className="mb-6 text-gray-700">
        A detailed tool that lets you factor in deductions, exemptions, and multiple income sources to calculate exact tax liability.
      </p>

      <div className="bg-blue-100 p-4 rounded-xl shadow">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">Why Use Our Tax Tools?</h3>
        <ul className="list-disc pl-6 text-gray-800">
          <li>✅ Completely free and easy to use</li>
          <li>✅ Works on desktop and mobile</li>
          <li>✅ Accurate and up-to-date calculations</li>
          <li>✅ No login or registration required</li>
        </ul>
      </div>

      <p className="mt-6 text-gray-700">
        Whether you're preparing for tax season or just want to stay on top of your finances, our tools are here to help. Try them out today and take control of your money!
      </p>
    </div>
  );
};

export default TaxToolsBlog;
