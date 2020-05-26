import React from "react";
import "./InvitingPeople.css";

const InvitingPeople = () => {
  const team = "My Workspace";

  return (
    <div className="InvitingPeople">
      <header>
        <span>Invite people to {team}</span>

        <span className={"material-icons close"}>close</span>
      </header>
      <section className="InvitingPeople__content">
        <span className={"InvitingPeople__content__hint"}>
          Your teammates will get an email that gives them access to your team.
        </span>
        <form>
          <div className="field">
            <label htmlFor="email">Email addresses</label>
            <textarea placeholder={"name@company.com, name@company.com, ..."} />
          </div>

          <div className="field">
            <label htmlFor="starting-project">Choose a starting project</label>
            <input type="text" placeholder={"Start typing to add a project"} />
          </div>

          <button className={"InvitingPeople__button Button"}>Send</button>
        </form>
      </section>
    </div>
  );
};

export default InvitingPeople;
