// src/components/spotlight/MainContent.js
"use client";

import React from "react";
import Section from "./Section";

const MainContent = () => {
  const latestNews = [
    {
      imageSrc: "/news/news1.png",
      title: "Bergeron Closed???",
      description: "Has the lack of funding eventually led to its closure?",
      date: "4 July 2024",
      link: "/government/spotlight/bergeron-closed",
    },
    {
      imageSrc: "/news/news2.png",
      title: "Strike on Lassonde",
      description: "How has the strike affected Lassonde students?",
      date: "24 May 2024",
      link: "/government/spotlight/strike-on-lassonde",
    },
    {
      imageSrc: "/news/news3.png",
      title: "Mental Health",
      description: "Taking care of your mental health!",
      date: "31 January 2024",
      link: "/government/spotlight/mental-health",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <Section
        title="Spotlight"
        description="The latest news across Lassonde."
        news={latestNews}
      />
    </div>
  );
};

export default MainContent;
