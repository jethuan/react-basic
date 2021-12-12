import { useEffect, useState } from "react";
import "./App.scss";
import avatar from "../img/avatar.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginForm from "../component/LoginForm";
import HelloWorld from "../component/Welcom";
import productApi from "../api_advance/productApi";
import Clock from "../component/LifeCycle";
import MyComponent from "./example/MyComponent";

import ConditionRender from "../component/Conditional_Render";
import Wcom from "../component/state";
import MyComponentV2 from "./example/PropdMycomponent_childComponent/Mycom";
import TodoList from "./Todolist/TodoList";
import Nav from "./example/navigation/nav";
import Home from "./example/Home";
import About from "./example/About";
import ListUser from "../api_basic/ListUser";
import DetailUser from "../api_basic/detailuser";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function hello(name) {
  return "hello" + name;
}

function Text() {
  let name = "trung tam JS";
  const user = { name: "Jet Huan", id: 2 };
  return (
    <div
      className="div-todoList"
      // style={{ background: "green", border: "1px solid red" }}
    >
      {/* <p className="smallText"> Helloo </p>{" "}
      <button
        onClick={() => {
          alert("HUAN");
        }}
      >
        Click Me name
      </button>
      <p> {hello("JS JET")} </p>{" "}
      <p style={{ color: "yellow", fontSize: 50 }}> Yeloow </p>
      <p>
        <HelloWorld username="Huan" />
      </p> */}
      {/* <LoginForm hi={sayHi} />
      <Hello2 name={"b fcvbfgbfgb"} cssStyle="red" />
      <WellcomeAdmin name="admin" id="1" />
      <WellcomeAdmin name={user.name} id={user.id} />
      <WellcomeAdmin {...user} cssStyle="white" />
      <ConditionRender msg="ok" />
      user.id == 1 && <ConditionRender msg="ok" />
      <Wcom user={{ id: 1, name: "Huan" }} />
      <LoginForm hi={sayHi} />
      <Clock /> */}
      {/* {<MyComponent />} */}
      {/* <MyComponentV2 /> */}
      <TodoList />
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
      {/* <Hello2 {...props} /> */}
    </div>
  );
}

function Hello2(props) {
  const mystyle = {
    color: "red",
    backgroundColor: "DodgerBlue",
    padding: "5px",
    fontFamily: "Arial",
  };

  return (
    <div>
      <p style={mystyle}>style from variable</p>
      <p style={mystyle}>{props.name}</p>
      <p style={{ color: props.cssStyle }}>
        Using props cssStyle value {props.id}
      </p>
      <p onClick={props.hi}>Click</p>
      <p>{props.name}</p>
    </div>
  );
}

function App2() {
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
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* <img src={avatar} /> */}
          {/* <p className="todo-list-title">Todo List - Jet Huan</p> */}
          {/* <TodoList /> */}
          <Nav />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <TodoList />
            </Route>
            <Route path="/about">
              <MyComponentV2 />
            </Route>
            <Route path="/users" exact>
              <ListUser />
            </Route>
            <Route path="/users/:id">
              <DetailUser />
            </Route>
          </Switch>
        </header>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </Router>
  );
}

export default App;
