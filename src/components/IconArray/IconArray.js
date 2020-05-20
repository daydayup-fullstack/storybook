import React from "react";
import "./IconArray.css";

const iconNames = [
  "radio_button_checked",
  "whatshot",
  "poll",
  "emoji_objects",
  "fireplace",
  "storefront",
  "spa",
  "event_note",
  "money",
  "terrain",
  "tag_faces",
  "flash_on",
  "security",
  "folder",
  "format_quote",
  "weekend",
  "send",
  "archive",
  "next_week",
  "chat",
  "track_changes",
  "pets",
  "store",
  "extension",
  "done_outline",
];

const IconArray = () => {
  return (
    <div className="IconArray">
      <div className="content">
        {iconNames.map((iconName, index) => {
          return (
            <span key={index} className={"material-icons"}>
              {iconName}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default IconArray;
