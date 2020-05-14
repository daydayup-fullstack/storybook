import { Droppable } from "react-beautiful-dnd";
import TaskCard from "../TaskCard/TaskCard";
import React from "react";
import "./TaskCardList.css";

const TaskCardList = ({ tasks, columnId }) => {
  return (
    <Droppable droppableId={columnId} type={"task"}>
      {(provided) => (
        <div
          className={`taskCardList ${tasks.length === 0 && "empty"}`}
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {tasks.map((task, index) => (
            <TaskCard task={task} index={index} key={task.id} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TaskCardList;
