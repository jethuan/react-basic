import { render } from "@testing-library/react";
import React, { Component, useState } from "react";
import ChildComponent from "./ChildComponent";

export default class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: [
        { id: "1", name: "jet", age: "2" },
        { id: "2", name: "abus", age: "2" },
        { id: "3", name: "boeing", age: "2" },
      ],
    };
  }

  render() {
    return (
      <>
        <ChildComponent name={"Jet"} age={32} arrStudent={this.state.student} />
      </>
    );
  }
}
