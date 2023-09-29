import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import UserPage from "./Container/UserPage";
import Head from "../../Homeapp/src/Component/Head";
import Foot from "../../Homeapp/src/Component/Foot";

const App = () => (
  <div>
    <Head />
    <UserPage />
    <Foot />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
