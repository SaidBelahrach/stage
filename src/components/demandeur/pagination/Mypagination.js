import React, { useState, useEffect } from 'react' 
import  './style.css';  
import PaginaBar from './PaginaBar';
import Page from './Page';

export default function Mypagination(props){ 
    const [arr, setarr] = useState([]);  /*data to display  */
    const [currenti, setcurrenti] = useState(0);    //index of current page 
    const [nbBtnDisp, senbBtnDisp] = useState(5);   // const [totalBtn, settotalBtn] = useState(5); 
    const [nbItmDisp, setnbItmDisp] = useState(5); //number of items dispayed in every page 
    const [dataLen, setdataLen] = useState(0); //data length
    useEffect(()=>{/*fetch data from api, db, json */
        // let r=[]; /*random data just for test  */
        // for (let i = 0; i <dataLen; i++) {
        //     r.push('element n '+i); 
        // }
        // setarr(r);  
        setarr(props.arr);   
        setdataLen(props.arr.length) 
        
    },[props.arr])      
    
    const val2PaginaBar={dataLen,nbBtnDisp,nbItmDisp,currenti,setcurrenti };
    const val2Page={arr,setarr,currenti,nbItmDisp,setdataLen}; 
    return <div className="page">  
                <Page val={val2Page}/>  
                <PaginaBar val={val2PaginaBar} /> 

           </div>
} 