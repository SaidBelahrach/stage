import React, { useState,useContext } from 'react' 
import  './style.css';  
import PaginaBar from './PaginaBar';                                            //navigation bar that contain pages indexes
import DepList from './DepList';                                                      //page that contains list of deployements                                           
import ProgressBar from '../progress bar/ProgressBar';
import { Store } from '../../../AppContexts/FormContext';

export default function Main(props){  
    const {vars}=useContext(Store); 
    const [pagVar,setpagVar]=useState({arr:vars.deploys,                                      /*data to display  */
                                       currentpg:0,
                                       nbBtnDisp:5,                                 
                                       nbItmDisp:5,                                 //number of items dispayed in every page 
                                       dataLen:0,                                   //data length 
                                       switcher:false,
                                       status:"Test"
                                      })
      
    var steps= [ 'Nouveau', 'En attente', 'Evaluation','Evaluer', 'Rejeter CM/CAB', 
    'Realisation', 'Test', 'Implementer', 'attente revue', 'Fermer'   ];

    if(!pagVar.switcher){  //fix a small bugs
        var wrapper = document.getElementsByClassName('progress-bar-wrapper') ;
        for (let i = 1; i < wrapper.length; i++) {
              wrapper[i].parentNode.removeChild(wrapper[i]);
            //   console.log("------clear-------------"); 
        } 
    } 
    return <div className="page">  
            {!pagVar.switcher? <div>
                             <button onClick={()=>props.setsave(false)} style={{width:"50px"}}> New{/*&#10094;*/ }</button>
                             <DepList val={{pagVar,setpagVar}}
                                   arr={vars.deploys}
                                  setsave={props.setsave}/>  
                             <PaginaBar val={{pagVar,setpagVar}} />   
                        </div> :<div>
                            <button onClick={()=> 
                                    setpagVar( {...pagVar,ewitcher:false})} 
                                    style={{width:"50px"}}>&#10094;</button>
                            <ProgressBar steps={steps} current={steps[4]/*status*/} /> 
                              
                        </div>         
            }
           </div>
} 