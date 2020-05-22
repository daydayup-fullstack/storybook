import React from "react";
import SideMenuSection, {
  Favorites,
  Team,
} from "../components/SideMenuSection/SideMenuSection";
import { projects, users, team } from "../model/newModel";

export default {
  title: "SideMenu Sections",
  component: SideMenuSection,
};

export const favorites = () => (
  <SideMenuSection>
    <Favorites projects={projects} />
  </SideMenuSection>
);

export const teamSection = () => (
  <SideMenuSection>
    <Team projects={projects} team={team} />
  </SideMenuSection>
);
