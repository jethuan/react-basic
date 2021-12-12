import react, { Component } from "react";

import ChildCom from "./ChildCom";
import ShowHideJob from "./ShowHide";
import ShowJob from "./showJob";

export default class MyComponentV2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      job: [
        { id: 1, title: "IT", salary: "1000" },
        { id: 2, title: "FIN", salary: "2000" },
        { id: 3, title: "COM", salary: "3000" },
      ],
    };
  }
  pushJobArr = (jobs) => {
    console.log("check job from parent: ", jobs);
    let currentJob = this.state.job;
    currentJob.push(jobs);
    this.setState({
      job: currentJob,
    });
  };
  deleteAJob = (jobs) => {
    let currentJobs = this.state.job;
    currentJobs = currentJobs.filter((items) => {
      return items.id !== jobs.id;
    });
    this.setState({
      job: currentJobs,
    });
  };

  render() {
    return (
      <div>
        <ChildCom submitPushJobArr={this.pushJobArr} />
        <ShowJob showJob={this.state.job} deleteAJob={this.deleteAJob} />
        <ShowHideJob job={this.state.job} />
      </div>
    );
  }
}
