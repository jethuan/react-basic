import React, { Component } from "react";
import "./Nav.scss";
import { Link, NavLink } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <div className="topnav">
        <NavLink to="/" activeClassName="active" exact={true}>
          Home
        </NavLink>
        <NavLink to="/todo">Todo</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/users">User</NavLink>
      </div>
    );
  }
}
