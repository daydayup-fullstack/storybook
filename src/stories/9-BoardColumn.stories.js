import React from "react";
import BoardColumn from "../components/BoardColumn/BoardColumn";

export default {
  title: "BoardColumn",
  component: BoardColumn,
  parameters: {
    backgrounds: [{ name: "default", value: "#f6f8f9", default: true }],
  },
};

export const normal = () => <BoardColumn />;
