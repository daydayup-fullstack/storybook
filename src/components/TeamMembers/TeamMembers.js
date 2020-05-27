import React from "react";
import "./TeamMembers.css";

const AddMemberButton = ({ children }) => {
  return (
    <div className={"AddMemberButton"}>
      <span className={"material-icons AddMemberButton__icon"}>add</span>
      <span className={"AddMemberButton__title"}>{children}</span>
    </div>
  );
};

const ProfilePlaceholder = () => {
  return <div className="ProfilePlaceholder" />;
};

const MemberItem = () => {
  return (
    <li className={"MemberItem"}>
      <ProfilePlaceholder />
      <div className="information">
        <span>Scott</span>
        <span>scotteau@gmail.com</span>
      </div>

      <span className={"material-icons closeIcon"}>close</span>
    </li>
  );
};

const TeamMembers = () => {
  return (
    <div className={"TeamMembers"}>
      <header>
        <span>Members</span>
      </header>
      <ul className="TeamMembers__list">
        <li>
          <AddMemberButton>Add member</AddMemberButton>
        </li>
        <MemberItem />
        <MemberItem />
        <MemberItem />
      </ul>
    </div>
  );
};

export default TeamMembers;
