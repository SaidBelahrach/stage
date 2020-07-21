import React, { useState, useEffect } from 'react';

export default function Page(props){ 
    const [itms,setItms]=useState([]); 
    const val=props.val;
        
    const firstItem=val.pageIndex*val.nbItmDisp; 
    // const lastItem=val.nbItmDisp*(val.pageIndex+1);
    useEffect(()=>{ 
        const r=[...val.arr].splice(firstItem,val.nbItmDisp);
        setItms( r) 
       
    },[val.arr,val.current])
       
    function deleteItem(e,i){
        const cp=val.arr; 
        cp.splice(i,1);
        val.setarr(cp); 
        const r=[...val.arr].splice(firstItem,val.nbItmDisp);  //reload table
        setItms( r)
    }  
    function handlin(e,i){
        settxt(e.target.value)
        const cp=itms; 
        cp[i]=e.target.value;
        setItms(cp); 
        /*modify parent data also  */
        const cp1=val.arr;
        cp1[i+firstItem]=e.target.value; 
        val.setarr(cp1) 
        console.log(itms[i]);
        
        
    }
    const [edit,setedit]=useState(null);
    const [txt,settxt]=useState("edit");
    return<div className="pagina-tab">
                <table >
                    <thead style={{background:"teal",color:"#FFF"}}>
                        <tr> 
                           <th>id</th>
                           <th>Name</th>
                           <th>Date</th>
                           <th>Modify</th>
                        </tr> 
                    </thead>
                    <tbody>      
                            {itms.map((e,i)=><tr key={i} >
                                    <td>{firstItem+i}</td>    
                                   {i===edit? <td style={{display:"flex",padding:"11px 0px"}}>
                                                    <input onChange={(e)=>handlin(e,i)} 
                                                           value={itms[i]}  
                                                           style={{width:"100px",height:"30px"}}/>
                                                    <button onClick={(e)=>setedit(null)}>Save</button>
                                   </td>
                                   :<td>{e}</td> } 
                                    <td>{new Date().toLocaleTimeString()}</td>  
                                    <td>
                                        <button onClick={()=>deleteItem(e,i)} className="btn btn-danger p-0">Delete</button>
                                        <button onClick={()=>setedit(edit==null? i:null)}className="btn btn-info p-0 px-2">Edit</button>
                                    </td>      
                            </tr> )}  
                    </tbody>
                </table> 
          </div>

  
   
} 