import React,{useState} from 'react'; 
import './bootstrap.css';
import Nav from './Nav.js';

export default function Home(props){
    const [nb,setnb]=useState(0);
    function fct(){
       setnb(nb+1);
    }
    
    return <div>
                <Nav nb={nb} fct={fct} />
            </div>
}