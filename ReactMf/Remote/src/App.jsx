import React from "react";
import ReactDOM from "react-dom";
import CreateUser from "./Component/CreateUser";
import EditUser from "./Component/EditUser";
import BulkUploadUser from "./Component/BulkUploadUser";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import "./index.css";
import Head from "Home/Head";
import Foot from "Home/Foot";


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




