import React, { useState } from "react";
import AddBoardTaskButton from "../AddBoardTaskButton/AddBoardTaskButton";
import "./BoardColumn.css";
import { action } from "@storybook/addon-actions";

const BoardColumn = () => {
  const [shouldHighlighted, setShouldHighlighted] = useState(false);

  return (
    <div
      className={`board-column ${shouldHighlighted && "board-column--hovered"}`}
    >
      <div
        className="header"
        onMouseEnter={() => setShouldHighlighted(true)}
        onMouseLeave={() => setShouldHighlighted(false)}
      >
        <span className={"title"}>title</span>
        <span
          className={"material-icons button"}
          onClick={action("more button clicked")}
        >
          more_horiz
        </span>
      </div>
      <AddBoardTaskButton />

      <div className={"list"} />
    </div>
  );
};

export default BoardColumn;
