// src/components/global/Footer.js
"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-lassonde-grey text-white py-12">
      <div className="container mx-auto px-6">
        {/* Main Grid */}
        <div className="grid lg:grid-cols-6 gap-10">
          {/* Logo (optional) */}
          <div className="flex items-start">
            <Link href="/">
              <img
                src="/logos/logo 3 (ww)@3x-.png"
                alt="Lassonde Congress Logo"
                className="max-w-[120px]"
              />
            </Link>
          </div>

          {/* Navigation + Socials */}
          <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Follow Us */}
            <div>
              <h3 className="font-bold mb-4">Follow Us</h3>
              <div className="flex flex-col space-y-3">
                <a
                  href="https://www.instagram.com/lassondecongress/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:underline"
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
                  className="flex items-center space-x-2 hover:underline"
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
                  className="flex items-center space-x-2 hover:underline"
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
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold mb-4">Contact Us</h3>
              <p className="mb-2 text-gray-300 text-sm">
                Reach out on Discord, Instagram, or email:
              </p>
              <a
                href="mailto:info@lascongress.ca"
                className="hover:underline text-yellow-400"
              >
                info@lascongress.ca
              </a>
            </div>

            {/* Quick Links (optional filler for balance) */}
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><Link href="/about" className="hover:underline">About Us</Link></li>
                <li><Link href="/government/resources/services" className="hover:underline">Services</Link></li>
                <li><Link href="/government/resources/community" className="hover:underline">Community</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-600" />

        {/* Bottom bar */}
        <div className="text-center text-sm text-gray-400">
          <p>© Lassonde Student Congress 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
