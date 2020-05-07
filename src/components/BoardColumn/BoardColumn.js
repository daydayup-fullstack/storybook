import React, { useState } from "react";
import AddBoardTaskButton from "../AddBoardTaskButton/AddBoardTaskButton";
import "./BoardColumn.css";
import { action } from "@storybook/addon-actions";
import { Draggable } from "react-beautiful-dnd";

const BoardColumn = ({ column, index, columnId }) => {
  const [shouldHighlighted, setShouldHighlighted] = useState(false);

  return (
    <Draggable draggableId={columnId} index={index} type={"column"}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          ref={provided.innerRef}
          className={`board-column ${
            shouldHighlighted && "board-column--hovered"
          }`}
        >
          <div
            className="header"
            {...provided.dragHandleProps}
            onMouseEnter={() => setShouldHighlighted(true)}
            onMouseLeave={() => setShouldHighlighted(false)}
          >
            <span className={"title"}>{column.title}</span>
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
      )}
    </Draggable>
  );
};

export default BoardColumn;
