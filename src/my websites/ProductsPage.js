import React from 'react';  
import Product from './Product';
 
export default function ProductsPage(props){
   
    return<div className="product-page" >
                {props.products.map( (p)=><Product products={p} finc={props.ff} key={p.id} type="add"/> )}

          </div>
}