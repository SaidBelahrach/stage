import React, { useState, useEffect, useContext } from 'react' 
import  './style.css';  
import PaginaBar from './PaginaBar';                                            //navigation bar that contain pages indexes
import Page from './Page';                                                      //page that contains list of deployements
import { Vars } from '../Vars';                                                 //store des variables

export default function Mypagination(props){ 
    const [arr, setarr] = useState([]);                                         /*data to display  */
    const [currenti, setcurrenti] = useState(0);                                //index of current page 
    const [nbBtnDisp, senbBtnDisp] = useState(5);   
    const [nbItmDisp, setnbItmDisp] = useState(5);                              //number of items dispayed in every page 
    const [dataLen, setdataLen] = useState(0);                                  //data length 
    const val=useContext(Vars); 
    useEffect(()=>{                                   
        setarr(val.deploys);   
        setdataLen(val.deploys.length)  
    },[val.deploys])      
    
    const val2PaginaBar={dataLen,nbBtnDisp,nbItmDisp,currenti,setcurrenti };    //vars passed to PaginaBar
    const val2Page={arr,setarr,currenti,nbItmDisp,setdataLen};                  //vars passed to Page
    return <div className="page">  
                <Page val={val2Page} setsave={props.setsave}/>  
                <PaginaBar val={val2PaginaBar} />                      

           </div>
} 