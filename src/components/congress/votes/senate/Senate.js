// src/components/congress/votes/senate/Senate.js
"use client";

import React from "react";

const Card = ({
  primaryInfo,
  number,
  singleText,
  date,
  ayeVotes,
  noeVotes,
  abstainVotes,
  link,
  minuteslink,
}) => {
  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <div className="border-l-4 border-neutral-600 pl-4">
        <div className="text-xl font-bold mb-2">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-blue-500"
          >
            {primaryInfo}
          </a>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between items-center">
            <div className="flex text-center flex-col">
              <div className="text-3xl font-bold">{number}</div>
              <div className="text-gray-600">Total Votes</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-xl font-bold text-center">{singleText}</div>
              <div className="text-gray-600 text-center">{date}</div>
              <a
                href={minuteslink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2"
              >
                Access Meeting Minutes
              </a>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-center mb-2">
                <div className="text-gray-600 mr-2">Ayes</div>
                <div className="text-xl font-bold">{ayeVotes}</div>
              </div>
              <div className="flex items-center mb-2">
                <div className="text-gray-600 mr-2">Noes</div>
                <div className="text-xl font-bold">{noeVotes}</div>
              </div>
              <div className="flex items-center">
                <div className="text-gray-600 mr-2">Abstain</div>
                <div className="text-xl font-bold">{abstainVotes}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Section = ({ title, imgSrc, description, cards }) => {
  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <div className="mb-4 border-b-2 border-gray-200">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-48 object-cover mb-4 rounded"
        />
        <p className="mb-4">{description}</p>
        <div className="flex justify-center mb-4"></div>
      </div>
      <div>
        {cards.map((card, index) => (
          <Card
            key={index}
            primaryInfo={card.primaryInfo}
            number={card.number}
            singleText={card.singleText}
            date={card.date}
            ayeVotes={card.ayeVotes}
            noeVotes={card.noeVotes}
            abstainVotes={card.abstainVotes}
            link={card.link}
            minuteslink={card.minuteslink}
          />
        ))}
      </div>
    </div>
  );
};

const MainContent = () => {
  const senateCards = [
    // {
    //   primaryInfo: "No Pineapple on Pizza And Obligatory Garlic Dip Act",
    //   number: "N",
    //   singleText: "Passed!",
    //   date: "Nth Meeting: held on Day Month Year at x:xxPM",
    //   ayeVotes: "N",
    //   noeVotes: "N",
    //   abstainVotes: "N",
    //   link: "",
    //   minuteslink: "",
    // },
    {
      primaryInfo: "H.D 012 – 1: ACCESSIBILITY, COMPLAINTS AND INTERESTS ACT",
      number: "3",
      singleText: "Passed",
      date: "10th Meeting: held on 27 Nov 2024 at 8:15PM",
      ayeVotes: "3",
      noeVotes: "0",
      abstainVotes: "0",
      link: "https://drive.google.com/file/d/1IMpGSZoqNfkvr2fSgoiqsBmLo2ki26cw/view?usp=drive_link",
      minuteslink:
        "https://docs.google.com/document/d/1UPL-aUgPxgsniX_e_OLk0iELypT2kvxydwv6ZQrTKBo/edit?tab=t.0",
    },
    {
      primaryInfo: "H.D 011 – 1: WEEKZERO ACT [AS AMENDED]",
      number: "3",
      singleText: "Tabled to February",
      date: "10th Meeting: held on 27 Nov 2024 at 8:15PM",
      ayeVotes: "3",
      noeVotes: "0",
      abstainVotes: "0",
      link: "https://drive.google.com/file/d/15G5Bfe1LuGROKAKF3-oBtGNstpJLsR0y/view?usp=drive_link",
      minuteslink:
        "https://docs.google.com/document/d/1UPL-aUgPxgsniX_e_OLk0iELypT2kvxydwv6ZQrTKBo/edit?tab=t.0",
    },
    {
      primaryInfo: "H.D 010 – 1: AGENCY ACT",
      number: "3",
      singleText: "Passed",
      date: "10th Meeting: held on 27 Nov 2024 at 8:15PM",
      ayeVotes: "3",
      noeVotes: "0",
      abstainVotes: "0",
      link: "https://drive.google.com/file/d/1Q37yvAc0UOz3ZPiXE_pT0fEWkecMQM1r/view?usp=drive_link",
      minuteslink:
        "https://docs.google.com/document/d/1UPL-aUgPxgsniX_e_OLk0iELypT2kvxydwv6ZQrTKBo/edit?tab=t.0",
    },
    {
      primaryInfo: "H.D 009 – 1: SUPPLY & APPROPRIATIONS ACT 2024",
      number: "3",
      singleText: "Passed",
      date: "10th Meeting: held on 27 Nov 2024 at 8:15PM",
      ayeVotes: "3",
      noeVotes: "0",
      abstainVotes: "0",
      link: "https://drive.google.com/file/d/1odECaqcc09uAylgKx1Okhav8bKWEo1Op/view?usp=drive_link",
      minuteslink:
        "https://docs.google.com/document/d/1UPL-aUgPxgsniX_e_OLk0iELypT2kvxydwv6ZQrTKBo/edit?tab=t.0",
    },
    {
      primaryInfo: "J.R 006 – 1: ADDITIONAL CABINET AMENDMENTS",
      number: "3",
      singleText: "Passed",
      date: "9th Meeting: held on 13 Nov 2024 at 8:15PM",
      ayeVotes: "3",
      noeVotes: "0",
      abstainVotes: "0",
      link: "https://drive.google.com/file/d/19aAZoUE6S2TLUorhC-_zy4QXx5dmiFgZ/view?usp=drive_link",
      minuteslink:
        "https://docs.google.com/document/d/1kOVoJYPSCMX5dgWrmR7CoBWpaKa4IawCPxUYKq7c4pc/edit?tab=t.0",
    },
    {
      primaryInfo: "S. 001 - OATH OF OFFICE ACT",
      number: "3",
      singleText: "Passed",
      date: "9th Meeting: held on 13 Nov 2024 at 8:15PM",
      ayeVotes: "3",
      noeVotes: "0",
      abstainVotes: "0",
      link: "https://drive.google.com/file/d/102k81VwGFFMhZK0g53vkKysgEAQy5wnB/view?usp=drive_link",
      minuteslink:
        "https://docs.google.com/document/d/1kOVoJYPSCMX5dgWrmR7CoBWpaKa4IawCPxUYKq7c4pc/edit?tab=t.0",
    },
    {
      primaryInfo: "S.R. 003 - 2024 OCTOBER DIRECTOR APPOINTMENTS",
      number: "2",
      singleText: "Passed",
      date: "8th Meeting: held on 30 Oct 2024 at 8:15PM",
      ayeVotes: "2",
      noeVotes: "0",
      abstainVotes: "0",
      link: "https://docs.google.com/spreadsheets/d/1AMyFikCbkqbTWJyrivesalIrP-wpUokCP8OcDiONuq8/edit?gid=0#gid=0",
      minuteslink:
        "https://docs.google.com/document/d/1NpsFkZASVbafKdJWAWzB4arD6wKYNMF6kNM63Irqin4/edit?tab=t.0",
    },
    {
      primaryInfo: "S.R. 002 - 2024 FALL ELECTION RATIFICATION",
      number: "2",
      singleText: "Passed",
      date: "8th Meeting: held on 30 Oct 2024 at 8:15PM",
      ayeVotes: "2",
      noeVotes: "0",
      abstainVotes: "0",
      link: "https://docs.google.com/spreadsheets/d/1t_K1Otm7psB8jW5orFcP8AY2XABWyh9UG0AKS3CQvzc/edit?gid=0#gid=0",
      minuteslink:
        "https://docs.google.com/document/d/1NpsFkZASVbafKdJWAWzB4arD6wKYNMF6kNM63Irqin4/edit?tab=t.0",
    },
    {
      primaryInfo: "H.D. 008 – 1: STUDENT SUCCESS INITIATIVE ACT",
      number: "3",
      singleText: "Passed",
      date: "7th Meeting: held on 2 Oct 2024 at 8:30PM",
      ayeVotes: "3",
      noeVotes: "0",
      abstainVotes: "0",
      link: "https://drive.google.com/file/d/1jIMYeawg7gdTEcu74xaw1qRKCc5juVPi/view?usp=drive_link",
      minuteslink:
        "https://docs.google.com/document/d/1GcOvPctxo9hwWM2PrQKhpz43d4qpAe8XlEHHTcFTUAM/edit?tab=t.0",
    },
    {
      primaryInfo: "H.D. 007 – 1: COMMUNITY RIGHTS ACT",
      number: "3",
      singleText: "Passed",
      date: "7th Meeting: held on 2 Oct 2024 at 8:30PM",
      ayeVotes: "3",
      noeVotes: "0",
      abstainVotes: "0",
      link: "https://drive.google.com/file/d/1yaBKXL7UQ7ZdlyCJMtTrhKtQuNINb1kK/view?usp=drive_link",
      minuteslink:
        "https://docs.google.com/document/d/1GcOvPctxo9hwWM2PrQKhpz43d4qpAe8XlEHHTcFTUAM/edit?tab=t.0",
    },
    {
      primaryInfo: "J.R. 005 – 1: BUDGET 24/25",
      number: "3",
      singleText: "Passed",
      date: "7th Meeting: held on 2 Oct 2024 at 8:30PM",
      ayeVotes: "3",
      noeVotes: "0",
      abstainVotes: "0",
      link: "https://drive.google.com/file/d/1fEsztFjiVYTHfNagB2QEy2YuSXhpHSS0/view?usp=drive_link",
      minuteslink:
        "https://docs.google.com/document/d/1GcOvPctxo9hwWM2PrQKhpz43d4qpAe8XlEHHTcFTUAM/edit?tab=t.0",
    },
    {
      primaryInfo: "J.R. 004 – 1: BYLAW 2 PROVISIONS FOR SSIA",
      number: "3",
      singleText: "Passed",
      date: "7th Meeting: held on 2 Oct 2024 at 8:30PM",
      ayeVotes: "3",
      noeVotes: "0",
      abstainVotes: "0",
      link: "https://drive.google.com/file/d/1Ksq844KUtzxxKhEErKD22UooqqMCT_IJ/view?usp=drive_link",
      minuteslink:
        "https://docs.google.com/document/d/1GcOvPctxo9hwWM2PrQKhpz43d4qpAe8XlEHHTcFTUAM/edit?tab=t.0",
    },
    {
      primaryInfo: "J.R 002 – 1: CABINET AMENDMENTS",
      number: "2",
      singleText: "Passed",
      date: "7th Meeting: held on 2 Oct 2024 at 8:30PM",
      ayeVotes: "3",
      noeVotes: "0",
      abstainVotes: "0",
      link: "https://drive.google.com/file/d/1frCyEg6AZnlcOOJ8FWpH8hYBR-5YZy29/view?usp=sharing",
      minuteslink:
        "https://docs.google.com/document/d/1GcOvPctxo9hwWM2PrQKhpz43d4qpAe8XlEHHTcFTUAM/edit?tab=t.0",
    },
    {
      primaryInfo: "JR 001 : 2024 AUGUST BY ELECTIONS AND APPTMTS.",
      number: "2",
      singleText: "Passed",
      date: "6th Meeting: held on 15 Sept 2024 at 6:30PM",
      ayeVotes: "2",
      noeVotes: "0",
      abstainVotes: "0",
      link: "https://drive.google.com/file/d/1lgvR3q8N0gKmOAq-MxCLaf7_djcIv_n-/view?usp=sharing",
      minuteslink:
        "https://docs.google.com/document/d/1MMzlIx4GjVrU-sgjPPYFG9292bqVYtMFHVE5JBOmtYM/edit?tab=t.0",
    },
    {
      primaryInfo: "H.D. 006 - LEGISLATION CONTROL ACT",
      number: "2",
      singleText: "Passed",
      date: "5th Meeting: held on 1 Sept 2024 at 6:00PM",
      ayeVotes: "2",
      noeVotes: "0",
      abstainVotes: "0",
      link: "https://drive.google.com/file/d/1hgbrsl--AychbZHCUssUiyi3GXdYaUCv/view?usp=sharing",
      minuteslink:
        "https://docs.google.com/document/d/1lA7gShFFeuKUaYR_d3xtL8uG0jgsHrXxcUvDMi4B9H8/edit?tab=t.0",
    },
    {
      primaryInfo: "H.D. 004 – 1: THE GOVERNMENT ACT",
      number: "3",
      singleText: "Passed",
      date: "3rd Meeting: held on 4 Aug 2024 at 6:00PM",
      ayeVotes: "3",
      noeVotes: "0",
      abstainVotes: "0",
      link: "https://drive.google.com/file/d/1YWtCsUt1JZhK5fZI9O4S9OGlVAOzxhMP/view?usp=drive_link",
      minuteslink:
        "https://docs.google.com/document/d/1pYXL-17pJtvpK0KxeOJrMoMaKzs8v4XCtryQJDtztvw/edit?tab=t.0",
    },
    {
      primaryInfo: "S.R. 001 – 1: Alumni Senator (Class 2)",
      number: "3",
      singleText: "Passed",
      date: "1st Meeting: held on 7 Jul 2024 at 6:30PM",
      ayeVotes: "3",
      noeVotes: "0",
      abstainVotes: "0",
      link: "https://drive.google.com/file/d/1MwZKsrLQWjH7KJV8xVlp6KKKBspDBKEA/view?usp=drive_link",
      minuteslink:
        "https://docs.google.com/document/d/1LW_l2Cq_Qac-OPF2hMOxjSjLme3jrZVgGHIjdmEGmxM/edit?tab=t.0",
    },
    {
      primaryInfo: "H.D. 003 - 1: Representative Contribution Act",
      number: "3",
      singleText: "Passed",
      date: "1st Meeting: held on 7 Jul 2024 at 6:30PM",
      ayeVotes: "3",
      noeVotes: "0",
      abstainVotes: "0",
      link: "https://drive.google.com/file/d/1giWGluLvUzU_fkUQRRrdmMkPvL_zwBeN/view?usp=drive_link",
      minuteslink:
        "https://docs.google.com/document/d/1LW_l2Cq_Qac-OPF2hMOxjSjLme3jrZVgGHIjdmEGmxM/edit?tab=t.0",
    },
    {
      primaryInfo: "H.D 002 – 1: Charter & Bylaw Critical Adjustments Act",
      number: "3",
      singleText: "Passed",
      date: "1st Meeting: held on 7 Jul 2024 at 6:30PM",
      ayeVotes: "3",
      noeVotes: "0",
      abstainVotes: "0",
      link: "https://drive.google.com/file/d/1e7VzAHEu7yUne6ro23XS9dvVZzj68gAA/view?usp=sharing",
      minuteslink:
        "https://docs.google.com/document/d/1LW_l2Cq_Qac-OPF2hMOxjSjLme3jrZVgGHIjdmEGmxM/edit?tab=t.0",
    },
    {
      primaryInfo: "S.R. 001 – 1: Alumni Senator (Class 2)",
      number: "3",
      singleText: "Passed",
      date: "1st Meeting: held on 7 Jul 2024 at 6:30PM",
      ayeVotes: "3",
      noeVotes: "0",
      abstainVotes: "0",
      link: "https://drive.google.com/file/d/1mWS_hzcBgE4AwV7dC3-h93GTxSjHlyle/view?usp=drive_link",
      minuteslink:
        "https://docs.google.com/document/d/1LW_l2Cq_Qac-OPF2hMOxjSjLme3jrZVgGHIjdmEGmxM/edit?tab=t.0",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 gap-4">
        <Section
          title="Senate Votes"
          imgSrc="/images/congress/votes/senate.png"
          description="When a vote is held in the Senate, the Speaker calls the members individually to vote on the topic being considered by walking through the Aye or No lobbies where they are counted and their names are recorded."
          buttonLink="/congress"
          cards={senateCards}
        />
      </div>
    </div>
  );
};

export default MainContent;
