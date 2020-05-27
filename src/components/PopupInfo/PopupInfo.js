import React from "react";
import "./PopupInfo.css";

const PopupInfo = ({ shouldShow, children }) => {
  return shouldShow ? (
    <div className="PopupInfo">
      <div className="PopupInfo__content">{children}</div>
    </div>
  ) : (
    <></>
  );
};

export default PopupInfo;
