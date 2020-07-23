import React, { useState, useEffect } from 'react';

export default function Page(props){ 
    const [itms,setItms]=useState([]); //
    const [edit,setedit]=useState(null);
    const [txt,settxt]=useState("edit");

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
    return<div className="pagina-tab">
                <table >
                    <thead >
                        <tr> 
                           <th>n</th>
                           <th>Name</th>
                           <th>Date</th>
                           <th>Status</th>
                           <th>edit</th>
                           {/* <th>Raison</th>
                           <th>Description</th>
                           <th>Impacts</th>
                           <th>Tier</th>
                           <th>Builder</th>
                           <th>Modify</th> */}
                        </tr> 
                    </thead>
                    <tbody>      
                        {itms.map((e,i)=>
                            <tr key={i} > 
                                    <td>{firstItem+i+1}</td>    
                                     <td>{e.app}</td>
                                     <td>{e.date}</td>
                                     <td>{e.status}</td>
                                {/*                                    
                                    <td>{e.raison}</td> 
                                    <td>{e.descri}</td>  
                                    <td>{e.impact}</td> 
                                    <td>{e.tier}</td> 
                                    <td>{e.builder}</td>  */}
                                    <td>
                                        <button onClick={()=>deleteItem(e,i)} className="btn btn-danger p-0">Delete</button> 
                                    </td>      
                            </tr> 
                        )}  
                    </tbody>
                </table> 
          </div>

  
   
} 