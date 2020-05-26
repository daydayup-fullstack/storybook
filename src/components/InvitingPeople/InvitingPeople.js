import React from "react";
import "./InvitingPeople.css";

const InvitingPeople = () => {
  const [emails, setEmails] = React.useState("");
  const [startingProject, setStartingProject] = React.useState("");
  const team = "My Workspace";

  function handleSubmit(e) {
    e.preventDefault();

    console.log(e.target["email"].value);
    console.log(e.target["starting-project"].value);

    setEmails("");
    setStartingProject("");
  }

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
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="email">Email addresses</label>
            <textarea
              placeholder={"name@company.com, name@company.com, ..."}
              id={"email"}
              value={emails}
              onChange={(e) => setEmails(e.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="starting-project">Choose a starting project</label>
            <input
              type="text"
              id={"starting-project"}
              placeholder={"Start typing to add a project"}
              value={startingProject}
              onChange={(e) => setStartingProject(e.target.value)}
            />
          </div>

          <button className={"InvitingPeople__button Button"} type={"submit"}>
            Send
          </button>
        </form>
      </section>
    </div>
  );
};

export default InvitingPeople;
