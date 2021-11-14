import React, { Component } from "react";

export default class TabletUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 1, name: "Jet", age: 11 },
        { id: 2, name: "Boeing", age: 12 },
        { id: 3, name: "Abus", age: 13 },
      ],
    };
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {this.state.users.map((items) => {
            return <UserInfor user={items} key={items.id} />;
          })}
        </tbody>
      </table>
    );
  }
}
// tạo component con
function UserInfor(props) {
  return (
    <tr>
      <td> {props.user.id}</td>
      <td> {props.user.name}</td>
      <td> {props.user.age}</td>
    </tr>
  );
}
