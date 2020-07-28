import React, { useState } from "react";
import "./App.css";
import Form from "./components/demandeur/Form/Form.js";
import Main from "./components/demandeur/main/Main"; 
import Provider from "./AppContexts/FormContext";
import Nav from "./components/demandeur/nav/Nav";
import { Route} from "react-router";
import { BrowserRouter, Link} from "react-router-dom";
import DepDetails from "./components/demandeur/DepDetails/DepDetails";

function App(props) { 
  return (
    <Provider>
        <BrowserRouter> 
            <Nav/>   
            <Link to="dep-details"/>
            <Route path='/dep-details' component={DepDetails}/> 
            <Route path='/' exact component={Main}/> 
            <Route path='/new-dep' component={Form}/>
        </BrowserRouter>
    </Provider>
  );
}
export default App;
