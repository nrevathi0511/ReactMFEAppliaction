import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ClckEvnt from "./Component/ClickEvnt";


const App = () => (

  <div className="container">
    <ClckEvnt/>
    </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
