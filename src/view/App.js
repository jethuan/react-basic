import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginForm from "../component/LoginForm";
import HelloWorld from "../component/Welcom";
import productApi from "../api/productApi";
import Clock from "../component/LifeCycle";

import ConditionRender from "../component/Conditional_Render";
import Wcom from "../component/state";

function hello(name) {
  return "hello" + name;
}

function Text() {
  let name = "trung tam JS";
  const user = { name: "Jet Huan", id: 2 };
  return (
    <div
      className="App"
      style={{ background: "green", border: "1px solid red" }}
    >
      <p className="smallText"> Helloo </p>{" "}
      <button
        onClick={() => {
          alert("HUAN");
        }}
      >
        {" "}
        Click Me {name}{" "}
      </button>{" "}
      <p> {hello("JS JET")} </p>{" "}
      <p style={{ color: "yellow", fontSize: 50 }}> Yeloow </p>{" "}
      <p>
        <HelloWorld username="Huan" />
      </p>{" "}
      <LoginForm hi={sayHi} /> <Hello name="Using props" cssStyle="red" />
      <WellcomeAdmin name="admin" id="1" />
      <WellcomeAdmin name={user.name} id={user.id} />{" "}
      <WellcomeAdmin {...user} cssStyle="white" />
      {/* <ConditionRender msg="ok" /> */}
      {user.id == 1 && <ConditionRender msg="ok" />}
      {/* <Wcom user={{ id: 1, name: "Huan" }} /> */}
      <LoginForm hi={sayHi} />
      <Clock />
    </div>
  );
}

function sayHi() {
  alert("gfgfgfg");
}

function WellcomeAdmin(props) {
  //let style = props.cssStyle;
  return (
    <div>
      {" "}
      {/* <p>hellooooooo {props.name} {props.id}</p> */}{" "}
      <p style={{ color: props.cssStyle }}>
        {" "}
        hellooooooo css Style {props.name} {props.id}{" "}
      </p>{" "}
      <Hello {...props} />
    </div>
  );
}

function Hello(props) {
  const mystyle = {
    color: "red",
    backgroundColor: "DodgerBlue",
    padding: "5px",
    fontFamily: "Arial",
  };

  return (
    <div>
      {/* <p style={mystyle}>style from variable</p>
                        <p style={mystyle}>{props.name}</p> */}{" "}
      <p style={{ color: props.cssStyle }}>
        {" "}
        Using props cssStyle value {props.id}{" "}
      </p>{" "}
      {/* <p onClick={props.hi}>Click</p> */}{" "}
    </div>
  );
}

function App() {
  const [producList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 10,
        };
        const response = await productApi.getAll(params);
        console.log(response);
      } catch (error) {
        console.log("Fail to call API", error);
      }
    };
    fetchProductList();
  }, []);

  return <div> </div>;
}

export default Text;
//export default App
