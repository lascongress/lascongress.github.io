// src/components/global/Footer.js
"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-lassonde-grey text-white p-8">
      <div className="container px-9 mx-auto grid lg:grid-cols-1 gap-8">
        <div>
          <h3 className="font-bold mb-4">Follow Us</h3>
          <div className="flex flex-wrap md:flex-row md:space-x-16 mb-4">
            <a
              href="https://www.instagram.com/lassondecongress/"
              className="flex items-center space-x-2 hover:underline mb-2 md:mb-0"
            >
              <img
                src="/social/instagram.png"
                alt="Instagram"
                className="h-6"
                style={{ filter: "invert(1) brightness(2)" }} // Apply filter to make it white
              />
              <span>Instagram</span>
            </a>
          </div>
          <div className="flex flex-wrap md:flex-row md:space-x-16 mb-4">
            <a
              href="https://discord.gg/ntN69q9HfK"
              className="flex items-center space-x-2 hover:underline mb-2 md:mb-0"
            >
              <img
                src="/social/discord.png"
                alt="Instagram"
                className="h-4"
                // style={{ filter: "invert(1) brightness(2)" }} // Apply filter to make it white
              />
              <span>Discord</span>
            </a>
          </div>
          <div className="flex flex-wrap md:flex-row md:space-x-16 mb-4">
            <a
              href="https://www.instagram.com/lassondecongress/"
              className="flex items-center space-x-2 hover:underline mb-2 md:mb-0"
            >
              <img
                src="/social/reddit.png"
                alt="Reddit"
                className="h-6"
                style={{ filter: "invert(1) brightness(2)" }} // Apply filter to make it white
              />
              <span>Reddit</span>
            </a>
          </div>
          {/* <h3 className="font-bold mb-2">Join Us By Reaching Out</h3>
          <div className="flex flex-wrap md:flex-row md:space-x-16 mb-4">
            <a
              href="https://www.instagram.com/lassondecongress/"
              className="flex items-center space-x-2 hover:underline mb-2 md:mb-0"
            >
              <img
                src="/social/instagram.png"
                alt="Instagram"
                className="h-6"
                style={{ filter: "invert(1) brightness(2)" }} // Apply filter to make it white
              />
              <span>Discord</span>
            </a>
          </div> */}
          <div className="border-t border-neutral-600 pt-4 mt-4">
            <p>© Lassonde Student Congress 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
