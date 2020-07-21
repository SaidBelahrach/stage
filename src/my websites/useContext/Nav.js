import React from 'react';
import {BrowserRouter,Link,Route} from "react-router-dom";
import ProductsPage from './ProductsPage';
import CartPage from './CartPage';
import HomePage from './HomePage';
 
export default function Nav(props){
    return <BrowserRouter>
                    <div className="text-light bg-dark "> 
                                <li className="navbar-brand fa fa-credit-card"><span className="pl-2">TeleStore</span></li>
                                <Link to="/" className="pr-4 h6">Home</Link>
                                <Link to={{pathname:"/products",state:"data"}} className="pr-4 h6">Products</Link>
                                <Link to="/cart" className="pr-4 h6">store <span className="badge badge-danger p-0">{props.nb}</span> </Link>
                    </div>
                                <Route path="/" exact component={HomePage}/>
                                <Route path="/products" component={ProductsPage }/>
                                <Route path="/cart" component={CartPage}/>
            </BrowserRouter>
}