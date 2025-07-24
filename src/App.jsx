import React from 'react';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<div className="p-4 text-xl">Welcome to Fymo Tools</div>} />
    </Routes>
  );
};

export default App;
