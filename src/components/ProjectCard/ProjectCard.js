import React from "react";
import "./ProjectCard.css";
import { colors } from "../../model/utility";

const ProjectCard = ({ project, onHandleClick }) => {
  return (
    <div className={"ProjectCard"} onClick={onHandleClick}>
      <div
        className="card"
        style={{ background: colors[project.colorIndex] }}
      />
      <span className={"title"}>{project.name}</span>
    </div>
  );
};

export default ProjectCard;
