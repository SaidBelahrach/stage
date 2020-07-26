import React, { useState } from "react";
import "./App.css";
import Form from "./components/demandeur/Form/Form.js";
import Main from "./components/demandeur/pagination/Main"; 
import Provider from "./AppContexts/FormContext";

function App(props) {
  const [save, setsave] = useState(false); //disp form or list of deployements
  
  return (
    <Provider>
      {!save ? (
        <Form setsave={setsave} />
      ) : (
        <div>
          <Main setsave={setsave} />
        </div>
      )}
    </Provider>
  );
}
export default App;
