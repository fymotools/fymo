import React, { useState } from 'react';

const units = {
  length: {
    meter: 1,
    kilometer: 1000,
    centimeter: 0.01,
    mile: 1609.34,
    inch: 0.0254,
  },
  weight: {
    gram: 1,
    kilogram: 1000,
    pound: 453.592,
    ounce: 28.3495,
  },
  temperature: {} // handled separately
};

const UnitConverter = () => {
  const [category, setCategory] = useState('length');
  const [fromUnit, setFromUnit] = useState('meter');
  const [toUnit, setToUnit] = useState('kilometer');
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const convertTemperature = (value, from, to) => {
    value = parseFloat(value);
    if (from === to) return value;
    if (from === 'celsius') {
      return to === 'fahrenheit' ? (value * 9) / 5 + 32 : value + 273.15;
    } else if (from === 'fahrenheit') {
      return to === 'celsius'
        ? ((value - 32) * 5) / 9
        : ((value - 32) * 5) / 9 + 273.15;
    } else {
      return to === 'celsius'
        ? value - 273.15
        : ((value - 273.15) * 9) / 5 + 32;
    }
  };

  const handleConvert = () => {
    let value = parseFloat(inputValue);
    if (isNaN(value)) return;

    if (category === 'temperature') {
      const temp = convertTemperature(value, fromUnit, toUnit);
      setResult(temp.toFixed(2));
    } else {
      const baseValue = value * units[category][fromUnit];
      const converted = baseValue / units[category][toUnit];
      setResult(converted.toFixed(4));
    }
  };

  const unitOptions =
    category === 'temperature'
      ? ['celsius', 'fahrenheit', 'kelvin']
      : Object.keys(units[category]);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Unit Converter</h2>

      <select
        className="border p-2 rounded w-full mb-3"
        value={category}
        onChange={(e) => {
          const selected = e.target.value;
          setCategory(selected);
          const defaults = {
            length: ['meter', 'kilometer'],
            weight: ['gram', 'kilogram'],
            temperature: ['celsius', 'fahrenheit'],
          };
          setFromUnit(defaults[selected][0]);
          setToUnit(defaults[selected][1]);
        }}
      >
        <option value="length">Length</option>
        <option value="weight">Weight</option>
        <option value="temperature">Temperature</option>
      </select>

      <input
        type="number"
        className="border p-2 rounded w-full mb-3"
        placeholder="Enter value"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <div className="flex space-x-3 mb-3">
        <select
          className="border p-2 rounded w-full"
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value)}
        >
          {unitOptions.map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>

        <select
          className="border p-2 rounded w-full"
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value)}
        >
          {unitOptions.map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={handleConvert}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Convert
      </button>

      {result && (
        <div className="mt-4 text-lg font-semibold text-green-700">
          Result: {result} {toUnit}
        </div>
      )}
    </div>
  );
};

export default UnitConverter;
