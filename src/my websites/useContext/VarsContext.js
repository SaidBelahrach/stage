import { createContext } from 'react'; 


 const VarsContext=createContext({
                nbprod:0,
                pselected:[],
                fadd:()=>{},
                fremove:()=>{}
   });
   export default VarsContext;