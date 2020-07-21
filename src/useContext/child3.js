import React, { useContext } from 'react';     
import VarContext from './VarContext';

function Child3(props) { 
    const value=useContext(VarContext);
    console.log(value);
    return <div> 
         
               <h2>{value.name}</h2>
               <button onClick={()=>value.setname('Saiiiiiid')}>change name</button>
                <br/>child 3
           </div>
} 
export default Child3; 