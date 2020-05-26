import React from "react";
import ModalWindow from "../components/ModalWindow/ModalWindow";
import InvitingPeople from "../components/InvitingPeople/InvitingPeople";

export default {
  title: "Modal Window",
  component: ModalWindow,
};

export const modalWindows = () => (
  <ModalWindow>
    <InvitingPeople />
  </ModalWindow>
);
