import React, { useState } from "react";
import "./PopupTooltip.css";
import { action } from "@storybook/addon-actions";

const PopupTooltip = () => {
  const [shouldShow, setShouldShow] = useState(false);

  return (
    <div className={"popup-tooltip"}>
      <div className="content">
        <ul>
          <li onClick={action("add a new task")}>
            <span className={"material-icons"}>check_circle_outline</span>
            <span>Task</span>
          </li>
          <li onClick={action("add a new project")}>
            <span className={"material-icons"}>list_alt</span>
            <span>Project</span>
          </li>

          <li onClick={action("add a new person")}>
            <span className={"material-icons"}>person_add</span>
            <span>Invite</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PopupTooltip;
