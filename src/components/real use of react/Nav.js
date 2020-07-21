import React, { useContext } from 'react'
import {BrowserRouter as Router,Route, Link } from 'react-router-dom'
import Login from './Login' 
import Store from './store'
import Sign from './Sign';
import Mypagination from './Mypagination';

export default function Nav(props){
    const values=useContext(Store);
    function logout(){ 
        localStorage.setItem("loged",false);
        values.setloged("false"); 
    }
    return <div>
              <Router>
                <nav className="navbar bg-dark text-light">
                   <div className="badge border p-2">Real React using  </div>
                   <Link to="/Login" className="navbar-brand text-warning ">
                       {values.loged==="true"?
                                 <div className="text-success">{
                                    localStorage.getItem("user")}
                                    <button className="btn btn-danger ml-2 p-1 " onClick={logout}>Log out</button>
                                 </div>
                                 :<div>You need to login</div>}</Link>
                </nav>  
                {values.loged==="false" ? 
                                        (<Route path="/Login" component={Mypagination} />) 
                                 :<div className="text-center">welcome {localStorage.getItem("user")}</div>
                                         }
              </Router>  
            </div>
}