import React, { useState, useEffect, useContext } from 'react'; 
import { Store } from '../../../AppContexts/FormContext';

export default function DepList(props){  //deployements list
    const [itms,setItms]=useState([]);  
    const {vars,setvars } = useContext(Store);  
    const {pagVar,setpagVar}=props.val; 
    const {arr,nbItmDisp,currentpg}=pagVar;
    const firstItem=currentpg*nbItmDisp; //first item in table
    useEffect(()=>{  //substracte the items to display from data
        const r=[...arr].splice(firstItem,nbItmDisp); 
        setItms( r) ;   
        
    },[arr,currentpg]) 
       
    function deleteItem(e,i){  
        if(window.confirm('are u sure u wanna delete this item?')){
                const cp=arr; 
                cp.splice(i,1);
                setpagVar({...pagVar,arr:cp}); 
                const r=[...arr].splice(firstItem,nbItmDisp);  //reload itms[]
                setItms( r)
                setpagVar({...pagVar,dataLen:arr.length});  
        } 
    }   
    function depEdit(e,i){
        //put data in its fields to modify it
        
        setvars({...vars,app:e.app});
        setvars({...vars,raison:e.raison});
        setvars({...vars,descri:e.descri});
        setvars({...vars,impact:e.impact});           
        setvars({...vars,builder:e.builder});
        setvars({...vars,tester:e.tester});
        setvars({...vars,implementer:e.implementer}); 
        
        setvars({...vars,edited:i});         //the index of edited element
        setvars({...vars,isEditin:true});    //tell the form whether to save new depl or save edit
        setvars({...vars,tester:e.tester});  //disp form and hide deplys list 
        props.setsave(false);    
    }
    function depInfo(e){
        setpagVar({...pagVar,switcher:true});  //disp deployements info
        setpagVar({...pagVar,status:e.status});  
    }
    return<div className="pagina-tab">
                <table >
                    <thead >
                        <tr> 
                           <th>N° RFC</th>
                           <th>Application</th>
                           <th>Date</th>
                           <th>Statut</th>
                           <th>Modifier</th> 
                        </tr> 
                    </thead>
                    <tbody>      
                        {itms.map((e,i)=>
                            <tr key={i}  style={{cursor:"pointer"}} onClick={()=>depInfo(e)}> 
                                    <td>{e.N_ref}</td>    
                                    <td>{e.app}</td>
                                    <td>{e.date}</td>
                                    <td>{e.status}</td> 
                                    <td>
                                        <button onClick={()=>deleteItem(e,i)}>Delete</button> 
                                        <button onClick={()=>depEdit(e,i)} hidden={e.status!=="Nouveau"}>Edit</button> 
                                    </td>      
                            </tr> 
                        )}  
                    </tbody>
                </table> 
          </div>
} 