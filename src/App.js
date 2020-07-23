import React, { useState} from 'react'; 
import './App.css';  
import Form from './components/demandeur/Form/Form.js';   
import Mypagination from './components/demandeur/pagination/Mypagination'; 
import Provider from './components/demandeur/Vars';

function App(props) {  
    const [save,setsave]=useState(false);
     
    return <div>    
            <Provider>
                  {!save?  <Form setsave={setsave}/>
                    :<div>
                        <button onClick={()=>setsave(false)} style={{width:"50px"}}> New{/*&#10094;*/ }</button>
                        <Mypagination setsave={setsave}/> 
                        </div>
                        
                    
                  } 
             </Provider> 
          
        
       
               
           </div>
} 
export default App; 