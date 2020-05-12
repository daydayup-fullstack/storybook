import React from "react";
import "./CompleteButton.css";

const CompleteButton = ({ completed = false }) => {
  const [shouldCompleted, setShouldCompleted] = React.useState(completed);

  function handleClick() {
    setShouldCompleted(!shouldCompleted);
  }

  return (
    <button
      className={`complete-button ${shouldCompleted && "completed"}`}
      onClick={handleClick}
    >
      <div className="content">
        <span className="material-icons">check</span>
        {!shouldCompleted ? "mark completed" : "completed"}
      </div>
    </button>
  );
};

export default CompleteButton;
