import React from "react";
import MenuBar from "../components/MenuBar/MenuBar";
import { users } from "../model/newModel"

export default {
    title: "MenuBar",
    component: MenuBar
};


export const Normal = () => {
    return <MenuBar user={users.c8dc5864}/>;
};
