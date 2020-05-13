import React, { useEffect, useState } from "react";
import "./KanbanBoard.css";
import BoardColumn from "../BoardColumn/BoardColumn";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import AddNewColumn from "../AddNewColumn/AddNewColumn";

const KanbanBoard = ({ project }) => {
  const [state, setState] = useState(project);

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    if (type === "column") {
      const newColumnOrder = Array.from(state.columnOrder);

      newColumnOrder.splice(source.index, 1); // remove previous location
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...state,
        columnOrder: newColumnOrder,
      };

      setState(newState);
    }

    if (type === "task") {
      // same column
      if (destination.droppableId === source.droppableId) {
        const column = state.columns[source.droppableId];
        const newTaskIds = Array.from(column.taskIds);

        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);

        const newColumn = {
          ...column,
          taskIds: newTaskIds,
        };

        const newState = {
          ...state,
          columns: {
            ...state.columns,
            [newColumn.id]: newColumn,
          },
        };

        setState(newState);
        return;
      }

      const start = state.columns[source.droppableId];
      const finish = state.columns[destination.droppableId];
      const startTaskIds = Array.from(start.taskIds);
      const finishTaskIds = Array.from(finish.taskIds);

      startTaskIds.splice(source.index, 1);
      finishTaskIds.splice(destination.index, 0, draggableId);

      const updatedStart = {
        ...start,
        taskIds: startTaskIds,
      };

      const updatedFinish = {
        ...finish,
        taskIds: finishTaskIds,
      };

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [updatedStart.id]: updatedStart,
          [updatedFinish.id]: updatedFinish,
        },
      };

      setState(newState);
    }
  };

  let onDragStart = (result) => {};

  return (
    <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
      <Droppable
        droppableId={state.id}
        direction={"horizontal"}
        type={"column"}
      >
        {(provided) => (
          <div
            className={"kanban"}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {state.columnOrder.map((columnId, index) => (
              <BoardColumn
                key={columnId}
                column={state.columns[columnId]}
                index={index}
                tasks={state.columns[columnId].taskIds.map(
                  (taskId) => state.tasks[taskId]
                )}
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
