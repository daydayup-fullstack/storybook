import React from "react";
import { action } from "@storybook/addon-actions";
import AddBoardTaskButton from "../components/AddBoardTaskButton/AddBoardTaskButton";

export default {
  title: "AddBoardTaskButton",
  component: AddBoardTaskButton,
};

export const normal = () => <AddBoardTaskButton />;
