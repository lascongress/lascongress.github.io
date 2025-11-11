// src/components/landing/Announcement.js
"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const Announcement = () => {
  return (
    <section className="bg-yellow-400 p-10 rounded">
      <div className = "max-w-6xl mx-auto">
        <h2 className="font-bold text-lg mb-3">⚠ Attention - We Need Your Help!</h2>
        <p className = "mb-5">
          Money for Congress means money for you! Sign the levy petition and bridge the gap between ideas and reality.
        </p>
        <a
          href="https://yuconnect.yorku.ca/login_only?redirect=%2fLSC%2fsurvey%3fsurvey_uid%3d0cd16c4b-b05b-11f0-83db-0ed62a679e73%26feedback_event_id%3d%26content_type%3d%26content_type_id%3d"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex bg-lassonde-blue text-lassonde-yellow px-4 py-2 rounded hover:bg-lassonde-maroon transition"
        >
          Sign the Petition
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>

      </div>
      
    </section>
  );
};

export default Announcement;
