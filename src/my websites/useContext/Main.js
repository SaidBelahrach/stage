import React,{useState} from 'react';   
import './style.css'; 
import './bootstrap.css'; 
import Nav from './Nav.js'; 
import products from './products.json';
import VarsContext from './VarsContext.js';

function Main(props) { 
    const [nbprod,setnb]=useState(0);
    const [pSelected, setpSelected] = useState([]);
    const [allProducts,setProducts]=useState(products);
    function fadd(i){  
            let arr=pSelected;
            var isExist=false;
            for(var j=0;j<arr.length;j++){
                if(i===arr[j].id)
                isExist=true; 
            }
            if(!isExist){
                arr.push(products[i-1]);
                setpSelected(arr);
                setnb(nbprod+1);
            } else alert("u already added this product") 
    }
    function fremove(name){  
           let arr=pSelected;
           for(var j=0;j<arr.length;j++){
             if(name===arr[j].name){
                arr.splice(j,1);
                setnb(nbprod-1);
             } 
           } 
           setpSelected(arr); 
    }
    return <div>
             <VarsContext.Provider value={{ nbprod,setnb,
                                            pSelected, setpSelected,
                                            allProducts,setProducts,
                                            fadd,fremove   
                                                }}>
               <Nav nb={nbprod}/>
             </VarsContext.Provider>
           </div>
}



export default Main;
