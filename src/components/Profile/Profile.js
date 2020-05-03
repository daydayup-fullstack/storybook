import React from "react";
import "./Profile.css";
import { action } from "@storybook/addon-actions";

// the colors that can be used as the background-color of the avatar
const avatarBackground = [
  '#E8384F', '#F6F8F9', '#FD612C',
  '#FD9A00', '#EEC300', '#A4CF30',
  '#62D26F', '#37C5AB', '#20AAEA',
  '#4186E0', '#7A6FF0', '#AA62E3',
  '#E362E3', '#EA4E9D', '#FC91AD',
  '#8DA3A6'
]

function Profile({ user }) {
  return (
    user
      ? user.avatar
        ? <div
          className="profile"
          onClick={action("you just clicked the profile")}>
          <div className="profile__content">
            <img src={user.avatar} alt="avatar" />
          </div>
        </div>
        : <div
          className="profile"
          onClick={action("you just clicked the profile")}
          style={{ backgroundColor: avatarBackground[user.colorIndex] }}>
          <div className="profile__content">
            <span>
              {user.firstName.substr(0, 1).toUpperCase()}
              {user.lastName.substr(0, 1).toUpperCase()}
            </span>
          </div>
        </div>
      : null
  )
}

export default Profile;
