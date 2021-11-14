import React, { Component } from "react";

export default class ListUser extends Component {
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
    // let numberArray = this.state.number.map((items) => {
    //   return <li key={items}> {items}</li>;
    // });

    // return <ul>{numberArray}</ul>;
    //cách 2:
    return (
      <div>
        {this.state.users.map((items) => {
          //return <li key="items">{items}</li>;
          //if sd func bên dưới
          return <UserInfor user={items} key={items.id} />;
        })}
      </div>
    );
  }
}
// tạo component con
function UserInfor(props) {
  return (
    <div>
      <p> ID của bạn là: {props.user.id}</p>
      <p> Tên của bạn là:{props.user.name}</p>
      <p> Tổi của bạn là: {props.user.age}</p>
    </div>
  );
}
