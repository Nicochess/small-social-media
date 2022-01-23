import React from "react";

const SidebarOption = ({ active, text, icon }) => {
  return (
    <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
      {icon}
      <h2>{text}</h2>
    </div>
  );
};

export default SidebarOption;
