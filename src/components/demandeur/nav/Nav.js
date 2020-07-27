import React, { useState, useContext, useEffect } from 'react';
import './nav.css';
import { Link, useHistory } from 'react-router-dom'; 
import { Store } from '../../../AppContexts/FormContext';

export default function Nav(props){
    const {vars,setvars}=useContext(Store)
    const {selected}=vars;
        const history=useHistory();  

    useEffect(()=>{
        setvars({...vars,selected:history.location.pathname})
        console.log(history.location.pathname);
        
    },[history.location.pathname])
     
      
    return<div className="navbar"> 
                 <nav >
                  <ul>
                        <li>
                            <Link  to="/"  
                                   onClick={()=>setvars({...vars,selected:"/"})}
                                   className={selected==='/'?"selected":"unselect"} >Deployements
                            </Link>
                        </li>
                        {/* <li>
                            <Link to="/new-dep" 
                                   onClick={()=>setvars({...vars,selected:"/new-dep"})}
                                   className={selected==='/new-dep'? "selected":"unselect"} >New deployement
                            </Link>
                        </li> */}
                        <li>
                            <Link to="/login" 
                                   onClick={()=>setvars({...vars,selected:"/login"})}
                                   className={selected==='/login'?"selected":"unselect"} >Log out
                            </Link>
                        </li>
                   </ul>  
                  </nav> 
                    {/* <a href="">Log out</a> */}
           
          </div>
}