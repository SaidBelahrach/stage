import React, { useState, useEffect, useContext } from 'react' 
import  './style.css';  
import PaginaBar from './PaginaBar';
import Page from './Page';
import { Vars } from '../Vars';

export default function Mypagination(props){ 
    const [arr, setarr] = useState([]);  /*data to display  */
    const [currenti, setcurrenti] = useState(0);    //index of current page 
    const [nbBtnDisp, senbBtnDisp] = useState(5);   // const [totalBtn, settotalBtn] = useState(5); 
    const [nbItmDisp, setnbItmDisp] = useState(5); //number of items dispayed in every page 
    const [dataLen, setdataLen] = useState(0); //data length 
    const val=useContext(Vars); 
    useEffect(()=>{  
        setarr(val.deploys);   
        setdataLen(val.deploys.length)  
    },[val.deploys])      
    
    const val2PaginaBar={dataLen,nbBtnDisp,nbItmDisp,currenti,setcurrenti };
    const val2Page={arr,setarr,currenti,nbItmDisp,setdataLen}; 
    return <div className="page">  
                <Page val={val2Page} setsave={props.setsave}/>  
                <PaginaBar val={val2PaginaBar} /> 

           </div>
} 