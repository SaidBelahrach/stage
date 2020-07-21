import React, { useState, useEffect } from 'react' 
import  './style.css'; 

export default function Mypagination(props){
    /*data to display  */
    const [arr, setarr] = useState([]); 
    /*pagination bar buttons */
    const [pageIndex, setpageIndex] = useState(0); 
    const [totalBtn, settotalBtn] = useState(5);  
    const [nbBtnDisp, senbBtnDisp] = useState(5);  
    /*page containing displayed items  */
    const [nbItmDisp, setnbItmDisp] = useState(6); 
    const [current, setcurrent] = useState(1);   
    const [FirstItmInPage, setFirstItmInPage] = useState(0); 
    /*fetch data from api, db, json */
    useEffect(()=>{
        let r=[]; /*random data just for test  */
        for (let i = 0; i <68; i++) {
            r.push('element n '+i); 
        }
        setarr(r); 
        
        let nb_de_page=Math.ceil(r.length/nbItmDisp); 
        settotalBtn(nb_de_page)
        
        // document.getElementsByClassName('list-group-item')[current].style.backgroundColor="#006622";
    },[])     
    useEffect(()=>{
     // document.getElementsByClassName('list-group-item')[current].style.backgroundColor="green";
    })
    function currentPage(e,i){  //selected page in paginaBar
          var btns=document.getElementsByClassName('list-group-item'); 
          setcurrent(i) 
          for(let j=1;j<btns.length-1;j++){ 
               if(j===i+1)  btns[i+1].style.backgroundColor="#006622"; 
               else       btns[j].style.backgroundColor="white";   
          } 
          setpageIndex(i+FirstItmInPage); 
    } 
    const val={totalBtn,nbBtnDisp,FirstItmInPage,setFirstItmInPage,currentPage}; 
    return <div className="page">  
                <Page arr={arr} pageIndex={pageIndex} nbItmDisp={nbItmDisp}/> 
              
                <PaginaBar val={val} />
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
function PaginaBar(props){ 
    function next(){  //load next btns of paginaBar
            if(props.val.FirstItmInPage+5<props.val.totalBtn)
            props.val.setFirstItmInPage(props.val.FirstItmInPage+5)  
            var btns=document.getElementsByClassName('list-group-item');
            for(let i=1;i<btns.length-1;i++){
                    btns[i].style.backgroundColor="white";
            } 
    } 
    function prev(){
        if(props.val.FirstItmInPage>0 && props.val.FirstItmInPage-5>0) props.val.setFirstItmInPage(props.val.FirstItmInPage-5) 
        else props.val.setFirstItmInPage(0)
        var btns=document.getElementsByClassName('list-group-item');
        for(let i=1;i<btns.length-1;i++){
                btns[i].style.backgroundColor="white";
        } 
    }
    return <div className=" list-group flex-row " style={{display:"flex",justifyContent:"center"}}> 
                <button className="list-group-item text-info px-2 py-0" onClick={prev} style={{maxHeight:"40px"}}> &#10094;</button> 
            
                { Array.from(Array(props.val.nbBtnDisp)).map((e,i)=>
                (
                    <button className="list-group-item text-info p-2 py-0"
                            hidden={(i+props.val.FirstItmInPage)>=props.val.totalBtn} 
                            onClick={(e)=>props.val.currentPage(e,i)} 
                            key={i} 
                            style={{maxWidth:"50px",maxHeight:"40px"}}> {i+props.val.FirstItmInPage} </button> 
                ) )}
            
                <button className="list-group-item text-info px-2 py-0" onClick={next} style={{maxHeight:"40px"}}>&#10095;</button> 
            </div> 


}