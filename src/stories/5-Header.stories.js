import React from "react";
import { action } from "@storybook/addon-actions";
import SideMenuHeader from "../components/SideMenuHeader/SideMenuHeader";

export default {
  title: "SideMenu Header",
  component: SideMenuHeader,
  parameters: {
    backgrounds: [
      { name: "default", value: "#151b26", default: true },
      { name: "white", value: "white" },
    ],
  },
};

export const defaultView = () => (
  <SideMenuHeader
    iconName={"menu_open"}
    onHandleClick={action("collapse")}
  />
);
