// src/components/government/homepage/Announcement.js
"use client";

import React from "react";
import Link from "next/link";

const Announcement = () => {
  return (
    <section className="bg-yellow-100 p-4 mb-6 rounded">
      <h2 className="font-bold text-lg">General Election 2025</h2>
      <p>
        The LSC General Election takes place February 2025. Visit our{" "}
        <Link href="/elections" className="text-orange-500 hover:underline">
          elections
        </Link>{" "}
        page, join the{" "}
        <Link
          href="https://discord.gg/ntN69q9HfK"
          className="text-orange-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          discord
        </Link>{" "}
        and stay tuned for more news!
      </p>
    </section>
  );
};

export default Announcement;
