import React from "react";
import "./TaskStory.css";
import PopupInfo from "../PopupInfo/PopupInfo";

const TaskStory = () => {
  const what = "created";
  const when = "8 days ago";
  const who = "Scott";

  const When = ({ when }) => {
    const [shouldShow, setShouldShow] = React.useState(false);

    function onHover() {
      setShouldShow(true);
    }

    function dismiss() {
      setShouldShow(false);
    }

    return (
      <>
        <span className={"when"} onMouseOver={onHover} onMouseLeave={dismiss}>
          {when}
          <PopupInfo shouldShow={shouldShow}>{new Date().toString()}</PopupInfo>
        </span>
      </>
    );
  };

  const renderFormat = (who, when, what, from, to) => {
    switch (what) {
      case "attached":
        return (
          <>
            {who} attached. <When when={when} />
          </>
        );

      case "moved":
        return (
          <>
            {who} moved this task from "{from}" to "{to}". <When when={when} />{" "}
          </>
        );

      case "added":
        return (
          <>
            {who} added to {to}. <When when={when} />
          </>
        );

      case "renamed":
        return (
          <>
            {who} changed the name to "New Name". <When when={when} />
          </>
        );
      default:
        //"created"
        return (
          <>
            {who} created this task. <When when={when} />
          </>
        );
    }
  };

  return (
    <div className="TaskStory">
      {/*todo - replace the placeholder with Profile*/}
      <div className="TaskStory__profile" />
      <div className="TaskStory__content">
        <div className={"TaskStory__content__header"}>
          {renderFormat(who, when, what, "", "")}
        </div>

        <ul className={"TaskStory__content__extra"}>
          <li>{renderFormat(who, when, "attached", "", "")}</li>
          <li>{renderFormat(who, when, "renamed", "", "")}</li>
          <li>{renderFormat(who, when, "moved", "Backlog", "Sprint")}</li>
          <li>{renderFormat(who, when, "added", "", "Sprint")}</li>
        </ul>
      </div>
    </div>
  );
};

export default TaskStory;
