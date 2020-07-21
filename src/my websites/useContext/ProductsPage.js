import React, { useContext } from 'react';  
import Product from './Product';
import VarsContext from './VarsContext';
 
export default function ProductsPage(props){
    const values=useContext(VarsContext);
   
    return<div className="product-page" >
                {values.allProducts.map( (p)=><Product products={p} key={p.id} type="add"/> )}

          </div>
}