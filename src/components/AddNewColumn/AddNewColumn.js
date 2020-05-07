import React from "react";
import "./AddNewColumn.css";

const AddNewColumn = () => {
  return (
    <div className={"addNewColumn"}>
      <div className={"header"}>
        <h2>
          <span className={"material-icons"}>add</span>Add column
        </h2>
        <div className={"list"} />
        {/*<input type="text" value={"Add Column"} />*/}
      </div>
    </div>
  );
};

export default AddNewColumn;
