import React, { useState, useEffect, useContext } from 'react' 
import  './style.css';  
import PaginaBar from './PaginaBar';                                            //navigation bar that contain pages indexes
import Page from './Page';                                                      //page that contains list of deployements
import { Vars } from '../Vars';                                                 //store des variables
import ProgressBar from '../progress bar/ProgressBar';

export default function Mypagination(props){ 
    const [arr, setarr] = useState([]);                                         /*data to display  */
    const [currenti, setcurrenti] = useState(0);                                //index of current page 
    const [nbBtnDisp, senbBtnDisp] = useState(5);   
    const [nbItmDisp, setnbItmDisp] = useState(5);                              //number of items dispayed in every page 
    const [dataLen, setdataLen] = useState(0);                                  //data length 
    const [switcher, setswitcher] = useState(false);
    const [status, setstatus] = useState("Test");
    const val=useContext(Vars); 
    useEffect(()=>{                                   
        setarr(val.deploys);   
        setdataLen(val.deploys.length)  
    },[val.deploys])      


    var steps= [ 'Nouveau', 'En attente', 'Evaluation','Evaluer', 'Rejeter CM/CAB', 
    'Realisation', 'Test', 'Implementer', 'attente revue', 'Fermer'   ];

    if(!switcher){  //fix a small bugs
        var wrapper = document.getElementsByClassName('progress-bar-wrapper') ;
        for (let i = 1; i < wrapper.length; i++) {
              wrapper[i].parentNode.removeChild(wrapper[i]);
              console.log("------clear-------------"); 
        }
       
    }

    const val2PaginaBar={dataLen,nbBtnDisp,nbItmDisp,currenti,setcurrenti };    //vars passed to PaginaBar
    const val2Page={arr,setarr,currenti,nbItmDisp,setdataLen,setswitcher,setstatus};                  //vars passed to Page
    return <div className="page">  
            {!switcher? <div>
                             <button onClick={()=>props.setsave(false)} style={{width:"50px"}}> New{/*&#10094;*/ }</button>
                             <Page val={val2Page} setsave={props.setsave}/>  
                             <PaginaBar val={val2PaginaBar} />   
                        </div> :<div>
                            <button onClick={()=>setswitcher(false)} style={{width:"50px"}}>&#10094;</button>
                            <ProgressBar steps={steps} current={steps[4]/*status*/} clear={switcher}/> 
                              
                        </div>
                                       
                }
           </div>
} 