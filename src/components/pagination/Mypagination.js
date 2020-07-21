import React, { useState, useEffect } from 'react' 
import  './style.css'; 
import ItemsPage from './ItemsPage.js';
import PaginaBar from './PaginaBar';
import Page from './Page';

export default function Mypagination(props){
    /*data to display  */
    const [arr, setarr] = useState([]); 
    /*pagination bar buttons */
    const [pageIndex, setpageIndex] = useState(0); 
    const [totalBtn, settotalBtn] = useState(5);  
    const [nbBtnDisp, senbBtnDisp] = useState(5);  
    /*page containing displayed items  */
    const [nbItmDisp, setnbItmDisp] = useState(10); //number of items dispayed in every page
    const [current, setcurrent] = useState(1);   //index of current page
    const [FirstItmInPage, setFirstItmInPage] = useState(0); 
    /*fetch data from api, db, json */
    useEffect(()=>{
        let r=[]; /*random data just for test  */
        for (let i = 0; i <60; i++) {
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
    // console.log(arr.filter(e=>e.length>10));
   

    const val2PaginaBar={totalBtn,nbBtnDisp,FirstItmInPage,setFirstItmInPage,currentPage};
    const val2Page={arr,setarr,pageIndex,nbItmDisp,current}; 
    return <div className="page">  
                <Page val={val2Page}/>  
                <PaginaBar val={val2PaginaBar} /> 

           </div>
} 