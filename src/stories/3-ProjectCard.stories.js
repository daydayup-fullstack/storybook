import React from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import { action } from "@storybook/addon-actions";
import { Project, Section } from "../model/model";
import { generateRandomColorIndex, generateShortid } from "../model/utility";

export default {
  title: "ProjectCard",
  component: ProjectCard,
};

const randomColorIndex = generateRandomColorIndex();
const id = generateShortid();
const sectionData = [
  new Section("Backlog", generateShortid()),
  new Section("Ready", generateShortid()),
  new Section("In Progress", generateShortid()),
];

const data = new Project(id, "Sprint 1", randomColorIndex, [], sectionData);

export const Text = () => {
  return (
    <ProjectCard
      project={data}
      onHandleClick={action("Project card is clicked!")}
    />
  );
};
