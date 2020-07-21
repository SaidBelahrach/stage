import React,{useState} from 'react';     
import Child1 from './child1';
import VarContext from './VarContext';

function Parent(props) { 
    const [name, setname] = useState("said")
    const [age, setage] = useState(24)
    return <div>
                 parent
                 <VarContext.Provider value={{name,setname,age,setage}}>
                 {/* <VarContext.Provider value={{"var1":1,"var2":name}}> */}
                         <Child1/>
                </VarContext.Provider>

           </div>
} 
export default Parent; 