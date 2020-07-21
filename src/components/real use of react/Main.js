import React, { useState } from 'react'
import Nav from './Nav' ; 
import Store from './store';
import  './style.css';
export default function Main(props){
    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");
    const [loged, setloged] = useState("false");

    return <div>
               <Store.Provider value={{ email, setemail,
                                        pass, setpass,
                                        loged, setloged
                                              }}>
                    <Nav/> 
               </Store.Provider>
            </div>
}




