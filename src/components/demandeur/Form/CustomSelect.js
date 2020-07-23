import React from 'react';
import  './CustomSelect.css';

export default function CustomSelect(props){
 
    // const tab=["person 1","person 2","person 3","person 4"]; 
    const data=props.data;
    const setValue=props.setValue;

    return  <div className="custom-select "> 
            <input type="radio" name={data[0]}/> 
            <span className="placeholder">choisir ... <span>&#9660;</span></span>
                    {
                        data.map((e,i)=>
                                <label className="option" key={e+i}>
                                <input type="radio" name={data[0]} defaultChecked={props.default===e} /> 
                                        <span className="title" onClick={()=>setValue(e)}>
                                            {e}
                                        </span>  
                                </label>
                        )
                    } 
           
            
        </div>

}