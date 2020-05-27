import React from "react";
import "./TeamDescription.css";

const TeamDescription = () => {
  const [desc, setDesc] = React.useState("");
  return (
    <div className="TeamDescription">
      <header>Description</header>
      <form>
        <textarea
          placeholder={"Click to add team description..."}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          onBlur={() => console.log(desc)}
        />
      </form>
    </div>
  );
};

export default TeamDescription;
