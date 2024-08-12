// src/components/government/homepage/MainContent.js
import React from "react";
import News from "./spotlight/News";
import Links from "./links/Links";
import Resources from "./resources/Links";
import Announcement from "./Announcement";

const MainContent = () => {
  return (
    <div className="container mx-auto p-4">
      <Announcement />
      <Links />
      <br />
      <Resources />
      <br />
      <News />
    </div>
  );
};

export default MainContent;
