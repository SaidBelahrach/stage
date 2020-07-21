import React, { useContext } from 'react';     
import VarContext from './VarContext';

function Child2(props) { 
    // const value=useContext(VarContext);
    // console.log(value);
    return <div> 
            {/* <VarContext.Consumer>
            { ({var1,var2})=><>
                        <h2>{var2+"  "+var1}</h2>
                  </>}
           </VarContext.Consumer> */}
                 child 2
           </div>
} 
export default Child2; 