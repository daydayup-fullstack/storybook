import React from "react";
import KanbanBoard from "../components/KanbanBoard/KanbanBoard";

export default {
  title: "Kanban",
  component: KanbanBoard,
};

export const normal = () => {
  return <KanbanBoard />;
};
