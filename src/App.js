import React, { useState, useEffect } from 'react'; 
import './App.css';  
import Form from './components/demandeur/Form/Form.js';   
import Mypagination from './components/demandeur/pagination/Mypagination';

 
function App(props) { 
    const [save,setsave]=useState(false);
    const [deploys, setdeploys] = useState([]); 
    return <div>    
        
        {!save?  <Form setsave={setsave} deploys={deploys} setdeploys={setdeploys}/>
                 :<div>
                     <button onClick={()=>setsave(false)} style={{width:"30px"}}>&#10094; </button>
                     <Mypagination arr={deploys}/>
                           {/* { deploys.map((e,i)=>
                                                <h1 key={i}>{i +"-"+ e.app}</h1>
                                            )} */}
                     </div>
                     
                   
        }
               
           </div>
} 
export default App; 