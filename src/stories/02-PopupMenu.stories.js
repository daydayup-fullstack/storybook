import React, { useEffect, useState } from "react";
import PopupMenu from "../components/PopupMenu/PopupMenu";
import ColorArray from "../components/ColorArray/ColorArray";
import IconArray from "../components/IconArray/IconArray";
import ActionList from "../components/ActionList/ActionList";

export default {
  title: "Popup Menu",
  component: PopupMenu,
};

const styles = {
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  padding: "1.5rem",
  cursor: "pointer",
};

const Display = ({ children }) => {
  const [shouldShow, setShouldShow] = React.useState(false);
  const [anchor, setAnchor] = React.useState({ x: 0, y: 0 });

  const handleClick = (e) => {
    setShouldShow(true);
    setAnchor({
      x: e.target.offsetLeft,
      y: e.target.offsetTop,
      width: e.target.clientWidth,
    });
  };

  const dismiss = () => {
    setShouldShow(false);
  };

  return (
    <div style={styles}>
      <span className={"material-icons"} onClick={handleClick}>
        more_horiz
      </span>
      <span className={"material-icons"} onClick={handleClick}>
        more_horiz
      </span>
      {shouldShow && (
        <PopupMenu dismiss={dismiss} anchor={anchor}>
          {children}
        </PopupMenu>
      )}
    </div>
  );
};

export const colorAndIcon = () => (
  <Display>
    <ColorArray onChange={() => {}} />
    <IconArray />
  </Display>
);

export const actionList = () => (
  <Display>
    <ActionList />
  </Display>
);
