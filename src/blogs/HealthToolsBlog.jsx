import React from 'react';
import healthImage from '../assets/blogs/health-tools.jpg'; // Use an image related to health tools

const HealthToolsBlog = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-4">🧘‍♂️ Achieve Your Health Goals with Our Free Health Tools</h1>
      <img src={healthImage} alt="Health tools" className="rounded-xl shadow-md mb-6 w-full" />
      
      <p className="mb-4 text-gray-800 text-lg">
        Your health is your wealth — and we’ve created 5 simple, powerful tools to help you live better every day. Whether you're managing your weight, diet, or daily hydration, these tools make health tracking easy.
      </p>

      <h2 className="text-2xl font-semibold text-green-600 mb-2">⚖️ 1. BMI Calculator</h2>
      <p className="mb-4 text-gray-700">
        Check if you're underweight, normal, or overweight using our Body Mass Index (BMI) calculator. Just enter your height and weight for instant results.
      </p>

      <h2 className="text-2xl font-semibold text-green-600 mb-2">🔥 2. BMR Calculator</h2>
      <p className="mb-4 text-gray-700">
        Find out how many calories your body burns at rest. Our BMR Calculator helps you plan calorie intake for weight loss or muscle gain.
      </p>

      <h2 className="text-2xl font-semibold text-green-600 mb-2">🏋️‍♀️ 3. Ideal Weight Calculator</h2>
      <p className="mb-4 text-gray-700">
        Discover your ideal body weight based on age, gender, and height. Great for setting health or fitness goals.
      </p>

      <h2 className="text-2xl font-semibold text-green-600 mb-2">💧 4. Water Intake Calculator</h2>
      <p className="mb-4 text-gray-700">
        Know how much water your body needs each day. This tool calculates ideal hydration based on your weight and activity level.
      </p>

      <h2 className="text-2xl font-semibold text-green-600 mb-2">🍽 5. Calorie Calculator</h2>
      <p className="mb-6 text-gray-700">
        Plan your meals better with our calorie calculator. It helps you estimate how many calories you need daily based on your activity and fitness goals.
      </p>

      <div className="bg-green-100 p-4 rounded-xl shadow">
        <h3 className="text-xl font-semibold text-green-700 mb-2">Why Use Our Health Tools?</h3>
        <ul className="list-disc pl-6 text-gray-800">
          <li>✅ Quick and easy health checks</li>
          <li>✅ Free to use anytime, anywhere</li>
          <li>✅ Useful for fitness planning</li>
          <li>✅ No app or login needed</li>
        </ul>
      </div>

      <p className="mt-6 text-gray-700">
        Whether you’re starting a fitness journey or just want to stay healthy, our tools will support you every step of the way. Start tracking your health today!
      </p>
    </div>
  );
};

export default HealthToolsBlog;
