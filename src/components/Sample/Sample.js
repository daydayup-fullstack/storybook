import React from "react";
import "./sample.css";
import { action } from "@storybook/addon-actions";

const Sample = ({ buttonText }) => {
  return (
    <div className={"sample"}>
      <h1>h1 - Home - 24px(1.5rem) Medium 500 - Poppins</h1>
      <h2>h2 - New Project - 18px(1.1rem) Medium 500 - Poppins</h2>
      <p className={"text"}>
        Text - Text Content - 16px(1rem) Regular 400 - Poppins
      </p>
      <p className={"desc"}>
        Description - Description - 13px(0.9rem) Regular 400 - Poppins
      </p>

      <button onClick={action("you just clicked the button")}>
        {buttonText}
      </button>
    </div>
  );
};

export default Sample;
