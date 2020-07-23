import React, { useState, useEffect, useContext } from 'react';
import { Vars } from '../Vars';

export default function Page(props){ 
    const [itms,setItms]=useState([]); //
    const [edit,setedit]=useState(null);
    const [txt,settxt]=useState("edit"); 
    const values=useContext(Vars);  
 
    const val=props.val; 
    const firstItem=val.currenti*val.nbItmDisp; //first item in table
    useEffect(()=>{  //substracte items to display from data
        const r=[...val.arr].splice(firstItem,val.nbItmDisp); 
        setItms( r) ; 
        
    },[val.arr,val.currenti])
       
    function deleteItem(e,i){ 
        if(window.confirm('are u sure u wanna delete this item?')){
                const cp=val.arr; 
                cp.splice(i,1);
                val.setarr(cp); 
                const r=[...val.arr].splice(firstItem,val.nbItmDisp);  //reload itms[]
                setItms( r)
                val.setdataLen(val.arr.length)  
        } 
    }  
    function handlin(e,i){
        settxt(e.target.value)    
        itms[i]=e.target.value; 
        /*update parent data also  */ 
        val.arr[i+firstItem]=e.target.value;   
    }
    function depEdit(e,i){
        values.setraison(e.raison);
        values.setdescri(e.descri);
        values.setimpact(e.impact);
        values.defaults[i]=e.app; //selected items in <CustomSelect/>
        values.defaults[i+1]=e.builder;
        values.defaults[i+2]=e.tester;
        values.defaults[i+3]=e.implementer; 
        
        values.setedited(i);
        values.setisEditin(true);
        props.setsave(false);
 
    }
    return<div className="pagina-tab">
                <table >
                    <thead >
                        <tr> 
                           <th>N° RFC</th>
                           <th>Name</th>
                           <th>Date</th>
                           <th>Status</th>
                           <th>edit</th> 
                        </tr> 
                    </thead>
                    <tbody>      
                        {itms.map((e,i)=>
                            <tr key={i} > 
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