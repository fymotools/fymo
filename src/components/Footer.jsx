import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-10 py-6 border-t">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6 text-sm">
        
        <div>
          <h4 className="font-semibold mb-2">Fymo Tools</h4>
          <p>All-in-one free online tools platform built with ❤️</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link to="/blog" className="hover:text-blue-600">Blog</Link></li>
            <li><Link to="/donate" className="hover:text-blue-600">Donate</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p>Email: fymotools@gmail.com</p>
          <p>WhatsApp: +92 3027129449</p>
        </div>
      </div>

      <div className="text-center mt-6 text-xs text-gray-500">
        © {new Date().getFullYear()} Fymo Tools. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
