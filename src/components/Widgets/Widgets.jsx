import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="widgets__container">
        <h2>What's happening</h2>
      </div>
    </div>
  );
};

export default Widgets;
