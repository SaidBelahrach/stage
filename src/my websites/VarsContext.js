import React, { createContext } from 'react'; 


 const VarsContex=createContext({
                nbprod:0,
                pselected:[],
                fadd:()=>{},
                fremove:()=>{}
   });
   export default VarsContex;