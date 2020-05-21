import React from "react";
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
    title: "Profile",
    component: Profile,
};

// mock user for normal test
const user_1 = new User(
    generateId(),
    randomFirstName(),
    randomLastName(),
    randomAvatar(),
    generateRandomColorIndex()
)

// mock user for null test
const user_2 = new User(
    generateId(),
    randomFirstName(),
    randomLastName(),
    null,
    generateRandomColorIndex()
)


export const WithAvatar = () => {
    return <Profile user={user_1} />
}

export const WithoutAvatar = () => {
    return <Profile user={user_2} />
}
