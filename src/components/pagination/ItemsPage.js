import React from 'react';

export default function ItemsPage(props){ 
    let r=[]; 
    const firstItem=props.pageIndex*props.nbItmDisp; 
    const lastItem=props.nbItmDisp*(props.pageIndex+1);

    for (let i = firstItem; i<lastItem; i++) { //splice(firstItem,nbItemDisp)
         if(i>= props.arr.length) break;  //prevent loading empty div
         r.push(props.arr[i]);  
    } 
    return<div className="pagina">
               {r.map((e,i)=><div key={i} >
                                         <h5>{e}</h5> 
                                         {/* <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap"}}>
                                            <div style={{background:"teal",width:"100px"}}>IMAGE1</div>  
                                            <div style={{background:"teal",width:"100px"}}>IMAGE2</div> 
                                            <div style={{background:"teal",width:"100px"}}>IMAGE3</div>
                                         </div> */}
                             </div> )}
          </div>
   
} 