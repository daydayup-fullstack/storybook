import React, { useEffect, useState } from "react";
import "./KanbanBoard.css";
import BoardColumn from "../BoardColumn/BoardColumn";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import AddNewColumn from "../AddNewColumn/AddNewColumn";

const KanbanBoard = ({ project }) => {
  const [currentProject, setCurrentProject] = useState(project);

  const onDragEnd = (result) => {
    //    todo: reorder the columns
    const { destination, source, draggableId, type } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    if (type === "column") {
      const newColumnOrder = Array.from(currentProject.columnOrder);

      newColumnOrder.splice(source.index, 1); // remove previous location
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...currentProject,
        columnOrder: newColumnOrder,
      };

      setCurrentProject(newState);
    }
  };

  let onDragStart = (result) => {};

  return (
    <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
      <Droppable
        droppableId={currentProject.id}
        direction={"horizontal"}
        type={"column"}
      >
        {(provided) => (
          <div
            className={"kanban"}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {currentProject.columnOrder.map((columnId, index) => (
              <BoardColumn
                key={columnId}
                column={currentProject.columns[columnId]}
                index={index}
                columnId={columnId}
                allTasks={currentProject.tasks}
              />
            ))}
            {provided.placeholder}
            <AddNewColumn />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default KanbanBoard;
