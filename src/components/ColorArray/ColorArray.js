import React from "react";
import "./ColorArray.css";

const colors = {
  none: "#F6F8F9",
  red: "#E8384F",
  orange: "#FD612C",
  yellowOrange: "#FD9A00",
  yellow: "#EEC300",
  yellowGreen: "#A4CF30",
  green: "#62D26F",
  blueGreen: "#37C5AB",
  aqua: "#20AAEA",
  blue: "#4186E0",
  indigo: "#7A6FF0",
  purple: "#AA62E3",
  magenta: "#E362E3",
  hotPink: "#EA4E9D",
  pink: "#FC91AD",
  coolGray: "#8DA3A6",
};

const ColorArray = ({ onChange }) => {
  return (
    <div className="ColorPicker PotColorPicker-colorPicker">
      <div className="ColorPicker-cellsContainer">
        {Object.entries(colors).map(([name, color]) => [
          <input
            key={name}
            className="ColorPickerCell-radio"
            type="radio"
            value={color}
            name="colorArray"
            id={name}
            onChange={onChange}
          />,
          <label
            key={`label-${name}`}
            className={`ColorPickerCell ColorPickerCell--${name}`}
            htmlFor={name}
          />,
        ])}
      </div>
    </div>
  );
};

export default ColorArray;
