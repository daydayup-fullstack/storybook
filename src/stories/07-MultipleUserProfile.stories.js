import React from "react";
import MultipleUserProfile from "../components/MultipleUserProfile/MultipleUserProfile";

export default {
    title: "MultipleUserProfile",
    component: MultipleUserProfile
};

const mock_multiple_users = [
    {
        id: "user-c8dc5864",
        firstName: "Scott",
        lastName: "Wang",
        avatar: "https://openinnovation.com.au/static/img/avatar-placeholder.png",
        colorIndex: 2
    },
    {
        id: "user-c8dc5865",
        firstName: "Yelin",
        lastName: "Liu",
        avatar: null,
        colorIndex: 5
    },
    {
        id: "user-c8dc5863",
        firstName: "Justing",
        lastName: "Wu",
        avatar: null,
        colorIndex: 3
    }
]

const mock_single_user = [
    {
        id: "user-c8dc5864",
        firstName: "Scott",
        lastName: "Wang",
        avatar: "https://openinnovation.com.au/static/img/avatar-placeholder.png",
        colorIndex: 6
    }
]


export const WhenMultipleUserExist = () => (
    <MultipleUserProfile multipleUsers={mock_multiple_users} projectName={"DayDayUp"} />
);

export const WhenSingleUserExist = () => (
    <MultipleUserProfile multipleUsers={mock_single_user} projectName={"DayDayUp"} />
);

