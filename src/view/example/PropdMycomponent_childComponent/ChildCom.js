import { Component } from "react";
import "./job-form.scss";

export default class ChildCom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      salary: "",
    };
  }
  valueTittle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  valueSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };
  submitOnchange = (event) => {
    event.preventDefault();

    this.props.submitPushJobArr({
      id: Math.floor(Math.random() * 100),
      title: this.state.title,
      salary: this.state.salary,
    });
    console.log("log ra thu xem", this.state);
    this.setState({
      title: "",
      salary: "",
    });
  };

  render() {
    return (
      <form>
        <div className="job-container">
          <label className="job-title">Job title</label>
          <input
            type="text"
            value={this.state.title}
            onChange={this.valueTittle}
          ></input>
        </div>
        <div className="job-container">
          <label className="job-salary">Salary</label>
          <input
            type="text"
            value={this.state.salary}
            onChange={this.valueSalary}
          ></input>
        </div>
        <div className="btn">
          <button onClick={this.submitOnchange}>Add Job</button>
        </div>
      </form>
    );
  }
}
