import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Epics from "../components/epics/epics";
import AddProject from "../components/project_creation/add_project";
import { GlobalProvider } from "../context/GlobalState";


const RouteConfig = () =>{
return (
    <div>
        <GlobalProvider>
       <Routes>
           <Route path="/"  element={<AddProject/>} exact></Route>
           <Route path="/projects"  element={<AddProject/>} exact></Route>
           <Route path="/epics" element={<Epics/>} exact></Route>
       </Routes>
       </GlobalProvider>
    </div>
 )
}

export default RouteConfig;