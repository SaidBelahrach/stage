import React, { useContext } from 'react';    
import VarsContext from './VarsContext';

export default function Product(props){ 
  const values=useContext(VarsContext);
  
    return<div> 
                        <div className="card"> 
                            <img src={require("./img/"+props.products.id+".jpg")}  alt="img..." className=""/>
                            <div className="card-body"> 
                                <h5 className="card-title">{props.products.name}</h5>
                                <p className="card-text">{props.products.info}</p>
                                {props.type==="add"? 
                                  <button className="btn btn-primary" onClick={()=>values.fadd(props.products.id)}>Add</button> 
                                  :<button className="btn btn-primary" onClick={()=>values.fremove(props.products.name)}>remove</button>
                              }  
                            </div>
                        </div>
            
          </div>
}