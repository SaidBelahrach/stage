import React, { useContext } from 'react'; 
import Product from './Product';
import VarsContext from './VarsContext';


export default function CartPage(props){ 
    const values=useContext(VarsContext);

    return<div className="product-page"> 
          { values.pSelected.length>0 ?  
                                values.pSelected.map( (p)=><Product products={p} key={p.name} />) 
                                :"you have not selected any product yet!"
          }
    </div>
}