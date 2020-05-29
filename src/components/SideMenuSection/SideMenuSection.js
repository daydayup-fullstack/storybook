import React from "react";
import "./SideMenuSection.css";
import { colors } from "../../model/utility";
import Profile from "../Profile/Profile";
import { users } from "../../model/newModel";

export const Favorites = ({ projects }) => {
  const [shouldExpand, setShouldExpand] = React.useState(true);
  const getProjectColor = (project) => ({
    backgroundColor: colors[project.content.colorIndex],
  });

  return (
    <>
      <header onClick={() => setShouldExpand(!shouldExpand)}>
        Favorites{" "}
        <span className={"material-icons"}>
          {shouldExpand ? "keyboard_arrow_up" : "keyboard_arrow_down"}
        </span>
      </header>
      <ul className={`projectList ${shouldExpand && "projectList--open"}`}>
        {projects.map((project) => (
          <li className={"project"} key={project.id}>
            <div
              className={"project__color"}
              style={getProjectColor(project)}
            />
            <span className={"project__name"}>{project.content.name}</span>
            <i
              className={"material-icons"}
              onClick={() => console.log("more actions")}
            >
              more_horiz
            </i>
          </li>
        ))}
      </ul>
    </>
  );
};

export const Team = ({ projects, team }) => {
  const getProjectColor = (project) => ({
    backgroundColor: colors[project.content.colorIndex],
  });

  return (
    <>
      <header className={"teamHeader"}>Daydayup</header>
      <ul className={"memberList"}>
        {team.members.map((id) => (
          <li key={id} className={"member"}>
            <Profile user={users[id]} />
          </li>
        ))}
      </ul>
      <ul className={`projectList`} style={{ display: "block" }}>
        {projects.map((project) => (
          <li className={"project"} key={project.id}>
            <div
              className={"project__color"}
              style={getProjectColor(project)}
            />
            <span className={"project__name"}>{project.content.name}</span>
            <i
              className={"material-icons"}
              onClick={() => console.log("more actions")}
            >
              more_horiz
            </i>
          </li>
        ))}
      </ul>
    </>
  );
};

const SideMenuSection = ({ children }) => {
  return (
    <div className={"SideMenuSection"}>
      <div className="SideMenuSection__content">{children}</div>
    </div>
  );
};

export default SideMenuSection;
