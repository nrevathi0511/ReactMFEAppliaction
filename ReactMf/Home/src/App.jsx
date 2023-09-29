import React from "react";
import ReactDOM from "react-dom";
import Head from "./Container/Head";
import Foot from "./Container/Foot";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import "./index.css";
import CreateUser from "Remote/CreateUser";

import BulkUploadUser from "Remote/BulkUploadUser";
import EditUser from "Remote/EditUser";

const App = () => (
  
     <div>
    {/* <Head /> */}
    
   {/* <CreateUser/> */}

   {/* <BulkUploadUser/> */}

   {/* <EditUser /> */}
 <br/>
   {/* <Foot /> */}


   <Router>
    <div> 
<Head />


<Routes>
  <Route path="/" element={<CreateUser/>} />
    <Route path="/UploadUser" element={<BulkUploadUser/>} />
    <Route path="/EditUser" element={<EditUser/>} />
</Routes>
<br />
<Foot />
</div>
</Router>

    </div>
 
);

ReactDOM.render(<App />, document.getElementById("app"));




