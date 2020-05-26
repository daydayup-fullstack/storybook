import React from "react";
import ModalWindow from "../components/ModalWindow/ModalWindow";
import InvitingPeople from "../components/InvitingPeople/InvitingPeople";
import Toast from "../components/Toast/Toast";

export default {
  title: "Modal Window",
  component: ModalWindow,
};

export const Inviting_People = () => (
  <ModalWindow>
    <InvitingPeople />
  </ModalWindow>
);

export const toast = () => <Toast />;
