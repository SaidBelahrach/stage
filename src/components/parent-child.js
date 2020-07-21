import React,{useState} from 'react';
import './App.css';
import HooksTest from './useState.js';
import Style from "./tp_style.js";
  
function Parent() {
    const [name, setname] = useState("Belahrach")
    function hello(nom){
      setname(nom)
      console.log("hi from parent fct, new name is: "+nom); 
    }
    return <div>
              <Style/>
              <h1>parent: {name}</h1>
              <HooksTest name={name} fct={hello} />
          </div>
}
export default Parent;