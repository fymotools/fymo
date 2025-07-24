import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Fymo Tools
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link to="/blog" className="text-gray-700 hover:text-blue-600">
            Blog
          </Link>
          <Link to="/donate" className="text-gray-700 hover:text-blue-600">
            Donate
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
