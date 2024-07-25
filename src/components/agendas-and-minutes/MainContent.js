// src/components/agendas-and-minutes/MainContent.js
"use client";

import React from "react";
import Section from "./Section";

const MainContent = () => {
  const commonsCards = [
    {
      date: "11",
      year: "2024",
      day: "Thursday 11 July 2024",
      description: "Latest House of Commons sitting",
      note: "You can also browse/find House of Commons Hansard content using the links below:",
    },
  ];

  const lordsCards = [
    {
      date: "10",
      year: "2024",
      day: "Wednesday 10 July 2024",
      description: "Latest House of Lords sitting",
      note: "You can also browse/find House of Lords Hansard content using the links below:",
    },
  ];

  const commonsLinks = [
    {
      title: "Browse sittings",
      description:
        "Browse the Commons sittings that have been recorded in Hansard.",
      href: "#",
      icon: "/images/batman.png",
    },
    {
      title: "Find debates",
      description: "Find House of Commons debates by keyword and date.",
      href: "#",
      icon: "/images/batman.png",
    },
    {
      title: "Find divisions",
      description:
        "Find House of Commons divisions (or votes) by keyword and date.",
      href: "#",
      icon: "/images/batman.png",
    },
    {
      title: "Find MPs",
      description:
        "Find current and former Commons MPs and their Hansard contributions.",
      href: "#",
      icon: "/images/batman.png",
    },
  ];

  const lordsLinks = [
    {
      title: "Browse sittings",
      description:
        "Browse the Lords sittings that have been recorded in Hansard.",
      href: "#",
      icon: "/images/batman.png",
    },
    {
      title: "Find debates",
      description: "Find House of Lords debates by keyword and date.",
      href: "#",
      icon: "/images/batman.png",
    },
    {
      title: "Find divisions",
      description:
        "Find House of Lords divisions (or votes) by keyword and date.",
      href: "#",
      icon: "/images/batman.png",
    },
    {
      title: "Find Lords",
      description:
        "Find current and former Lords Members and their Hansard contributions.",
      href: "#",
      icon: "/images/batman.png",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Section
          title="House Agendas & Minutes"
          imgSrc="/votes/ironwar.png"
          description="The latest House sitting recorded in Hansard is:"
          cards={commonsCards}
          links={commonsLinks}
        />
        <Section
          title="Senate Agendas & Minutes"
          imgSrc="/votes/carwar.png"
          description="The latest House sitting recorded in Hansard is:"
          cards={lordsCards}
          links={lordsLinks}
        />
      </div>
    </div>
  );
};

export default MainContent;
