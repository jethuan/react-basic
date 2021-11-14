import React from "react";
import { Component } from "react";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      password: "",
      city: "HCM",
      about: "",
    };
  }

  setName = (event) => {
    this.setState({ name: event.target.value });
  };
  setUsername = (event) => {
    this.setState({ username: event.target.value });
  };
  setCity = (event) => {
    this.setState({ city: event.target.value });
  };
  setAbout = (event) => {
    this.setState({ about: event.target.value });
  };
  setPassword = (event) => {
    this.setState({ password: event.target.value });
  };

  submitRegister = () => {
    console.log(this.state);
  };
  //có thể viết chung lại

  setParams = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <form>
        <div>
          <input
            type="text"
            name="name"
            placeholder="enter name"
            value={this.state.name}
            onChange={this.setParams}
          ></input>
          <p>Enter: {this.state.name}</p>
        </div>
        <div>
          <input
            type="text"
            name="username"
            placeholder="enter username"
            value={this.state.username}
            onChange={this.setParams}
          ></input>
          <p>Enter: {this.state.username}</p>
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="enter password"
            value={this.state.password}
            onChange={this.setParams}
          ></input>
          <p> enter passs {this.state.password}</p>
        </div>
        <div>
          <select value={this.state.city} name="city" onChange={this.setParams}>
            <option value="HN">HN</option>
            <option value="SGN">SGN</option>
            <option value="DAD">DAD</option>
            <option value="VII">VII</option>
          </select>
          <p> City: {this.state.city}</p>
        </div>
        <div>
          <textarea
            placeholder="Enter your about"
            name="about"
            value={this.state.about}
            onChange={this.setParams}
          ></textarea>
          <p>about: {this.state.about}</p>
        </div>
        <div>
          <button onClick={this.submitRegister}>Register</button>
        </div>
      </form>
    );
  }
}
