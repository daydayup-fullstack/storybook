import React, { useEffect, useRef, useState } from "react";
import AddBoardTaskButton from "../AddBoardTaskButton/AddBoardTaskButton";
import "./BoardColumn.css";
import { action } from "@storybook/addon-actions";
import { Draggable } from "react-beautiful-dnd";

const BoardColumn = ({ column, tasks, index, children }) => {
  const [shouldHighlighted, setShouldHighlighted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const inputElement = useRef(null);

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, [isEditing]);

  return (
    <Draggable draggableId={column.id} index={index} type={"column"}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          ref={provided.innerRef}
          className={`board-column ${
            shouldHighlighted && "board-column--hovered"
          } ${snapshot.isDragging && "board-column--isDragging"}`}
          onClick={() => isEditing && setIsEditing(false)}
        >
          <div
            className="header"
            {...provided.dragHandleProps}
            onMouseEnter={() => setShouldHighlighted(true)}
            onMouseLeave={() => setShouldHighlighted(false)}
          >
            {!isEditing ? (
              <>
                <span className={"title"} onClick={() => setIsEditing(true)}>
                  {column.title}
                </span>
                <span
                  className={"material-icons button"}
                  onClick={action("more button clicked")}
                >
                  more_horiz
                </span>
              </>
            ) : (
              <form>
                <input type="text" ref={inputElement} value={column.title} />
              </form>
            )}
          </div>
          <AddBoardTaskButton />

          {children}
        </div>
      )}
    </Draggable>
  );
};

export default BoardColumn;
