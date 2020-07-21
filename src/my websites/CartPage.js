import React ,{useContext} from 'react'; 
import Product from './Product';


export default function CartPage(props){ 
    return<div className="product-page"> 
          { props.ps.length>0?  props.ps.map( (p)=><Product products={p} key={p.name} fremove={props.rm} />) 
                                :"you have not selected any product yet!" }
    </div>
}