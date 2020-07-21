import React from 'react';

export default function PaginaBar(props){ 
    const val=props.val;
    function next(){  //load next btns of paginaBar
            if(val.FirstItmInPage+5<val.totalBtn)
            val.setFirstItmInPage(val.FirstItmInPage+5)  
            var btns=document.getElementsByClassName('list-group-item');
            for(let i=1;i<btns.length-1;i++){
                    btns[i].style.backgroundColor="white";
            } 
    } 
    function prev(){
        if(val.FirstItmInPage>0 && val.FirstItmInPage-5>0) val.setFirstItmInPage(val.FirstItmInPage-5) 
        else val.setFirstItmInPage(0)
        var btns=document.getElementsByClassName('list-group-item');
        for(let i=1;i<btns.length-1;i++){
                btns[i].style.backgroundColor="white"; 
        } 
    }
   
    return <div className="list-group flex-row" style={{display:"flex",justifyContent:"center"}}> 
                <button className="list-group-item text-info px-2 py-0" onClick={prev} style={{maxHeight:"40px"}}> &#10094;</button>  
                { Array.from(Array(val.nbBtnDisp)).map((e,i)=>                  //generate indexes without boucle 
                  (
                    <button className="list-group-item text-info p-0"           //pagina buttons
                            hidden={(i+val.FirstItmInPage)>=props.val.totalBtn} 
                            onClick={(e)=>val.currentPage(e,i)} 
                            key={i} 
                            style={{width:"40px",maxHeight:"40px"}}> {i+val.FirstItmInPage} </button> 
                  ) )} 
                <button className="list-group-item text-info px-2 py-0" onClick={next} style={{maxHeight:"40px"}}>&#10095;</button> 
            </div> 


}