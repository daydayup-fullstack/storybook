import React from "react";
import "./Toast.css";

const Toast = () => {
  const item = "image.png";
  const task = "Integrating components";

  return (
    <div className="Toast">
      <header className={"Toast__header"} />
      <div className="Toast__content">
        <span className={"material-icons Toast__content__close"}>close</span>
        <span className={"Toast__content__undo"}>Undo</span>
        <span
          className={"Toast__content__info"}
        >{`${item} was removed from ${task}`}</span>
      </div>
    </div>
  );
};

export default Toast;
