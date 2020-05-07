import React from "react";
import KanbanBoard from "../components/KanbanBoard/KanbanBoard";
import { project } from "../model/newModel";

export default {
  title: "Kanban",
  component: KanbanBoard,
  parameters: {
    backgrounds: [{ name: "default", value: "#f6f8f9", default: true }],
  },
};

export const normal = () => {
  return <KanbanBoard project={project} />;
};
