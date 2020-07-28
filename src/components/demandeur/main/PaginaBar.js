import React, { useEffect, useState } from 'react';

export default function PaginaBar(props){          //pagination indexing bar
    const [firstIndx, setfirstIndx] = useState(0);  
    const [totalBtn, settotalBtn] = useState(5);   
    const {pagVar,setpagVar}=props.val;
    const { arr,
            currentpg,
            nbBtnDisp,                                 
            nbItmDisp,                                 //number of items dispayed in every page 
         }=pagVar;
    useEffect(()=>{//total of buttons
        let nb_de_page=Math.ceil(arr.length/nbItmDisp);  
        settotalBtn(nb_de_page);   
        
    },[arr.length,pagVar.nbItmDisp])      
    
    
    return <div className="" style={{display:"flex",justifyContent:"center"}}>
                <button className="unselected"                                                               //previous indexes bar
                        onClick={()=>(firstIndx>0 && firstIndx-5>0)? 
                        setfirstIndx(firstIndx-nbBtnDisp):setfirstIndx(0)} 
                        style={{display:firstIndx===0? "none":"inline",maxHeight:"40px"}}
                > &#10094;</button>  
                { Array.from(Array(nbBtnDisp)).map((e,i)=>                                         //generate indexes without boucle 
                  (
                    <button className={currentpg===firstIndx+i? 'selected-index':'unselected'}       //pagina buttons 
                            hidden={(i+firstIndx)>=totalBtn} 
                            onClick={()=>setpagVar({...pagVar,currentpg:i+firstIndx})} 
                            key={i}
                            > {i+firstIndx} </button> 
                  ) )} 
                <button className="unselected"                                                              //next indexes bar
                        onClick={()=>firstIndx+5<totalBtn? setfirstIndx(firstIndx+5):null} 
                        style={{display:firstIndx+nbBtnDisp>=totalBtn? "none":"inline" }}
                  >&#10095;</button> 
            </div> 


}