import React from "react";
import ProjectDetail from "../components/ProjectDetail/ProjectDetail"
import { action } from "@storybook/addon-actions";

export default {
  title: "ProjectDetail",
  component: ProjectDetail,
};

export const Normal = () =>
  <ProjectDetail onHandleClick={action("Fill in project details")} />

