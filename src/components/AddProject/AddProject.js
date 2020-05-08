import React from "react";
import "./AddProject.css";

const AddProject = ({ onHandleClick }) => {
  return (
    <div className="addProject" onClick={onHandleClick}>
      <div className="addProject__card">
        <div className="material-icons addProject__icon">
          add
        </div>
      </div>
      <span className="addProject__title">New Project</span>
    </div >
  )
}

export default AddProject;
