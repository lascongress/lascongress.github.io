// src/components/Footer.js
"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-lassonde-grey text-white p-8">
      <div className="container px-9 mx-auto grid lg:grid-cols-1 gap-8">
        <div>
          <h3 className="font-bold mb-2">Follow Us</h3>
          <div className="flex flex-wrap md:flex-row md:space-x-16 mb-4">
            {/* <a
              href="#"
              className="flex items-center space-x-2 hover:underline mb-2 md:mb-0"
            >
              <img src="/social/twitter.png" alt="Twitter" className="h-6" />
              <span>Twitter</span>
            </a> */}
            <a
              href="https://www.instagram.com/lassondecongress/"
              className="flex items-center space-x-2 hover:underline mb-2 md:mb-0"
            >
              <img
                src="/social/instagram.png"
                alt="Instagram"
                className="h-6"
              />
              <span>Instagram</span>
            </a>
            {/* <a
              href="#"
              className="flex items-center space-x-2 hover:underline mb-2 md:mb-0"
            >
              <img src="/social/facebook.png" alt="Facebook" className="h-6" />
              <span>Facebook</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 hover:underline mb-2 md:mb-0"
            >
              <img src="/social/youtube.png" alt="YouTube" className="h-6" />
              <span>YouTube</span>
            </a> */}
          </div>
          <div className="border-t border-neutral-600 pt-4 mt-4">
            <p>© Lassonde Student Council 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
