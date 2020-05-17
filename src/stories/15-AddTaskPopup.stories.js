import React from "react";
import AddTaskPopup from '../components/AddTaskPopup/AddTaskPopup'
import Profile from "../components/Profile/Profile";
import { User } from "../model/model";
import {
    generateId,
    randomFirstName,
    randomLastName,
    randomAvatar,
    generateRandomColorIndex
} from "../model/utility"

export default {
    title: "AddTaskPopup",
    component: AddTaskPopup,
};

// mock user for normal test
const user_1 = new User(
    generateId(),
    randomFirstName(),
    randomLastName(),
    randomAvatar(),
    generateRandomColorIndex()
)

export const Normal = () => <AddTaskPopup user={user_1}/>
// export const Test = () => <Profile user={user_1}/>