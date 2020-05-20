import React from "react";
import "./PersonAssignment.css";
import { users } from "../../model/newModel";
import Profile from "../Profile/Profile";

const PersonAssignment = ({ team }) => {
  const persons = team.members.map((id) => users[id]);
  return (
    <div className={"PersonAssignment"}>
      <ul className={"List"}>
        {persons.map((person) => (
          <li className={"person"} key={person.id}>
            <Profile user={person} />
            <span className={"firstName"}>{person.firstName}</span>
            <span className={"email"}>{person.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonAssignment;
