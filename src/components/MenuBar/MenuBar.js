import React, { useState } from "react";
import "./MenuBar.css";
import SideMenuHeader from "../SideMenuHeader/SideMenuHeader";
import MultipleUserProfile from "../MultipleUserProfile/MultipleUserProfile";
import { users } from "../../model/newModel"
import AddButton from "../AddButton/AddButton"
import Profile from "../Profile/Profile"

const MenuBar = ({user}) => {
    const [shouldCollapse, setShouldCollapse] = useState(false);

    const onCollapse = () => setShouldCollapse(true);
    const onExpand = () => setShouldCollapse(false);
    const mock_multiple_users = [users.c8dc5864, users.b803c8e6, users["8ddb8913"]]
    return (
        <div className="container">
            <section className={"left"}>
                <SideMenuHeader iconName={"menu_open"} onHandleClick={onCollapse} />
            </section>
            <section className={`right ${shouldCollapse ? "collapse" : "expand"}`}>
                <header className={"content-header"}>
                    <div className="title">
                        {shouldCollapse && (
                            <span className={"material-icons icon"} onClick={onExpand}>
                                menu
                            </span>
                        )}
                        <div className="sprintContainer">
                            <div className="sprint"></div>
                            <h3>Sprint</h3>
                            <span className="material-icons">
                                keyboard_arrow_down
                            </span>
                            <span className="material-icons">
                                info
                            </span>
                            <span className="material-icons">
                                star_border
                            </span>
                            <span>
                                <MultipleUserProfile multipleUsers={mock_multiple_users} projectName={"DayDayUp"} />
                            </span>
                            <span>
                                <span className="material-icons">
                                    search
                                </span>
                                <input placeholder='Search' />
                            </span>
                            <span>
                                <AddButton />
                            </span>
                            <span class="material-icons question">help_outline</span>
                            <button>
                                Upgrade
                            </button>
                            <span>
                                <Profile user={user}/>
                            </span>
                        </div>
                    </div>

                    {/* <div className={"more-content"}></div> */}
                </header>
                <div className="content">
                    -- Put your content here --
        </div>
            </section>
        </div>
    );
};

export default MenuBar;

