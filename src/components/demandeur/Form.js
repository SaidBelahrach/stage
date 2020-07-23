import React, { useContext, useEffect,useState } from 'react'
import './style.css';
import Vars from './Vars'
import CustomSelect from './custom select/CustomSelect';

export default function Form(props){
    const values=useContext(Vars);
    useEffect(() => {
         //fetch from API
    },[]);
     const apps=["Offres","Payements","Client Space","oncf.ma"] ;
     const builders=["Change Builder 1","Change Builder 3","Change Builder 3"]; 
     const testers=["Change tester 1","Change tester 2","Change tester 3"]; 
     const implementers=["Change Implementer 1","Change Implementer 2","Change Implementer 3"];
 
    const [deploys, setdeploys] = useState([]);  //{app:"" ,raison:"",description:"",impact:"",tier:""}
    const [app, setapp] = useState(apps[3]);
    const [raison, setraison] = useState("");
    const [descri, setdescri] = useState("");  
    const [impact, setimpact] = useState(""); 
    const [isTier, setisTier] = useState(false);
    const [tier, setTier] = useState("");
    const [builder, setbuilder] = useState("");
    const [tester, settester] = useState("");
    const [implementer, setimplementer] = useState("");
    if(localStorage.getItem("deploys")===undefined )  localStorage.setItem("deploys","");

    function handleChange(e){    

    }
 
    function validate(e){  
         e.preventDefault();  
         let dep={app,raison,descri,impact,tier}; 
         let cp=deploys;
         cp.push(dep);
         setdeploys(cp);    
     //     props.setsave(true); 
    } 
    console.log(builder+" , "+tester+" , "+implementer);
     
    return <div className="sign" >
               <h3 className="text-center">New Deployment</h3>
               <p className='err'>{}</p>
               <form name='f1'onSubmit={validate} > 
                    <p >Système ou CI objet du changement:</p> 
                    <CustomSelect data={apps} setValue={setapp}/>

                    <p >Raison du changement</p>
                    <input type="text" required value={raison} onChange={(e)=>setraison(e.target.value)} placeholder="Raison du changement"/>
                    
                    <p >Description du changement</p>
                    <textarea required value={descri} onChange={(e)=>setdescri(e.target.value)} placeholder="Description du changement"/>
                     
                    <p >Impact pour non changement </p>
                    <textarea required value={impact} onChange={(e)=>setimpact(e.target.value)} placeholder="Impact pour non changement"/>
               
                    <label >
                         <input type="checkbox" checked={isTier} onChange={(e)=>setisTier(e.target.checked)} />
                         L’implémentation du Change requiert l’implication d’un tier?
                    </label> 
                    <div className="show-tier" style={{display: isTier? "block":"none"}}>
                         <p>Nom du tier</p>
                         <input type="text" value={tier} onChange={(e)=>setTier(e.target.value)} placeholder="Nom de tier"/>
                    </div>

                         <hr className="line"/>

                    Change Builder <CustomSelect data={builders} setValue={setbuilder}/>
                     Entité infra <input type="text"/* value={tier} onChange={(e)=>setTier(e.target.value)}*/ placeholder="Entité infra"/>
                       
                         <hr className="line"/>

                    Change Tester <CustomSelect data={testers}  setValue={settester}/>
                         Entité infra <input type="text"/* value={tier} onChange={(e)=>setTier(e.target.value)}*/ placeholder="Entité infra"/>
                    
                         <hr className="line"/>
                         
                    Change Implementer <CustomSelect data={implementers}  setValue={setimplementer}/>
                         Entité infra <input type="text"/* value={tier} onChange={(e)=>setTier(e.target.value)}*/ placeholder="Entité infra"/>
                    
                    <div className="savin">
                         <input id='btn' type="submit" onClick={(e)=>validate(e)} value="Save"/>
                    </div>
               </form>
 
           </div>
}