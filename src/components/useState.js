import React,{useState} from 'react';

function HooksTest(props){
    const [name, setName] = useState("Said"); 
    const [active,setActive]=useState(true);
    return <div>
                <h1>child:  {name}</h1> <br/>
                <input  value={name} onChange={(e)=>setName(e.target.value)}/><br/><br/>
                <button onClick={(e)=>props.fct(name)}>change parent name</button>

                <button onClick={(e)=>{e.target.style.backgroundColor= active? "red":"blue"; setActive(!active) } }>change bg</button>
          </div>
} 
export default HooksTest;