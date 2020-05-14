import React from "react";
import CircularButton from "../components/CircularButton/CircularButton";
import { action } from "@storybook/addon-actions";

export default {
  title: "CircularButton",
  component: CircularButton,
};

const mockIconDate = "calendar_today";
const mockIconUser = "person_outline";

export const IconDate = () => (
  <CircularButton
    iconName={mockIconDate}
    onCircularButtonClick={action("you clicked the circular button")}
  />
);
export const IconUser = () => (
  <CircularButton
    iconName={mockIconUser}
    onCircularButtonClick={action("you clicked the circular button")}
  />
);
