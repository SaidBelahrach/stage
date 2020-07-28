import React, { useState } from "react";
import "./CustomSelect.css";

export default function CustomSelect(props) { 
  const { vars, setvars ,apps} = props.values;
  const [collapse,setcolla]=useState(false);  
  
  return (
      <div className="container">
          <div className="custom-select ">
            <input type="radio" 
                   name={apps[0]} 
                   onClick={(e)=>setcolla(!collapse)}  readOnly
                   checked={collapse}/>
            <span className="placeholder">
                choisir ... 
                <span hidden={collapse}>&#9660;</span>
                <span hidden={!collapse}>&#9650;</span>
            </span>
            {apps.map((e, i) => (
              <label className="option" key={e + i}>
                <input
                  type="radio"
                  name={apps[0]}
                  defaultChecked={props.default === apps[i]}
                  onClick={(e)=>setcolla(!collapse)} 
                />
                <span className="title" onClick={() => setvars({...vars,app:e })}>
                  {e}
                </span>
              </label>
            ))}
          </div>
      </div>
  );
}
