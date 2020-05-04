import React from "react";
import "./SideMenuHeader.css";

const SideMenuHeader = ({ iconName, onHandleClick }) => {
  return (
    <header className={"SideMenuHeader"}>
      <div>Logo</div>
      <span className="material-icons" onClick={() => onHandleClick()}>
        {iconName}
      </span>
    </header>
  );
};

export default SideMenuHeader;
