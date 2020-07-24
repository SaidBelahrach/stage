import React, { useState, useEffect, useContext } from 'react';
import { Vars } from '../Vars';

export default function Page(props){ 
    const [itms,setItms]=useState([]);  
    const values=useContext(Vars);   
    const val=props.val; 
    const firstItem=val.currenti*val.nbItmDisp; //first item in table
    useEffect(()=>{  //substracte the items to display from data
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
    // function handlin(e,i){      }
    function depEdit(e,i){
        //put data in its fields to modify it
        values.setraison(e.raison);
        values.setdescri(e.descri);
        values.setimpact(e.impact);
        values.defaults[i]=e.app;           //selected items in <CustomSelect/>
        values.defaults[i+1]=e.builder;
        values.defaults[i+2]=e.tester;
        values.defaults[i+3]=e.implementer; 
        
        values.setedited(i);                //the index of edited element
        values.setisEditin(true);           //tell the form whether to save new depl or save edit
        props.setsave(false);               //disp form and hide deplys list
 
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