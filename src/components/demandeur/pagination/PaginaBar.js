import React, { useEffect, useState } from 'react';

export default function PaginaBar(props){  
    const [firstIndx, setfirstIndx] = useState(0);  
    const [totalBtn, settotalBtn] = useState(5);  
    const {dataLen,nbBtnDisp,nbItmDisp,currenti,setcurrenti }=props.val;

    useEffect(()=>{//total of buttons
        let nb_de_page=Math.ceil(dataLen/nbItmDisp);  
        settotalBtn(nb_de_page);  
    },[dataLen])     
    
    return <div className="" style={{display:"flex",justifyContent:"center"}}>
                <button className=" "                                                              //previous indexes bar
                        onClick={()=>(firstIndx>0 && firstIndx-5>0)? 
                        setfirstIndx(firstIndx-nbBtnDisp):setfirstIndx(0)} 
                        style={{display:firstIndx===0? "none":"inline",maxHeight:"40px"}}
                > &#10094;</button>  
                { Array.from(Array(nbBtnDisp)).map((e,i)=>                                         //generate indexes without boucle 
                  (
                    <button className={currenti===firstIndx+i? 'current-index':'unselected'}       //pagina buttons 
                            hidden={(i+firstIndx)>=totalBtn} 
                            onClick={()=>setcurrenti(i+firstIndx)} 
                            key={i} 
                            style={{width:"40px",maxHeight:"40px"}} > {i+firstIndx} </button> 
                  ) )} 
                <button className=" "                                                              //next indexes bar
                        onClick={()=>firstIndx+5<totalBtn? setfirstIndx(firstIndx+5):null} 
                        style={{display:firstIndx+nbBtnDisp>=totalBtn? "none":"inline",maxHeight:"40px"}}
                  >&#10095;</button> 
            </div> 


}