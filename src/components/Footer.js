// src/components/Footer.js
"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-lassonde-grey text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold mb-2">Follow Us</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="flex items-center space-x-2 hover:underline">
              <img src="/social/twitter.png" alt="" className="h-6" />
              <span>Twitter</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:underline">
              <img src="/social/instagram.png" alt="" className="h-6" />
              <span>Instagram</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:underline">
              <img src="/social/facebook.png" alt="" className="h-6" />
              <span>Facebook</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:underline">
              <img src="/social/youtube.png" alt="" className="h-6" />
              <span>YouTube</span>
            </a>
          </div>
          <div className="border-t border-gray-600 pt-4 mt-4">
            <p>© Lassonde Student Council 2024</p>
            <div className="flex justify-end"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
