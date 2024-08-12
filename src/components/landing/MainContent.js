// src/components/landing/MainContent.js
import React from "react";
import Links from "./links/Links";
// import Announcement from "./Announcement";

const MainContent = () => {
  return (
    <div className="container mx-auto p-4">
      {/* <Announcement /> */}
      <Links />
    </div>
  );
};

export default MainContent;
