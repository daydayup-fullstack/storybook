import React, { useState, useEffect } from "react";
import CalendarPopup from "../components/CalendarPopup/CalendarPopup";
import CircularButton from "../components/CircularButton/CircularButton";
import { action } from "@storybook/addon-actions";

export default {
  title: "CalendarPopup",
  component: CalendarPopup,
};

export const defaultView = () => (
  <CalendarPopup
    handleSelectDate={(date) => action(`The submitted due date is ${date}`)}
  />
);

export const usageInCircularButton = () => {
  const [toggleCalendar, setToggleCalendar] = useState(false);

  useEffect(() => {
    // to close the tab, there is a problem here wait to be solved
    document.onclick = () => {
      setToggleCalendar(false);
    };
  }, [toggleCalendar]);

  return (
    <div
      style={{ width: "320px" }}
      onClick={(e) => {
        setToggleCalendar(true);
        e.nativeEvent.stopImmediatePropagation();
      }}
    >
      <CircularButton iconName={"calendar_today"} />
      {toggleCalendar && (
        <CalendarPopup
          handleSelectDate={(date) => {
            return action(`The submitted due date is ${date}`);
          }}
        />
      )}
    </div>
  );
};
