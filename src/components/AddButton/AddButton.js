import React from "react";
import "./AddButton.css";
import { action } from "@storybook/addon-actions";

const AddButton = () => {
    return (
        <div className={"addButton"} onClick={action("button clicked")}>
            <span className={"material-icons add_icon"}>add</span>
        </div>
    );
};

export default AddButton;