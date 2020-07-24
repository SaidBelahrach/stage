import React, { useState} from 'react'; 
import './App.css';  
import Form from './components/demandeur/Form/Form.js';   
import Mypagination from './components/demandeur/pagination/Mypagination'; 
import Provider from './components/demandeur/Vars';

function App(props) {  
    const [save,setsave]=useState(false);  //disp form or list of deployements
     
    return <Provider>
                  {!save?  <Form setsave={setsave}/>
                    :<div> 
                        <Mypagination setsave={setsave}/> 
                    </div>
                         
                  } 
           </Provider> 
              
} 
export default App; 