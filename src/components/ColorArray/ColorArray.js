import React from "react";
import "./ColorArray.css";
import { action } from "@storybook/addon-actions";

const colors = ['#F6F8F9', '#E8384F', '#FD612C', '#FD9A00', '#EEC300', '#A4CF30', '#62D26F', '#37C5AB', '#20AAEA', '#4186E0', '#7A6FF0', '#AA62E3',  '#E362E3', '#EA4E9D', '#FC91AD', '#8DA3A6']

const ColorArray = ( ) => {
  return (
    <fieldset className="ColorPicker PotColorPicker-colorPicker">
        <legend className="ColorPicker-legend">Pick a color for Digital Team Management</legend>
        <div className="ColorPicker-cellsContainer">
            {colors.map(color => (
                <label style={{backgroundColor: color}} className="ColorPickerCell ColorPicker-cell ColorPickerCell--colorNone">
                    <input aria-label="none" className="Radio ColorPickerCell-radio" id="lui_91" name="ColorPickerCell-ColorPicker-0-none" type="radio" tabindex="0" value={color} />
                </label>
                )
            )}
        </div>
    </fieldset>
  );
};

export default ColorArray;
