import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import Text from "./view/App";

import ListNumber from "./component/ListNumber";
import ListUser from "./component/ListUser";
import TabletUser from "./component/tabletUser";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    {/* <Text /> */}
    {/* <ListNumber /> */}
    {/* <ListUser /> */}
    <TabletUser />
    {/* <Register /> */}
    {/* <ListNumber /> */}
    <ListUser />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
