import React from "react";
import Starred from "../components/Starred/Starred";
import { action } from "@storybook/addon-actions";

export default {
  title: "Starred favorite",
  component: Starred,
};

export const defaultStar = () => (
  <Starred onHandleClick={(starValue) => console.log(starValue) } starred={true} />
);

  export const unStar = () => (
  <Starred onHandleClick={(starValue) => console.log(starValue) } starred={false} />
);
