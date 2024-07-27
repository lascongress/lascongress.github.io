// src/components/landing/MainContent.js
import React from "react";
import News from "./news/News";
import Links from "./links/Links";
// import Announcement from "./Announcement";

const MainContent = () => {
  return (
    <div className="container mx-auto p-4">
      {/* <Announcement /> */}
      {/* <News /> */}
      <Links />
    </div>
  );
};

export default MainContent;