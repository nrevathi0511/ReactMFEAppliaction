import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Head from "./Component/Head";
import Foot from "./Component/Foot";
import UserPage from "../../Remoteapp/src/Container/UserPage";

const App = () => (
  <div>
    <Head />
    <UserPage />
    <Foot />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
