import React from "react";
import TextField from "../components/TextField/TextField";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Button from "../components/Button/Button";

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

export const breadcrumb = () => {
  return (
    <div>
      <Breadcrumb />
      <Button text={"Continue"} />
    </div>
  );
};
