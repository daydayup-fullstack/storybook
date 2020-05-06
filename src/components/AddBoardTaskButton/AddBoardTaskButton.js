import React from "react";
import "./AddBoardTaskButton.css";
import { action } from "@storybook/addon-actions";

const AddBoardTaskButton = () => {
  return (
    <div className={"addBoardTaskButton"} onClick={action("button clicked")}>
      <span className={"material-icons"}>add</span>
    </div>
  );
};

export default AddBoardTaskButton;
