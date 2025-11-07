// src/components/congress/homepage/Homepage.js
"use client";

import React from "react";
import Link from "next/link";
import Announcement from "./Announcement";
import { ArrowRight } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { useState } from 'react';


const QuickLinkCards = () => {
  return (
    <div className="max-w-7xl mx-auto py-6">
      <div className="grid grid-cols-2 gap-6">
        {quickLinks.map((link, index) => {
          const CardContent = (
            <div className="group flex flex-col relative overflow-hidden w-full min-h-60">
              <img
                src={link.imageSrc}
                alt={link.title}
                className="w-full aspect-[4/3] object-cover mb-4"
              />
              <div className="flex justify-between items-center py-2">
                <h3 className="font-semibold text-lg text-lassonde-grey">
                  {link.title}
                </h3>
                <ArrowRight className="ml-2 h-8 w-8 text-lassonde-grey" />
              </div>
              {/* Underline animation */}
              <span className="absolute left-0 -bottom-0 h-1 w-0 bg-lassonde-teal transition-all duration-300 group-hover:w-full"></span>
            </div>
          );

          return link.external ? (
            <a
              key={index}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {CardContent}
            </a>
          ) : (
            <Link key={index} href={link.link}>
              {CardContent}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const quickLinks = [
  {
    imageSrc: "/images/congress/house-of-delegates.png",
    title: "House of Delegates",
    link: "/congress/house-of-delegates",
    external: false,
  },
  {
    imageSrc: "/images/congress/senate.png",
    title: "Senate",
    link: "/congress/senate",
    external: false,
  },
  {
    imageSrc: "/images/congress/committee.png",
    title: "Committees",
    link: "/congress/committees",
    external: false,
  },
  {
    imageSrc: "/images/congress/bills-and-resolutions.png",
    title: "Bills & Resolutions",
    link: "https://docs.google.com/spreadsheets/d/1G4J-osCqip0KijyExAd2JaJjEH1Fa5bZCdDGx7oTSrQ/edit?gid=0#gid=0",
    external: true,
  },
];

const Links = () => {
  return (
    <section>
      <h2 className="text-lg md:text-xl text-lassonde-grey font-bold mb-4">Quick Links</h2>
      <QuickLinkCards />
    </section>
  );
};

const linksByDate = {
  "July 3, 2024": {
    house: [
      { title: "Agenda & minutes", url: "https://docs.google.com/document/d/1wpKVjNl5KMPz9ke8z5nlb_aQfk9iBZGJyHOxm2d2lJw/edit?tab=t.0" },
      { title: "Documents", url: "https://drive.google.com/drive/folders/1VE_WfUXA36hAQ1_3T-gad2WugQw4jf9d" },
    ],
    senate: [
      
    ],
  },
  "July 29, 2024": {
    house: [
      { title: "Agenda & minutes", url: "https://docs.google.com/document/d/1Gy-fl8aIj05liL9OTHPyFoagLqIM607hvtW0b_rU9XM/edit?tab=t.0" },
      { title: "Documents", url: "https://drive.google.com/drive/folders/15B2F-Hb4-er0KKoRLchwLluewvVIasYh" },
    ],
    senate: [
      
    ],
  },
  "August 30, 2024": {
    house: [
      { title: "Agenda & minutes", url: "https://docs.google.com/document/d/1d2VAr0w16KI_w4FPDg_vYu6X1OoBKATnTKQHDcbISQs/edit?tab=t.0" },
      { title: "Documents", url: "https://drive.google.com/drive/folders/1qAKUxi7SPcF-BqKKHrKSzJDn6LG2Mc6_" },
    ],
    senate: [
      
    ],
  },
  "September 19, 2024": {
    house: [
      { title: "Agenda & minutes", url: "https://docs.google.com/document/d/1DLOxiPqGacAMBRjuFxQiVRpPOPLnbz4m7BsAOZ8tHw8/edit?tab=t.0" },
      { title: "Documents", url: "https://drive.google.com/drive/folders/1gbi85M7WfUUwb79X1s5zJ2FlqZC0URvQ" },
    ],
    senate: [
      
    ],
  },
  "October 21, 2024": {
    house: [
      { title: "Agenda & minutes", url: "https://docs.google.com/document/d/1lxaTnV9Y9dF2lpfITTXqdawURoDDQSn9qtuby3KVAf0/edit?tab=t.0" },
      { title: "Documents", url: "https://drive.google.com/drive/folders/10ZW3U1nDAVCe2j5twYXDpi73Awzr9JDJ" },
    ],
    senate: [
      
    ],
  },
  "November 14, 2024": {
    house: [
      { title: "Agenda & minutes", url: "https://docs.google.com/document/d/15J1LWF0ugFvARei6nwiZigjYRrD-RlnYA52UVQcjknM/edit?tab=t.0" },
      { title: "Documents", url: "https://drive.google.com/drive/folders/1o8VT8qwHS69hPNA0aegkMtk_uQ-BRXHa" },
    ],
    senate: [
      
    ],
  },
  "February 28, 2025": {
    house: [
      { title: "Agenda & minutes", url: "https://docs.google.com/document/d/10BYqjhIJlEKJdGh1aDhWdUwAK6NK5kYoQMQ0OMAuZFo/edit?tab=t.0" },
      { title: "Documents", url: "https://drive.google.com/drive/folders/1sNoAJnDRznnCmgGDq6RPTrSJVuVIZKUG" },
    ],
    senate: [
      
    ],
  },
  "March 17, 2025": {
    house: [
      { title: "Agenda & minutes", url: "https://docs.google.com/document/d/19FHolPhWC5NaS5T1_s_45FWaQXESvnq1C75f4MaM2NU/edit?tab=t.0" },
      { title: "Documents", url: "https://drive.google.com/drive/folders/1I3P9VUOZAlge5tqTGrGHyudwiL5FuMsD" },
    ],
    senate: [
      
    ],
  },
  "April 29, 2025": {
    house: [
      { title: "Agenda & minutes", url: "https://docs.google.com/document/d/1htnUpdgL4bGeb1dDvsl3qjQbTMi_2aAU9MT_EPsGEWQ/edit?tab=t.0" },
      { title: "Documents", url: "https://drive.google.com/drive/folders/18ECrOwmjLJCqQni14qkXX_KTqCVxMdLn" },
    ],
    senate: [
      
    ],
  },
  "July 7, 2024": {
    house: [
      
    ],
    senate: [
      { title: "Agenda & minutes", url: "https://docs.google.com/document/d/1LW_l2Cq_Qac-OPF2hMOxjSjLme3jrZVgGHIjdmEGmxM/edit?tab=t.0" },
      { title: "Documents", url: "https://drive.google.com/drive/folders/1iRoEAHvWNB5_LNrC4JV-xC6ZRypu_45v" },
    ],
  },
  "July 21, 2024": {
    house: [
      
    ],
    senate: [
      { title: "Agenda & minutes", url: "https://docs.google.com/document/d/1JApBFJY0WN10REXX3YV-cDqrkFtmtrhjuMUCTG2efyg/edit?tab=t.0" },
      { title: "Documents", url: "https://drive.google.com/drive/folders/1zVdO3c8luVtekRFpOpYUT7OqlI56_Kzu" },
    ],
  },
  "August 4, 2024": {
    house: [
      
    ],
    senate: [
      { title: "Agenda & minutes", url: "https://docs.google.com/document/d/1pYXL-17pJtvpK0KxeOJrMoMaKzs8v4XCtryQJDtztvw/edit?tab=t.0" },
      { title: "Documents", url: "https://drive.google.com/drive/folders/1NObfutbICfLsHgASLXn_UstyW1JEdlaV" },
    ],
  },
  "August 18, 2024": {
    house: [
      
    ],
    senate: [
      { title: "Agenda & minutes", url: "https://docs.google.com/document/d/1M-PdqYoqUw4PNDJh_uEXoVZIWvwH8x2IuiuQrvEGrJQ/edit?tab=t.0" },
      { title: "Documents", url: "https://drive.google.com/drive/folders/1ss4f19eOMFIK0UqnHtXwItuUOIimFKeZ" },
    ],
  },
  "September 1, 2024": {
    house: [
      
    ],
    senate: [
      { title: "Agenda & minutes", url: "https://docs.google.com/document/d/1lA7gShFFeuKUaYR_d3xtL8uG0jgsHrXxcUvDMi4B9H8/edit?tab=t.0" },
      { title: "Documents", url: "https://drive.google.com/drive/folders/1bb7QJZzPZuLCsAlKbOiYiGYIzI2VYjtV" },
    ],
  },
  "September 15, 2024": {
    house: [
      
    ],
    senate: [
      { title: "Agenda & minutes", url: "https://docs.google.com/document/d/1MMzlIx4GjVrU-sgjPPYFG9292bqVYtMFHVE5JBOmtYM/edit?tab=t.0" },
      { title: "Documents", url: "https://drive.google.com/drive/folders/1mM8oW9pfxmHBR7nkero_qmTEfZsaJTPk" },
    ],
  },
  "October 2, 2024": {
    house: [
      
    ],
    senate: [
      { title: "Agenda & minutes", url: "https://docs.google.com/document/d/1GcOvPctxo9hwWM2PrQKhpz43d4qpAe8XlEHHTcFTUAM/edit?tab=t.0" },
      { title: "Documents", url: "https://drive.google.com/drive/folders/1p0_u9kp-HuEke2qpKGRzlJWOqXXKMPPO" },
    ],
  },
  "October 30, 2024": {
    house: [
      
    ],
    senate: [
      { title: "Agenda & minutes", url: "https://docs.google.com/document/d/1NpsFkZASVbafKdJWAWzB4arD6wKYNMF6kNM63Irqin4/edit?tab=t.0" },
      { title: "Documents", url: "https://drive.google.com/drive/folders/11leM4vMuiP6hCPHa4fLKDbzsTLLu2EIv" },
    ],
  },
  "November 13, 2024": {
    house: [
      
    ],
    senate: [
      { title: "Agenda & minutes", url: "https://docs.google.com/document/d/1kOVoJYPSCMX5dgWrmR7CoBWpaKa4IawCPxUYKq7c4pc/edit?tab=t.0" },
      { title: "Documents", url: "https://drive.google.com/drive/folders/1V_jkyZn8thbByTdiy7JeEefoxrF6DvSG" },
    ],
  },
  "November 27, 2024": {
    house: [
      
    ],
    senate: [
      { title: "Agenda & minutes", url: "https://docs.google.com/document/d/1UPL-aUgPxgsniX_e_OLk0iELypT2kvxydwv6ZQrTKBo/edit?tab=t.0" },
      { title: "Documents", url: "https://drive.google.com/drive/folders/14IR2JsP8qkqXaqsPTSMRhjD20y8kuo5Y" },
    ],
  },
  "January 14, 2025": {
    house: [
      
    ],
    senate: [
      { title: "Agenda & minutes", url: "https://docs.google.com/document/d/1u7Z9rFj7Yce_aihCktpihXlHk5TYIe7TImAt-H54Hks/edit?tab=t.0" },
      { title: "Documents", url: "https://drive.google.com/drive/folders/18Sb7VhpJALK5w1XoGYjzlaX_TIUV-nJU" },
    ],
  },
  "January 28, 2025": {
    house: [
      
    ],
    senate: [
      { title: "Agenda & minutes", url: "https://docs.google.com/document/d/1bSGnR7Ss684NKxe79ai2mbXbwN2lvSzVBpjVUlH7wKI/edit?tab=t.0" },
      { title: "Documents", url: "https://drive.google.com/drive/folders/1FGqVhlbFwUAbQ3R5pjTQhuhsZbQp0Ob-" },
    ],
  },
  "February 11, 2025": {
    house: [
      
    ],
    senate: [
      { title: "Agenda & minutes", url: "https://docs.google.com/document/d/1aKkZosly5peSUWLX389t1bHlmp5W6re8Cbl7YHbbuTI/edit?tab=t.0" },
      { title: "Documents", url: "https://drive.google.com/drive/folders/1Qw08gjrmxNLrL78WxFyTWpdyvc1g4isu" },
    ],
  },
  "February 25, 2025": {
    house: [
      
    ],
    senate: [
      { title: "Agenda & minutes", url: "https://docs.google.com/document/d/1Q6r1h160XMhQ1Dbw8Cfb1aR4V7ljd6OutvnC-1SW7S4/edit?tab=t.0" },
      { title: "Documents", url: "https://drive.google.com/drive/folders/1nOLbJsBHLzE7dTBdWSuuK5Js38DGfqYC" },
    ],
  },
  "March 11, 2025": {
    house: [
      
    ],
    senate: [
      { title: "Agenda & minutes", url: "https://docs.google.com/document/d/1afPAxZB_s6fMDFjBuKbA4x18KlCNM-vgqZupwWprDH0/edit?tab=t.0" },
      { title: "Documents", url: "https://drive.google.com/drive/folders/1KOOUyOAAq35xG02cxiDSO4s7j_yL6ZJZ" },
    ],
  },
  "April 27, 2025": {
    house: [
      
    ],
    senate: [
      { title: "Agenda & minutes", url: "https://docs.google.com/document/d/1IduAj671lHE_dzINc7TaUkTTukElzzzjv2LiRqSXhm4/edit?tab=t.0" },
      { title: "Documents", url: "https://drive.google.com/drive/folders/19AZ912l8GvVqaaBjuCu9lWrxKEHf2ZD4" },
    ],
  },
};

const dates = Object.keys(linksByDate);

const PreviousMeetings = () => {
  const [selectedDate, setSelectedDate] = useState("April 27, 2025");
  const [selectedYear, setSelectedYear] = useState("2025");
  const [isOpen, setIsOpen] = useState(false);


  return (
    <section className="relative py-11 text-lassonde-grey px-5 lg:px-0">
      <div className="grid lg:grid-cols-10 gap-9">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-3 mb-5 relative">
          <h4 className="text-2xl mb-3">Previous sittings</h4>

          {/* Dropdown Button */}
          <button
            className="button button--link  text-xl flex items-center justify-between w-full border border-gray-300 rounded-md px-3 py-2 hover:bg-gray-50 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>{selectedDate}</span>
            <ChevronDown
              className={`ml-2 h-5 w-5 transition-transform ${isOpen ? "rotate-180" : "rotate-0"
                }`}
            />
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <ul className="absolute w-full mt-2 bg-white border border-gray-200 rounded-md z-10">
              {/* Year Selector with Arrows */}
              <li className="flex justify-between items-center px-4 py-2 border-b border-gray-200 bg-gray-50">
                <button
                  onClick={() => setSelectedYear((prev) => String(Number(prev) - 1))}
                  className="p-1 rounded-md hover:bg-gray-200 transition"
                >
                  ←
                </button>

                <span className="font-semibold text-gray-700">{selectedYear}</span>

                <button
                  onClick={() => setSelectedYear((prev) => String(Number(prev) + 1))}
                  className="p-1 rounded-md hover:bg-gray-200 transition"
                >
                  →
                </button>
              </li>

              {/* Filtered date list */}
              {dates
                .filter((date) => date.includes(selectedYear))
                .map((date) => (
                  <li key={date}>
                    <button
                      className={`w-full text-left px-4 py-2 hover:bg-lassonde-yellow/10 ${selectedDate === date ? "font-semibold text-lassonde-blue" : ""
                        }`}
                      onClick={() => {
                        setSelectedDate(date);
                        setIsOpen(false);
                      }}
                    >
                      {date}
                    </button>
                  </li>
                ))}

            </ul>
          )}
        </div>

        <div className="lg:col-span-7">
          <div className="flex flex-col mb-12">
            {selectedDate && linksByDate[selectedDate] ? (
              <>
                {linksByDate[selectedDate].house?.length > 0 && (
                  <>
                    <h3 className="text-xl my-3">House of Delegates</h3>
                    <ul className="divide-y divide-gray-200">
                      {linksByDate[selectedDate].house.map((link, index) => (
                        <li key={index} className="py-4">
                          <a
                            href={link.url}
                            className="flex justify-between items-center hover:text-lassonde-blue hover:underline"
                          >
                            <span>{link.title}</span>
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {linksByDate[selectedDate].senate?.length > 0 && (
                  <>
                    <h3 className="text-xl my-3">Senate</h3>
                    <ul className="divide-y divide-gray-200">
                      {linksByDate[selectedDate].senate.map((link, index) => (
                        <li key={index} className="py-4">
                          <a
                            href={link.url}
                            className="flex justify-between items-center hover:text-lassonde-blue hover:underline"
                          >
                            <span>{link.title}</span>
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </>

            ) : (
              <p className="text-gray-500 italic">Select a date to view resources</p>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

const UpcomingActivity = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-10 lg:gap-9">
        {/* Header */}
        <div className="relative col-span-auto lg:col-span-3 mb-5">
          <h2 className="mb-3 text-3xl font-bold text-lassonde-grey">
            Upcoming activity
          </h2>
        </div>

        {/* Activity Cards */}
        <div className="col-span-10 lg:col-span-7">
          {upcomingActivities.map((activity, index) => (
            <a
              key={index}
              href={activity.link}
              className={`group flex flex-row relative overflow-hidden mb-5 bg-white`}
            >
              {/* Left: Image + Date Overlay */}
              <div
                className={`w-1/5 md:w-2/5 relative flex flex-shrink-0 items-center justify-center text-white py-10 border-r border-gray-200 bg-${activity.color} `}
              >
                <div className={`flex flex-col items-center justify-center w-full`}>
                  <span className="text-xs md:text-base uppercase">
                    {activity.month}
                  </span>
                  <span className="text-3xl md:text-4xl">
                    {activity.date}
                  </span>
                </div>
              </div>

              {/* Right: Text Content */}
              <div className="flex flex-col flex-grow relative py-5 p-5 md:w-3/5 text-lassonde-grey">
                <h3 className="order-2 mb-3 font-semibold">{activity.chamber}</h3>

                <p className="order-1 text-sm mb-3">
                  <span className={`font-semibold inline-flex items-center text-${activity.color}`}>
                    {activity.type}
                  </span>
                  <span> | All day</span>
                </p>

                <p className="order-3 mb-3 hidden md:block">{activity.description}</p>

                {/* See Details */}
                <div className="order-4 hidden md:flex justify-end mt-auto">
                  <span className="flex items-center text-lassonde-blue hover:underline">
                    <span className="m-0">See details</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </div>

                {/* Hover underline animation */}
                <hr className="absolute bottom-0 left-0 w-0 h-1 border-0 block bg-lassonde-blue group-hover:w-full transition-all duration-150 ease-out" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const upcomingActivities = [
  // {
  //   date: "11",
  //   month: "October",
  //   chamber: "Delegates delegate",
  //   description: "Details of the Legislative Assembly sitting day on 11 October 2025.",
  //   type: "Sitting",
  //   color: "delegate-green",
  //   link: "/events/la-sittings/2025/14-october",
  // },
  // {
  //   date: "11",
  //   month: "October",
  //   chamber: "Senators senate",
  //   description: "Details of the Legislative Council sitting day on 11 October 2025.",
  //   type: "Sitting",
  //   color: "senate-red",
  //   link: "/events/lc-sittings/2025/14-october",
  // },
];


const ParliamentaryActivity = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const tabs = [
    { id: "upcoming", label: "Upcoming activity" },
    { id: "past", label: "Previous meetings" },
  ];

  return (
    <div className="max-w-7xl mx-auto py-6">
      {/* Tabs */}
      <div className="flex space-x-4 border-b border-lassonde-grey mb-6">

        <button
          className={` 
            relative px-4 py-2 text-lassonde-grey font-medium 
            after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-lassonde-blue after:transition-all after:duration-300
            ${activeTab === "upcoming"
              ? "border-b-2 border-lassonde-blue font-bold"
              : "after:w-0 hover:after:w-full"
            }`}
          onClick={() =>
            setActiveTab("upcoming")

          }
        >
          Upcoming activity
        </button>

        <button
          className={` 
            relative px-4 py-2 text-lassonde-grey font-medium
            after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-lassonde-blue after:transition-all after:duration-300
            ${activeTab === "past"
              ? "border-b-2 border-lassonde-blue font-bold"
              : "after:w-0 hover:after:w-full"
            }`}
          onClick={() => setActiveTab("past")}
        >
          Previous meetings
        </button>

      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === "upcoming" && (
          <div>
            <UpcomingActivity />
          </div>
        )}

        {activeTab === "past" && (
          <div>
            {/* Replace this with your real past meetings content */}
            <PreviousMeetings />
          </div>
        )}
      </div>
    </div>
  );
}

const resources = [
  {
    title: "Agenda & Minutes",
    link: "/congress/house-of-delegates",
    external: false,
  },
  {
    title: "Order Paper",
    link: "/congress/senate",
    external: false,
  },
  {
    title: "Questions & Responses",
    link: "/congress/committees",
    external: false,
  },
  {
    title: "Rules of Order",
    link: "/congress/committees",
    external: false,
  },
  {
    title: "Statistics",
    link: "/congress/committees",
    external: false,
  },
  {
    title: "Meeting Guide For Visitors",
    link: "/congress/committees",
    external: false,
  },
];

const Resources = () => {
  return (
    <div>
      <h2 className="text-lg md:text-xl text-lassonde-grey font-bold mb-4">Resources</h2>

      <div className="max-w-7xl mx-auto py-6">
        <div className="grid grid-cols-3 gap-6">
          {resources.map((link, index) => {
            const CardContent = (
              <div className="group flex flex-col relative overflow-hidden w-full min-h-60 bg-neutral-100 p-4">
                <div className="flex justify-between items-center py-2">
                  <h3 className="font-semibold text-lg text-lassonde-grey">
                    {link.title}
                  </h3>
                  <ArrowRight className="absolute bottom-4 right-4 ml-2 h-8 w-8 text-lassonde-grey" />
                </div>
                {/* Underline animation */}
                <span className="absolute left-0 -bottom-0 h-1 w-0 bg-lassonde-maroon transition-all duration-300 group-hover:w-full"></span>
              </div>
            );

            return link.external ? (
              <a
                key={index}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {CardContent}
              </a>
            ) : (
              <Link key={index} href={link.link}>
                {CardContent}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const MainContent = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <ParliamentaryActivity />
      <Links />
      <Resources />
    </div>
  );
};

export default MainContent;
