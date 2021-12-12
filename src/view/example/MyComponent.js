import { render } from "@testing-library/react";
import { Component, useState } from "react";
import ChildComponent from "./ChildComponent";
import ShowHide from "./Conditional_Output";
import AddComponent from "./AddComponent";
export default class MyComponent extends Component {
  state = {
    firstName: "",
    lastName: "",
    arrJobs: [
      { id: "abcJob1", title: "Developers", salary: "500" },
      { id: "abcJob2", title: "Testers", salary: "400" },
      { id: "abcJob3", title: "Project managers", salary: "1000" },
    ],
  };

  addNewJob = (job) => {
    console.log("check job from parent: ", job);
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };

  render() {
    return (
      <>
        {<AddComponent addNewJob2={this.addNewJob} />}
        {<ChildComponent arrJobs={this.state.arrJobs} />}
        {<ShowHide arrJobs={this.state.arrJobs} />}
      </>
    );
  }
}
