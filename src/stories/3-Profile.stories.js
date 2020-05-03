import React from "react";
import Profile from "../components/Profile/Profile";

export default {
    title: "Profile",
    component: Profile,
};


/**
 * unique id generator
 * @param {Number} length 
 */
function getID(length) {
    return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36);
}
const length = 10;


// mock avatars
const avatars = [
    'https://smk.org.uk/wp-content/uploads/avatar.jpg',
    'https://www.cartoonize.net/svgavatars/temp-avatars/svgA4969441256135618.png',
    'https://www.cartoonize.net/svgavatars/temp-avatars/svgA23287895074275755.png',
    'https://www.cartoonize.net/svgavatars/temp-avatars/svgA4158187637132811.png',
    'https://www.cartoonize.net/svgavatars/temp-avatars/svgA4283961938955121.png',
    'https://www.cartoonize.net/svgavatars/temp-avatars/svgA9485385284121917.png',
    'https://www.cartoonize.net/svgavatars/temp-avatars/svgA8781047972315394.png'
]

// mock user for normal test
const user_1 = {
    id: getID(length),
    firstName: 'yelin',
    lastName: 'liu',
    avatar: avatars[0],
    colorIndex: 1
}

// mock user for null test
const user_2 = {
    id: getID(length),
    firstName: 'yelin',
    lastName: 'liu',
    avatar: null,
    colorIndex: 6
}


export const WithAvatar = () => {
    return <Profile user={user_1} />
}

export const WithoutAvatar = () => {
    return <Profile user={user_2} />
}
