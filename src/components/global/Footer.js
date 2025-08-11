// src/components/global/Footer.js
"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-lassonde-grey text-white p-8">
      <div className="container px-9 mx-0 max-w-xl">
        <h3 className="font-bold mb-4">Follow Us</h3>
        <div className="flex flex-wrap md:flex-row md:space-x-16 mb-4">
          <a
            href="https://www.instagram.com/lassondecongress/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:underline mb-2 md:mb-0"
          >
            <img
              src="/social/instagram.png"
              alt="Instagram"
              className="h-6"
              style={{ filter: "invert(1) brightness(2)" }}
            />
            <span>Instagram</span>
          </a>

          <a
            href="https://discord.gg/ntN69q9HfK"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:underline mb-2 md:mb-0"
          >
            <img
              src="/social/discord.png"
              alt="Discord"
              className="h-4"
            />
            <span>Discord</span>
          </a>

          <a
            href="https://www.reddit.com/user/LassondeCongress/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:underline mb-2 md:mb-0"
          >
            <img
              src="/social/reddit.png"
              alt="Reddit"
              className="h-6"
              style={{ filter: "invert(1) brightness(2)" }}
            />
            <span>Reddit</span>
          </a>
        </div>

        <p className="mb-1">Contact us on Discord, Instagram, or email:</p>
        <a
          href="mailto:info@lascongress.ca"
          className="hover:underline"
        >
          info@lascongress.ca
        </a>

        <div className="border-t border-neutral-600 pt-4 mt-8 text-center">
          <p>© Lassonde Student Congress 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
