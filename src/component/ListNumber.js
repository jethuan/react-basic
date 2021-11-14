import React, { Component } from "react";

export default class ListNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: [1, 2, 3, 4, 45, 6, 7],
    };
  }

  render() {
    // let numberArray = this.state.number.map((items) => {
    //   return <li key={items}> {items}</li>;
    // });

    // return <ul>{numberArray}</ul>;
    //cách 2:
    return (
      <ul>
        {this.state.number.map((items) => {
          //return <li key="items">{items}</li>;
          //if sd func bên dưới
          return <ListItems number={items} key={items} />;
        })}
      </ul>
    );
  }
}
// tạo component con
function ListItems(props) {
  return <li>{props.number}</li>;
}
