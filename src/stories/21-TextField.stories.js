import React from "react";
import TextField from "../components/TextField/TextField";

export default {
  title: "TextField",
  component: TextField,
};

export const text = () => {
  return <TextField />;
};

export const password = () => {
  return <TextField which={"password"} />;
};

export const email = () => {
  return <TextField which={"email"} />;
};
