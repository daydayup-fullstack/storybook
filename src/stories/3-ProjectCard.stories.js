import React from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import { action } from "@storybook/addon-actions";
import { Project, Section } from "../model/model";
import { generateId, generateRandomColorIndex } from "../model/utility";

export default {
  title: "ProjectCard",
  component: ProjectCard,
};

const randomColorIndex = generateRandomColorIndex();
const sectionData = [
  new Section("Backlog", generateId()),
  new Section("Ready", generateId()),
  new Section("In Progress", generateId()),
];

const data = new Project(
  generateId(),
  "Sprint 1",
  randomColorIndex,
  [],
  sectionData
);

export const Text = () => {
  return (
    <ProjectCard
      project={data}
      onHandleClick={action("Project card is clicked!")}
    />
  );
};
