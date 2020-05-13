import React, { useEffect, useRef, useState } from "react";
import AddBoardTaskButton from "../AddBoardTaskButton/AddBoardTaskButton";
import "./BoardColumn.css";
import { action } from "@storybook/addon-actions";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const TaskCard = ({ name, index, taskId }) => {
  return (
    <Draggable draggableId={taskId} type={"task"} index={index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={"taskCard"}
        >
          {name}
        </div>
      )}
    </Draggable>
  );
};

const TaskList = ({ tasks, column }) => {
  return (
    <Droppable droppableId={column.id} type={"task"}>
      {(provided) => (
        <div
          className={"taskList"}
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {tasks.map((task, index) => (
            <TaskCard
              taskId={task.id}
              name={task.content.name}
              index={index}
              key={task.id}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

const BoardColumn = ({ column, tasks, index }) => {
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

          {<TaskList tasks={tasks} column={column} />}
        </div>
      )}
    </Draggable>
  );
};

export default BoardColumn;
