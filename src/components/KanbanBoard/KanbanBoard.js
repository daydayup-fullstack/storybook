import React from "react";
import "./KanbanBoard.css";
import BoardColumn from "../BoardColumn/BoardColumn";

const KanbanBoard = ({ project }) => {
  return (
    <div className={"kanban"}>
      {project.columnOrder.map((columnId) => (
        <BoardColumn column={project.columns[columnId]} />
      ))}
    </div>
  );
};

export default KanbanBoard;
