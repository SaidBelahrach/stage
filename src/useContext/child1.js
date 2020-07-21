import React from 'react';     
import Child2 from './child2';
import Child3 from './child3';

function Child1(props) { 
    
    return <div>
                 child 1
                 <Child2/>
                 <Child3/>
                 
           </div>
} 
export default Child1; 