import React, { Component } from "react";
import "./ProjectDetail.css";

export default class ProjectDetail extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      projectName: "",
      defaultView: "list",
      privacy: "private",
      description: null,
    };

    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleAddDescription = this.handleAddDescription.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
  }

  handleValueChange(e) {
    this.setState({
      projectName: e.target.value,
    });
  }

  handleRadioChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleAddDescription() {
    this.setState({
      description: " ",
    });
  }

  handleChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  render() {
    const { projectName, description } = this.state;
    return (
      <section className="projectDetail">
        <div className="projectDetail__nav">
          <div className="material-icons icon">arrow_back</div>
          <div className="material-icons icon">close</div>
        </div>
        <form className="projectDetail__form">
          <div className="projectDetail__title">
            <h2>Add Project Details</h2>
          </div>
          <div className="projectDetail__name">
            <label htmlFor="projectName" className="projectDetail__label">
              Project name
            </label>
            <br />
            <input
              className={projectName ? "" : "projectDetail__name-disabled"}
              type="text"
              name="projectName"
              value={projectName}
              onChange={this.handleValueChange}
            />
            <br />
            {description ? (
              <textarea
                className="projectDetail__description"
                placeholder="please input the description"
                onChange={this.handleChangeDescription}
                value={description}
              ></textarea>
            ) : (
              <button type="button" onClick={this.handleAddDescription}>
                Add a description
              </button>
            )}
          </div>
          <div className="projectDetail__defaultView">
            <label htmlFor="defaultView" className="projectDetail__label">
              Default view
            </label>
            <div className="projectDetail__radios">
              <input
                type="radio"
                name="defaultView"
                value="list"
                checked={this.state.defaultView === "list"}
                onChange={this.handleRadioChange}
              />
              <span className="material-icons icon">list_alt</span>
              <span>List</span>
            </div>
            <div className="projectDetail__radios">
              <input
                type="radio"
                name="defaultView"
                value="board"
                checked={this.state.defaultView === "board"}
                onChange={this.handleRadioChange}
              />
              <span className="material-icons icon">dashboard</span>
              <span>Board</span>
            </div>
          </div>
          <div className="projectDetail__privacy">
            <label htmlFor="privacy" className="projectDetail__label">
              Privacy
            </label>
            <div className="projectDetail__radios">
              <input
                type="radio"
                name="privacy"
                value="public"
                checked={this.state.privacy === "public"}
                onChange={this.handleRadioChange}
              />
              <span className="material-icons icon">people_outline</span>
              <span>public</span>
            </div>
            <div className="projectDetail__radios">
              <input
                type="radio"
                name="privacy"
                value="private"
                checked={this.state.privacy === "private"}
                onChange={this.handleRadioChange}
              />
              <span className="material-icons icon">perm_identity</span>
              <span>private</span>
            </div>
          </div>
          <div className="projectDetail__createProject">
            <button
              type="submit"
              onClick={this.props.onHandleClick}
              className={
                projectName ? "" : "projectDetail__createProject-disabled"
              }
            >
              Create project
            </button>
          </div>
        </form>
      </section>
    );
  }
}
