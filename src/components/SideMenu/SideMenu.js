import "./SideMenu.css";
import React, { useState } from "react";

const SideMenu = () => {
  const [shouldCollapse, setShouldCollapse] = useState(false);

    return (
        <div className="container">
            <section className={"left"}>
                <header>
                    <div>Logo</div>
                    <span className="material-icons" onClick={() => setShouldCollapse(true)}>menu_open</span>
                </header>
            </section>
            <section className={`right ${shouldCollapse ? "collapse" : "expand"}`}>
                <header>
                    <div className="title" onClick={() => setShouldCollapse(false)}>
                        {shouldCollapse && <span className={"material-icons icon"}>menu</span>}
                        <h2>Home</h2>
                    </div>

                    <div>Right</div>
                </header>
                <div className="content"/>
            </section>
        </div>
    );
};

export default SideMenu;
