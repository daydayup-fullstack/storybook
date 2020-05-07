import React from "react";
import "./KanbanBoard.css";
import BoardColumn from "../BoardColumn/BoardColumn";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const KanbanBoard = ({ project }) => {
  const onDragEnd = (result) => {
    //    todo: reorder the columns
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={project.id} direction={"horizontal"}>
        {(provided) => (
          <div
            className={"kanban"}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {project.columnOrder.map((columnId, index) => (
              <BoardColumn
                key={columnId}
                column={project.columns[columnId]}
                index={index}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default KanbanBoard;
