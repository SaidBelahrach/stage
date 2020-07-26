import React, { useState } from "react";
import "./CustomSelect.css";

export default function CustomSelect(props) {
  // const tab=["person 1","person 2","person 3","person 4"];
  const { vars, setvars ,data} = props;
  const [collapse,setcolla]=useState(false);

  return (
      <div className="container">
          <div className="custom-select ">
            <input type="radio" 
                   name={data[0]} 
                   onClick={(e)=>setcolla(!collapse)}  readOnly
                   checked={collapse}/>
            <span className="placeholder">
              choisir ... <span>&#9660;</span>
            </span>
            {data.map((e, i) => (
              <label className="option" key={e + i}>
                <input
                  type="radio"
                  name={data[0]}
                  defaultChecked={props.default === e}
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
