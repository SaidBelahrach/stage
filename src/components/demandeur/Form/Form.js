import React, { useContext, useEffect,useState } from 'react'
import './Form.css'; 
import CustomSelect from './CustomSelect';
import { Vars } from '../Vars';

export default function Form(props){ 
    useEffect(() => {
         //fetch from API
    },[]);
     const apps=["Offres","Payements","Client Space","oncf.ma"] ;
     const builders=["Change Builder 1","Change Builder 3","Change Builder 3"]; 
     const testers=["Change tester 1","Change tester 2","Change tester 3"]; 
     const implementers=["Change Implementer 1","Change Implementer 2","Change Implementer 3"];

    if(localStorage.getItem("deploys")===undefined )  localStorage.setItem("deploys",""); 
//     function handleChange(e){   }
 
    const val=useContext(Vars);
    const {deploys, setdeploys,save,setsave,curr,setcurr,app, setapp,raison, setraison,
           impact, setimpact,tester, isTier, setisTier,tier, setTier,descri,setdescri,
           builder,setbuilder,settester,implementer, setimplementer,isEditin, setisEditin,
           edited, setedited ,defaults}= val;  
  
    function validate(e){ 
        e.preventDefault();  
        if(!isEditin){ 
              
               var date=new Date().toLocaleDateString();

               if(localStorage.getItem('N_ref')==null)  localStorage.setItem('N_ref',0);
                
               var N_ref=localStorage.getItem('N_ref') ,status="Nouveau";   
               N_ref++;
               localStorage.setItem('N_ref',N_ref);

              let dep= { N_ref,status,date,app,raison,descri,
                       impact,tier,builder, tester, implementer };

               // let dep={N_ref,status,date,app,raison,descri,impact,tier,builder,tester,implementer}; 
               
               let cp=deploys;
               cp.push(dep); 
               setdeploys(cp);     
               props.setsave(true); 
        }else{
            let dep=deploys[edited];
            let N_ref=deploys[edited].N_ref;
            let date=deploys[edited].date;
            let status=deploys[edited].status;

            dep={ N_ref,status,date,app,raison,descri,
            impact,tier,builder, tester, implementer };
            deploys[edited]=dep;
            console.log(dep);
            setisEditin(false); 
            props.setsave(true); 
        }
    } 
     
    return <div className="sign" >
               <h3 className="text-center">New Deployment</h3>
               <p className='err'>{}</p>
               <form name='f1'onSubmit={validate} > 
               
                    <p >Système ou CI objet du changement:</p> 
                    <CustomSelect data={apps} default={defaults[0]} setValue={setapp}/>

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

                    Change Builder <CustomSelect data={builders} default={defaults[1]} setValue={setbuilder}/>
                     Entité infra <input type="text"/* value={tier} onChange={(e)=>setTier(e.target.value)}*/ placeholder="Entité infra"/>
                       
                         <hr className="line"/>

                    Change Tester <CustomSelect data={testers} default={defaults[2]} setValue={settester}/>
                         Entité infra <input type="text"/* value={tier} onChange={(e)=>setTier(e.target.value)}*/ placeholder="Entité infra"/>
                    
                         <hr className="line"/>
                         
                    Change Implementer <CustomSelect data={implementers} default={defaults[3]} setValue={setimplementer}/>
                         Entité infra <input type="text"/* value={tier} onChange={(e)=>setTier(e.target.value)}*/ placeholder="Entité infra"/>
                    
                    <div className="savin">
                         <input id='btn' type="submit" onClick={(e)=>validate(e)} value="Save"/>
                    </div>
               </form>
 
           </div>
}