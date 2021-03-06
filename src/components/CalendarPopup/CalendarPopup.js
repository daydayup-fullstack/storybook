import React, { useState } from "react";
import "./CalendarPopup.css";
import {
  format,
  startOfMonth,
  subMonths,
  addMonths,
  subYears,
  addYears,
  getDaysInMonth,
  getDay,
  endOfMonth,
  setDate,
  getDate,
  isEqual,
} from "date-fns";
import { chunk } from "lodash";

const CalenderPopup = ({ handleSelectDate }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const setPreviousMonth = () => {
    const previousMonth = subMonths(selectedDate, 1);
    setSelectedDate(startOfMonth(previousMonth));
  };
  const setNextMonth = () => {
    const nextMonth = addMonths(selectedDate, 1);
    setSelectedDate(startOfMonth(nextMonth));
  };
  const setPreviousYear = () => {
    const previousYear = subYears(selectedDate, 1);
    setSelectedDate(startOfMonth(previousYear));
  };
  const setNextYear = () => {
    const nextYear = addYears(selectedDate, 1);
    setSelectedDate(startOfMonth(nextYear));
  };

  const generateMonth = () => {
    const daysInMonth = getDaysInMonth(selectedDate);
    const startWeekday = getDay(startOfMonth(selectedDate));
    const endWeekday = getDay(endOfMonth(selectedDate));
    const gridDays = chunk(
      [
        ...Array.from({ length: startWeekday }).fill(null),
        ...Array.from({ length: daysInMonth }, (_, i) =>
          setDate(selectedDate, i + 1)
        ),
        ...Array.from({ length: 6 - endWeekday }).fill(null),
      ],
      7
    );
    return gridDays;
  };

  return (
    <div className="calendarPopup">
      <div className="calendarPopup__title">
        <div className="calendarPopup__icons">
          <div
            className="calendarPopup__icons-container material-icons"
            onClick={setPreviousYear}
            role="button"
          >
            chevron_left
          </div>
          <div
            className="calendarPopup__icons-container material-icons"
            onClick={setPreviousMonth}
            role="button"
          >
            arrow_left
          </div>
        </div>
        <div className="calendarPopup__month" role="heading">
          <b>{format(selectedDate, "MMMM yyyy")}</b>
        </div>
        <div className="calendarPopup__icons">
          <div
            className="calendarPopup__icons-container material-icons"
            onClick={setNextMonth}
            role="button"
          >
            arrow_right
          </div>
          <div
            className="calendarPopup__icons-container material-icons"
            onClick={setNextYear}
            role="button"
          >
            chevron_right
          </div>
        </div>
      </div>
      <table className="calendarPopup__grid" role="grid">
        <thead>
          <tr role="row">
            <th
              className="calendarPopup__grid-header"
              role="columnheader"
              aria-label="Sunday"
            >
              <abbr title="Sunday">Su</abbr>
            </th>
            <th
              className="calendarPopup__grid-header"
              role="columnheader"
              aria-label="Monday"
            >
              <abbr title="Monday">Mo</abbr>
            </th>
            <th
              className="calendarPopup__grid-header"
              role="columnheader"
              aria-label="Tuesday"
            >
              <abbr title="Tuesday">Tu</abbr>
            </th>
            <th
              className="calendarPopup__grid-header"
              role="columnheader"
              aria-label="Wednesday"
            >
              <abbr title="Wednesday">We</abbr>
            </th>
            <th
              className="calendarPopup__grid-header"
              role="columnheader"
              aria-label="Thursday"
            >
              <abbr title="Thursday">Th</abbr>
            </th>
            <th
              className="calendarPopup__grid-header"
              role="columnheader"
              aria-label="Friday"
            >
              <abbr title="Friday">Fr</abbr>
            </th>
            <th
              className="calendarPopup__grid-header"
              role="columnheader"
              aria-label="Saturday"
            >
              <abbr title="Saturday">Sa</abbr>
            </th>
          </tr>
          {generateMonth().map((week, i) => (
            <tr className="calendarPopup__week" key={`week-${i}`} role="row">
              {week.map((day, i) =>
                day ? (
                  <td
                    className={`calendarPopup__cell${
                      isEqual(selectedDate, day) ? " active" : ""
                    }`}
                    key={`day-cell-${i}`}
                    onClick={() => setSelectedDate(day)}
                  >
                    {getDate(day)}
                  </td>
                ) : (
                  <td className="calendarPopup__empty" key={`day-cell-${i}`}>
                    &nbsp;
                  </td>
                )
              )}
            </tr>
          ))}
        </thead>
      </table>
      <button
        type="button"
        className="calendarPopup__btn"
        onClick={handleSelectDate(selectedDate)}
      >
        Done
      </button>
    </div>
  );
};

export default CalenderPopup;
