import React from "react";
import TeamMembers from "../components/TeamMembers/TeamMembers";
import TeamDescription from "../components/TeamDescription/TeamDescription";

export default {
  title: "Team",
  component: TeamMembers,
};

export const members = () => <TeamMembers />;

export const desc = () => <TeamDescription />;
