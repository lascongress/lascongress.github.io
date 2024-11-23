// src/components/congress/votes/house/House.js
"use client";

import React from "react";

const Card = ({
  primaryInfo,
  number,
  singleText,
  date,
  valueA,
  valueB,
  valueC,
  link,
  minuteslink
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
                <div className="text-xl font-bold">{valueA}</div>
              </div>
              <div className="flex items-center mb-2">
                <div className="text-gray-600 mr-2">Noes</div>
                <div className="text-xl font-bold">{valueB}</div>
              </div>
              <div className="flex items-center">
                <div className="text-gray-600 mr-2">Abstain</div>
                <div className="text-xl font-bold">{valueC}</div>
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
            valueA={card.valueA}
            valueB={card.valueB}
            valueC={card.valueC}
            link={card.link}
            minuteslink={card.minuteslink}
          />
        ))}
      </div>
    </div>
  );
};

const MainContent = () => {
  const houseCards = [
    // {
    //   primaryInfo: "No Pineapple on Pizza And Obligatory Garlic Dip Act",
    //   number: "99999",
    //   singleText: "Passed!",
    //   date: "Nth Meeting: held on Day Month Year at x:xxPM",
    //   valueA: "99999",
    //   valueB: "0",
    //   valueC: "1",
    //   link: "",
    //   minuteslink: "",
    // },
    {
      primaryInfo: "H.R 010 - 1: RECALL OF SANTUSHT ARORA",
      number: "15",
      singleText: "Passed",
      date: "6th Meeting: held on 14 Nov 2024 at 6:00PM",
      valueA: "13",
      valueB: "0",
      valueC: "2",
      link: "https://drive.google.com/file/d/1GajTMpRwyUY0VkHH1AQ8QDZccm7skeE7/view?usp=drive_link",
      minuteslink:"https://docs.google.com/document/d/15J1LWF0ugFvARei6nwiZigjYRrD-RlnYA52UVQcjknM/edit?tab=t.0",
    },
    {
      primaryInfo: "S. 001 - 1: OATH OF OFFICE ACT",
      number: "15",
      singleText: "Passed",
      date: "6th Meeting: held on 14 Nov 2024 at 6:00PM",
      valueA: "15",
      valueB: "0",
      valueC: "0",
      link: "https://drive.google.com/file/d/102k81VwGFFMhZK0g53vkKysgEAQy5wnB/view?usp=drive_link",
      minuteslink:"https://docs.google.com/document/d/15J1LWF0ugFvARei6nwiZigjYRrD-RlnYA52UVQcjknM/edit?tab=t.0",
    },
    {
      primaryInfo: "J.R 006 – 1: ADDITIONAL CABINET AMENDMENTS",
      number: "15",
      singleText: "Passed",
      date: "6th Meeting: held on 14 Nov 2024 at 6:00PM",
      valueA: "13",
      valueB: "0",
      valueC: "2",
      link: "https://drive.google.com/file/d/19aAZoUE6S2TLUorhC-_zy4QXx5dmiFgZ/view?usp=drive_link",
      minuteslink:"https://docs.google.com/document/d/15J1LWF0ugFvARei6nwiZigjYRrD-RlnYA52UVQcjknM/edit?tab=t.0",
    },
    {
      primaryInfo: "H.D 012 – 1: ACCESSIBILITY, COMPLAINTS AND INTERESTS ACT",
      number: "16",
      singleText: "Passed",
      date: "6th Meeting: held on 14 Nov 2024 at 6:00PM",
      valueA: "16",
      valueB: "0",
      valueC: "0",
      link: "https://drive.google.com/file/d/1IMpGSZoqNfkvr2fSgoiqsBmLo2ki26cw/view?usp=drive_link",
      minuteslink:"https://docs.google.com/document/d/15J1LWF0ugFvARei6nwiZigjYRrD-RlnYA52UVQcjknM/edit?tab=t.0",
    },
    {
      primaryInfo: "H.D 011 – 1: WEEKZERO ACT [AS AMENDED]",
      number: "16",
      singleText: "Passed",
      date: "6th Meeting: held on 14 Nov 2024 at 6:00PM",
      valueA: "16",
      valueB: "0",
      valueC: "0",
      link: "https://drive.google.com/file/d/15G5Bfe1LuGROKAKF3-oBtGNstpJLsR0y/view?usp=drive_link",
      minuteslink:"https://docs.google.com/document/d/15J1LWF0ugFvARei6nwiZigjYRrD-RlnYA52UVQcjknM/edit?tab=t.0",
    },
    {
      primaryInfo: "H.D 010 – 1: AGENCY ACT",
      number: "16",
      singleText: "Passed",
      date: "6th Meeting: held on 14 Nov 2024 at 6:00PM",
      valueA: "16",
      valueB: "0",
      valueC: "0",
      link: "https://drive.google.com/file/d/1Q37yvAc0UOz3ZPiXE_pT0fEWkecMQM1r/view?usp=drive_link",
      minuteslink:"https://docs.google.com/document/d/15J1LWF0ugFvARei6nwiZigjYRrD-RlnYA52UVQcjknM/edit?tab=t.0",
    },
    {
      primaryInfo: "H.D 009 – 1: SUPPLY & APPROPRIATIONS ACT 2024",
      number: "16",
      singleText: "Passed",
      date: "6th Meeting: held on 14 Nov 2024 at 6:00PM",
      valueA: "16",
      valueB: "0",
      valueC: "0",
      link: "https://drive.google.com/file/d/1odECaqcc09uAylgKx1Okhav8bKWEo1Op/view?usp=drive_link",
      minuteslink:"https://docs.google.com/document/d/15J1LWF0ugFvARei6nwiZigjYRrD-RlnYA52UVQcjknM/edit?tab=t.0",
    },
    {
      primaryInfo: "H.R 009 (5 mins): OCTOBER FACULTY COUNCIL APPOINTMENTS",
      number: "9",
      singleText: "Passed",
      date: "5th Meeting: held on 21 Oct 2024 at 6:30PM",
      valueA: "9",
      valueB: "0",
      valueC: "0",
      link: "https://drive.google.com/file/d/1vxVgt6BN5CBggY_Od_UiJPjl3nhu3Hi2/view?usp=drive_link",
      minuteslink:"https://docs.google.com/document/d/1lxaTnV9Y9dF2lpfITTXqdawURoDDQSn9qtuby3KVAf0/edit?tab=t.0",
    },
    {
      primaryInfo: "H.R. 008 (5 mins): OCTOBER CABINET SHUFFLE",
      number: "9",
      singleText: "Passed",
      date: "5th Meeting: held on 21 Oct 2024 at 6:30PM",
      valueA: "9",
      valueB: "0",
      valueC: "0",
      link: "https://drive.google.com/file/d/1VLquA_p5QhkhSSenKujZZCKDsoC7HZg-/view?usp=drive_link",
      minuteslink:"https://docs.google.com/document/d/1lxaTnV9Y9dF2lpfITTXqdawURoDDQSn9qtuby3KVAf0/edit?tab=t.0",
    },
    {
      primaryInfo: "J.R. 005 – 1: BUDGET 24/25",
      number: "11",
      singleText: "Passed",
      date: "4th Meeting: held on 19 Sep 2024 at 6:30PM",
      valueA: "10",
      valueB: "0",
      valueC: "1",
      link: "https://drive.google.com/file/d/1fEsztFjiVYTHfNagB2QEy2YuSXhpHSS0/view?usp=drive_link",
      minuteslink:"https://docs.google.com/document/d/1DLOxiPqGacAMBRjuFxQiVRpPOPLnbz4m7BsAOZ8tHw8/edit?tab=t.0",
    },
    {
      primaryInfo: "H.R. 007 – 1: SEPTEMBER CABINET APPOINTMENT",
      number: "12",
      singleText: "Passed",
      date: "4th Meeting: held on 19 Sep 2024 at 6:30PM",
      valueA: "12",
      valueB: "0",
      valueC: "0",
      link: "https://drive.google.com/file/d/1JFhBdY9nEfNstTJ32MBlikghonE9cyiR/view?usp=drive_link",
      minuteslink:"https://docs.google.com/document/d/1DLOxiPqGacAMBRjuFxQiVRpPOPLnbz4m7BsAOZ8tHw8/edit?tab=t.0",
    },
    {
      primaryInfo: "J.R. 004 – 1: BYLAW 2 PROVISIONS FOR SSIA",
      number: "12",
      singleText: "Passed",
      date: "4th Meeting: held on 19 Sep 2024 at 6:30PM",
      valueA: "12",
      valueB: "0",
      valueC: "0",
      link: "https://drive.google.com/file/d/1Ksq844KUtzxxKhEErKD22UooqqMCT_IJ/view?usp=drive_link",
      minuteslink:"https://docs.google.com/document/d/1DLOxiPqGacAMBRjuFxQiVRpPOPLnbz4m7BsAOZ8tHw8/edit?tab=t.0",
    },
    {
      primaryInfo: "H.D. 008 – 1: STUDENT SUCCESS INITIATIVE ACT",
      number: "12",
      singleText: "Passed",
      date: "4th Meeting: held on 19 Sep 2024 at 6:30PM",
      valueA: "11",
      valueB: "0",
      valueC: "1",
      link: "https://drive.google.com/file/d/1jIMYeawg7gdTEcu74xaw1qRKCc5juVPi/view?usp=drive_link",
      minuteslink:"https://docs.google.com/document/d/1DLOxiPqGacAMBRjuFxQiVRpPOPLnbz4m7BsAOZ8tHw8/edit?tab=t.0",
    },
    {
      primaryInfo: "H.D. 007 – 1: COMMUNITY RIGHTS ACT",
      number: "11",
      singleText: "Passed",
      date: "4th Meeting: held on 19 Sep 2024 at 6:30PM",
      valueA: "11",
      valueB: "0",
      valueC: "0",
      link: "https://drive.google.com/file/d/1yaBKXL7UQ7ZdlyCJMtTrhKtQuNINb1kK/view?usp=drive_link",
      minuteslink:"https://docs.google.com/document/d/1DLOxiPqGacAMBRjuFxQiVRpPOPLnbz4m7BsAOZ8tHw8/edit?tab=t.0",
    },
    {
      primaryInfo: "J.R 002 – 1: CABINET AMENDMENTS – TABLED FROM AUGUST",
      number: "10",
      singleText: "Passed",
      date: "4th Meeting: held on 19 Sep 2024 at 6:30PM",
      valueA: "10",
      valueB: "0",
      valueC: "0",
      link: "https://drive.google.com/file/d/1frCyEg6AZnlcOOJ8FWpH8hYBR-5YZy29/view?usp=sharing",
      minuteslink:"https://docs.google.com/document/d/1DLOxiPqGacAMBRjuFxQiVRpPOPLnbz4m7BsAOZ8tHw8/edit?tab=t.0",
    },
    {
      primaryInfo:
        "J.R 002 – 1: CABINET AMENDMENTS – TABLED TO SEPTEMBER (NO QUORUM)",
      number: "Unanimous",
      singleText: "No Decision",
      date: "3rd Meeting: held on 30 Aug 2024 at 6:00PM",
      valueA: "Unanimous",
      valueB: "0",
      valueC: "0",
      link: "https://drive.google.com/file/d/1frCyEg6AZnlcOOJ8FWpH8hYBR-5YZy29/view?usp=sharing",
      minuteslink:"https://docs.google.com/document/d/1d2VAr0w16KI_w4FPDg_vYu6X1OoBKATnTKQHDcbISQs/edit?tab=t.0",
    },
    {
      primaryInfo: "H.R 006 – 1: AUGUST FACULTY COUNCIL APPOINTMENTS",
      number: "Unanimous",
      singleText: "Passed",
      date: "3rd Meeting: held on 30 Aug 2024 at 6:00PM",
      valueA: "Unanimous",
      valueB: "0",
      valueC: "0",
      link: "https://drive.google.com/file/d/1Mxi8qrmsaAuiQAPdEjqPuyVYFYhmPh5Q/view?usp=sharing",
      minuteslink:"https://docs.google.com/document/d/1d2VAr0w16KI_w4FPDg_vYu6X1OoBKATnTKQHDcbISQs/edit?tab=t.0",
    },
    {
      primaryInfo: "H.D. 006 - LEGISLATION CONTROL ACT",
      number: "Unanimous",
      singleText: "Passed",
      date: "3rd Meeting: held on 30 Aug 2024 at 6:00PM",
      valueA: "Unanimous",
      valueB: "0",
      valueC: "0",
      link: "https://drive.google.com/file/d/1hgbrsl--AychbZHCUssUiyi3GXdYaUCv/view?usp=sharing",
      minuteslink:"https://docs.google.com/document/d/1d2VAr0w16KI_w4FPDg_vYu6X1OoBKATnTKQHDcbISQs/edit?tab=t.0",
    },
    {
      primaryInfo: "H.R 005 – 1: AUGUST COMMITTEE ELECTIONS",
      number: "Unanimous",
      singleText: "Passed",
      date: "3rd Meeting: held on 30 Aug 2024 at 6:00PM",
      valueA: "Unanimous",
      valueB: "0",
      valueC: "0",
      link: "https://drive.google.com/file/d/1YtXWA7Svqd8SSsc0HOiZVl2uT54A_YG7/view?usp=sharing",
      minuteslink:"https://docs.google.com/document/d/1d2VAr0w16KI_w4FPDg_vYu6X1OoBKATnTKQHDcbISQs/edit?tab=t.0",
    },
    {
      primaryInfo: "H.D. 005 - 1: THE ELECTIONS ACCESSIBILITY ACT",
      number: "6",
      singleText: "Passed",
      date: "2nd Meeting: held on 29 Jul 2024 at 6:00PM",
      valueA: "6",
      valueB: "0",
      valueC: "0",
      link: "https://drive.google.com/file/d/1gKIBVTirILfK4jwiEjiQpEumWWndE15V/view?usp=drive_link",
      minuteslink:"https://docs.google.com/document/d/1Gy-fl8aIj05liL9OTHPyFoagLqIM607hvtW0b_rU9XM/edit?tab=t.0",
    },
    {
      primaryInfo: "H.D. 004 – 1: THE GOVERNMENT ACT",
      number: "8",
      singleText: "Passed",
      date: "2nd Meeting: held on 29 Jul 2024 at 6:00PM",
      valueA: "8",
      valueB: "0",
      valueC: "0",
      link: "https://drive.google.com/file/d/1jI7MKJJpm96i4RHtHnk8VbkAfWxWuLm5/view?usp=drive_link",
      minuteslink:"https://docs.google.com/document/d/1Gy-fl8aIj05liL9OTHPyFoagLqIM607hvtW0b_rU9XM/edit?tab=t.0",
    },
    {
      primaryInfo: "H.D. 003 - 1: Representative Contribution Act",
      number: "7",
      singleText: "Passed",
      date: "1st Meeting: held on 3 JUL 2024 at 6:30PM",
      valueA: "7",
      valueB: "0",
      valueC: "0",
      link: "https://drive.google.com/file/d/1giWGluLvUzU_fkUQRRrdmMkPvL_zwBeN/view?usp=drive_link",
      minuteslink:"https://docs.google.com/document/d/1wpKVjNl5KMPz9ke8z5nlb_aQfk9iBZGJyHOxm2d2lJw/edit?tab=t.0",
    },
    {
      primaryInfo: "H.R 004 – 1: Faculty Council",
      number: "7",
      singleText: "Passed",
      date: "1st Meeting: held on 3 JUL 2024 at 6:30PM",
      valueA: "7",
      valueB: "0",
      valueC: "0",
      link: "https://drive.google.com/file/d/1OXHX7eGQrHm8V4ibJD0mknfHOdiYBjH3/view?usp=drive_link",
      minuteslink:"https://docs.google.com/document/d/1wpKVjNl5KMPz9ke8z5nlb_aQfk9iBZGJyHOxm2d2lJw/edit?tab=t.0",
    },
    {
      primaryInfo: "H.R 003 – 1: Committee Elections",
      number: "7",
      singleText: "Passed",
      date: "1st Meeting: held on 3 JUL 2024 at 6:30PM",
      valueA: "7",
      valueB: "0",
      valueC: "0",
      link: "https://drive.google.com/file/d/15ZLrsd_y-yGO8uA3XMsu5O_uwsMFslOy/view?usp=drive_link",
      minuteslink:"https://docs.google.com/document/d/1wpKVjNl5KMPz9ke8z5nlb_aQfk9iBZGJyHOxm2d2lJw/edit?tab=t.0",
    },
    {
      primaryInfo: "H.R 002 - 1: Steering Committee",
      number: "7",
      singleText: "Passed",
      date: "1st Meeting: held on 3 JUL 2024 at 6:30PM",
      valueA: "7",
      valueB: "0",
      valueC: "0",
      link: "https://drive.google.com/file/d/1e7VzAHEu7yUne6ro23XS9dvVZzj68gAA/view?usp=sharing",
      minuteslink:"https://docs.google.com/document/d/1wpKVjNl5KMPz9ke8z5nlb_aQfk9iBZGJyHOxm2d2lJw/edit?tab=t.0",
    },
    {
      primaryInfo:
        "H.D 002 - 1: Charter & Bylaw Critical Adjustments Act (APPENDIX C) (To be considered by the Senate)",
      number: "7",
      singleText: "Passed",
      date: "1st Meeting: held on 3 JUL 2024 at 6:30PM",
      valueA: "7",
      valueB: "0",
      valueC: "0",
      link: "https://drive.google.com/file/d/1PJ271k7au0e8BS9QhHrCWQlohVVlXcuf/view?usp=drive_link",
      minuteslink:"https://docs.google.com/document/d/1wpKVjNl5KMPz9ke8z5nlb_aQfk9iBZGJyHOxm2d2lJw/edit?tab=t.0",
    },
    {
      primaryInfo:
        "The House elects Luca Filippelli to be the Speaker of the House for the 1st Congress",
      number: "7",
      singleText: "Passed",
      date: "1st Meeting: held on 3 JUL 2024 at 6:30PM",
      valueA: "7",
      valueB: "0",
      valueC: "0",
      minuteslink:"https://docs.google.com/document/d/1wpKVjNl5KMPz9ke8z5nlb_aQfk9iBZGJyHOxm2d2lJw/edit?tab=t.0",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 gap-4">
        <Section
          title="House Votes"
          imgSrc="/images/congress/votes/house-of-delegates.png"
          description="When a vote is held in the Commons the Speaker calls a division by announcing 'division, clear the lobbies'. MPs then vote on the topic being considered by walking through the Aye or No lobbies where they are counted by the tellers and their names are recorded."
          buttonLink="/congress"
          cards={houseCards}
        />
      </div>
    </div>
  );
};

export default MainContent;
