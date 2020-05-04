import "./SideMenu.css";
import React, { useState } from "react";
import SideMenuHeader from "../SideMenuHeader/SideMenuHeader";

const SideMenu = () => {
  const [shouldCollapse, setShouldCollapse] = useState(false);

  const onCollapse = () => setShouldCollapse(true);
  const onExpand = () => setShouldCollapse(false);

  return (
    <div className="container">
      <section className={"left"}>
        <SideMenuHeader iconName={"menu_open"} onHandleClick={onCollapse} />
      </section>
      <section className={`right ${shouldCollapse ? "collapse" : "expand"}`}>
        <header>
          <div className="title" onClick={onExpand}>
            {shouldCollapse && (
              <span className={"material-icons icon"}>menu</span>
            )}
            <h2>Home</h2>
          </div>

          <div>Right</div>
        </header>
        <div className="content" />
      </section>
    </div>
  );
};

export default SideMenu;
