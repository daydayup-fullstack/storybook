import React from "react";
import AddProject from "../components/AddProject/AddProject"
import { action } from "@storybook/addon-actions";

export default {
  title: "AddProject",
  component: AddProject,
};

export const Normal = () =>
  <AddProject onHandleClick={action("Add a project")} />

