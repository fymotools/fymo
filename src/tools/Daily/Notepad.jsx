import React, { useState, useEffect } from 'react';

const Notepad = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    const savedNote = localStorage.getItem('fymo_notepad');
    if (savedNote) {
      setText(savedNote);
    }
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    localStorage.setItem('fymo_notepad', value);
  };

  const handleClear = () => {
    setText('');
    localStorage.removeItem('fymo_notepad');
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-purple-700">📝 Notepad</h2>
      <textarea
        className="w-full h-64 border rounded p-3 text-gray-800"
        value={text}
        onChange={handleChange}
        placeholder="Write your notes here... (autosaved)"
      ></textarea>
      <div className="mt-3">
        <button
          onClick={handleClear}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Clear Notes
        </button>
      </div>
    </div>
  );
};

export default Notepad;
