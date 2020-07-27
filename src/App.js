import React, { useState } from "react";
import "./App.css";
import Form from "./components/demandeur/Form/Form.js";
import Main from "./components/demandeur/main/Main"; 
import Provider from "./AppContexts/FormContext";
import Nav from "./components/demandeur/nav/Nav";
import { Route} from "react-router";
import { BrowserRouter} from "react-router-dom";

function App(props) {
  // const [save, setsave] = useState(false); //disp form or list of deployements
   
  return (
    <Provider>
        <BrowserRouter> 
            <Nav/>  
            <Route path='/' exact component={Main}/>
            <Route path='/new-dep' component={Form}/>
        </BrowserRouter>
    </Provider>
  );
}
export default App;
