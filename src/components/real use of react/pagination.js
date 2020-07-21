import React, { useState, useEffect } from 'react' 
import  './style.css'; 

export default function Pagination(props){
    const [arr, setarr] = useState([]); 
    const [pageIndex, setpageIndex] = useState(0); 
    const [totalBtn, settotalBtn] = useState(5); 
    const [nbItmDisp, setnbItmDisp] = useState(6); 
    const [current, setcurrent] = useState(1);  
    useEffect(()=>{
        let r=[];
        for (let i = 0; i <68; i++) {
            r.push('element n '+i); 
        }
        setarr(r); 
        
        let nb_de_page=Math.ceil(r.length/nbItmDisp); 
        settotalBtn(nb_de_page)
        
        document.getElementsByClassName('list-group-item')[current].style.backgroundColor="#006622";
    },[])    
   /* const indexOfFirstItm=current*nbItmDisp;
    const indexOfLastItm=indexOfFirstItm-nbItmDisp;
    const currentpageItms=arr.splice(indexOfFirstItm,nbItmDisp) */
    useEffect(()=>{
     // document.getElementsByClassName('list-group-item')[current].style.backgroundColor="green";
    })
    function currentPage(e,i){ 
          var btns=document.getElementsByClassName('list-group-item'); 
          setcurrent(i) 
          for(let j=1;j<btns.length-1;j++){ 
               if(j===i+1)  btns[i+1].style.backgroundColor="#006622"; 
               else       btns[j].style.backgroundColor="white";   
          } 
          setpageIndex(i+FirstItmInPage); 
    }

    function next(){
         if(FirstItmInPage+5<totalBtn)
             setFirstItmInPage(FirstItmInPage+5)  
         var btns=document.getElementsByClassName('list-group-item');
         for(let i=1;i<btns.length-1;i++){
                  btns[i].style.backgroundColor="white";
         } 
    }

    function prev(){
     if(FirstItmInPage>0 && FirstItmInPage-5>0) setFirstItmInPage(FirstItmInPage-5) 
     else setFirstItmInPage(0)
       var btns=document.getElementsByClassName('list-group-item');
     for(let i=1;i<btns.length-1;i++){
              btns[i].style.backgroundColor="white";
     }


}
     
    const [FirstItmInPage, setFirstItmInPage] = useState(0); 
    return <div className="page">  
                    <Page arr={arr} pageIndex={pageIndex} nbItmDisp={nbItmDisp}/> 
              
               <div className=" list-group flex-row " style={{display:"flex",justifyContent:"center"}}>
                  
                    <button className="list-group-item text-info px-2 py-0" onClick={prev} style={{maxHeight:"40px"}}> &#10094;</button> 
                   
                    { Array.from(Array(5)).map((e,i)=>
                     (
                         <button className="list-group-item text-info p-2 py-0"
                                 hidden={(i+FirstItmInPage)>=totalBtn} 
                                 onClick={(e)=>currentPage(e,i)} 
                                 key={i} 
                                 style={{maxWidth:"50px",maxHeight:"40px"}}>  {(i+FirstItmInPage)<totalBtn? i+FirstItmInPage:null} </button>
                     ) )}
                  
                    <button className="list-group-item text-info px-2 py-0" onClick={next} style={{maxHeight:"40px"}}>&#10095;</button> 
               </div>
             
           </div>
} 

function Page(props){ 
     let r=[]; 
     for (let i = props.pageIndex*props.nbItmDisp; i <props.nbItmDisp*(props.pageIndex+1); i++) {
          if(i>= props.arr.length) break;
          r.push(props.arr[i]); 
          
     } 
     return<div className="pagina">
                {r.map((e,i)=><div key={i}>{e}</div> )}
           </div>
    
}
