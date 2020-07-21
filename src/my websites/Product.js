import React from 'react';   
import VarsContex from './VarsContext';

export default function Product(props){ 
    return<div>
                {/* <VarsContex.Consumer> */}
                        <div className="card"> 
                            <img src={require("./img/"+props.products.id+".jpg")}  alt="img..." className=""/>
                            <div className="card-body"> 
                                <h5 className="card-title">{props.products.name}</h5>
                                <p className="card-text">{props.products.info}</p>
                              {props.type=="add"? 
                                <a href="#" className="btn btn-primary" onClick={()=>props.finc(props.products.id)}>Add</a> 
                                : <a href="#" className="btn btn-primary" onClick={()=>props.fremove(props.products.name)}>remove</a>
                              }  
                            </div>
                        </div>
                {/* </VarsContex.Consumer> */}
          </div>
}