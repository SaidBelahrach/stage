import React from 'react';
import  './CustomSelect.css';

export default function CustomSelect(props){
 
    // const tab=["person 1","person 2","person 3","person 4"]; 
    const data=props.data;
    const setValue=props.setValue;


    return  <div className="custom-select "> 
            <input type="radio" name="option"/> 
            <span className="placeholder">choisir...</span>

            <label className="option">
                <input type="radio" name="option"/>
                {
                    data.map((e,i)=><span key={i} className="title" onClick={()=>setValue(e)}>
                                         {e}
                                    </span> 
                    )
                }
                
            </label>
            
        </div>

}