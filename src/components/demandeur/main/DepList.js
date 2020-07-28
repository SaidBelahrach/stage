import React, { useState, useEffect, useContext } from 'react'; 
import { Store } from '../../../AppContexts/FormContext'; 
import rmIcon  from '../../../style/icons/remove.svg';
import editIcon  from '../../../style/icons/edit.svg';
import { useHistory } from 'react-router';
 
export default function DepList(props){  //deployements list
    const history=useHistory();
    const [itms,setItms]=useState([]);  
    const {vars,setvars } = useContext(Store);  
    const {pagVar,setpagVar}=props.val; 
    const {arr,nbItmDisp,currentpg}=pagVar;
    const firstItem=currentpg*nbItmDisp; //first item in table
    const [asc,setasc]=useState({th:[true,true,true,true]});

    useEffect(()=>{  //substracte the items to display from data
        let r=[...arr].splice(firstItem,nbItmDisp); 
        setItms( r) ;   
        console.log("firs"+firstItem);

        console.log(r);
        console.log("nb"+nbItmDisp);
        
        
        
    },[arr,currentpg,nbItmDisp])   
    function deleteItem(e,i){  
        if(window.confirm('are u sure u wanna delete this item?')){
                const cp=arr; 
                cp.splice(i,1);
                setpagVar({...pagVar,arr:cp}); 
                const r=[...arr].splice(firstItem,nbItmDisp);  //reload itms[]
                setItms( r)
                setpagVar({...pagVar,dataLen:arr.length});  
        } 
    }   
    function depEdit(e,i){
        //copy data in its fields to modify it 
        setvars({...vars,app:e.app,
                         raison:e.raison,  
                         descri:e.descri,
                         impact:e.impact,
                         builder:e.builder,
                         tester:e.tester,
                         implementer:e.implementer,
                         edited:i,
                         selectedApp:e.app,
                         isEditin:true,  
        }); 
        history.push('/new-dep')  ;
    }
    function new_dep(){
        history.push('/new-dep');
        setvars({...vars,selected:'/new-dep'})
    }
    function depDetails(e){
        history.push('/dep-details',e);
        setvars({...vars,selected:'/dep-details'})
    }
    function search(e){
        let filter=e.target.value.toUpperCase();  
        var table = document.getElementById("myTable");
        var tr = table.getElementsByTagName("tr"); 

        for (let i = 0; i < tr.length; i++) {
            var td = tr[i].getElementsByTagName("td")[1];
            if (td) {
                var txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) 
                    tr[i].style.display = "";
                else 
                    tr[i].style.display = "none"; 
            }
        } 
    }
    function sortColumns(n) {  
        var tab=asc.th;
        tab[n]=!tab[n]; 
        setasc({...asc,th:tab}) 
        var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        table = document.getElementById("myTable");
        switching = true; 
        dir = "asc"; 
        while (switching) { 
          switching = false;
          rows = table.rows; 
          for (i = 1; i < (rows.length - 1); i++) { 
            shouldSwitch = false; 
            if(n===2){ //date
                x = rows[i].getElementsByTagName("TD")[n].innerHTML.split('/').reverse().join("");
                y = rows[i + 1].getElementsByTagName("TD")[n].innerHTML.split('/').reverse().join("");
            }else{    //any string
                x = rows[i].getElementsByTagName("TD")[n].innerHTML;
                y = rows[i + 1].getElementsByTagName("TD")[n].innerHTML; }
            if (dir == "asc") {
              if (x.toLowerCase() > y.toLowerCase()) { 
                shouldSwitch = true;
                break;
              }
            } else if (dir == "desc") {
              if (x.toLowerCase() < y.toLowerCase()) { 
                shouldSwitch = true;
                break;
              }
            }
          }
          if (shouldSwitch) { 
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true; 
            switchcount ++;
          } else { 
            if (switchcount == 0 && dir == "asc") {
              dir = "desc";
              switching = true;
            }
          }
        }
    }
    console.log(pagVar.nbItmDisp);
    
    return<div className="pagina-tab">
                <div>
                    <button id="btn-new-dep" 
                        onClick={new_dep} >New deployement
                    </button>
                    <select value={pagVar.nbItmDisp} 
                            onChange={(e)=>setpagVar({...pagVar,nbItmDisp:e.target.value})}>
                        <option value='5'>5</option>
                        <option value='10'>10</option>
                        <option value='15'>15</option>
                    </select>
                    <label>
                        <input type="text" onChange={(e)=>search(e)}/>
                    </label>
                </div>
                
                <table id="myTable">
                    <thead >
                        <tr> 
                           <th onClick={()=>sortColumns(0)}>N° RFC 
                                            {asc.th[0]? <span hidden={!asc.th[0]}>&#9660;</span>
                                                        :<span hidden={asc.th[0]}>&#9650;</span>  
                                            }
                            </th>
                           <th onClick={()=>sortColumns(1)}>Application
                                            {asc.th[1]? <span hidden={!asc.th[1]}>&#9660;</span>
                                                        :<span hidden={asc.th[1]}>&#9650;</span>  
                                            }
                            </th>
                           <th onClick={()=>sortColumns(2)}>Date
                                            {asc.th[2]? <span hidden={!asc.th[2]}>&#9660;</span>
                                                        :<span hidden={asc.th[2]}>&#9650;</span>  
                                            } 
                            </th>
                           <th onClick={()=>sortColumns(3)}>Statut
                                            {asc.th[3]? <span hidden={!asc.th[3]}>&#9660;</span>
                                                        :<span hidden={asc.th[3]}>&#9650;</span>  
                                            } 
                            </th>
                           <th >Modifier </th> 
                        </tr> 
                    </thead>
                    <tbody>      
                        {itms.map((e,i)=>
                            <tr key={i}>  
                                    <td onClick={()=>depDetails(e)}>{e.N_ref}</td>    
                                    <td onClick={()=>depDetails(e)}>{e.app}</td>
                                    <td onClick={()=>depDetails(e)}>{e.date}</td>
                                    <td onClick={()=>depDetails(e)}><p className={"badge "+e.status.replace(' ','').replace('/','')}>
                                            {e.status}
                                        </p>
                                    </td> 
                                    <td>
                                        <a onClick={()=>deleteItem(e,i)}>
                                                    <img src={rmIcon}  title="annuler" alt="annuler"/>
                                        </a> 
                                        <a onClick={()=>depEdit(e,i)} hidden={e.status!=="Nouveau"}>
                                                    <img src={editIcon} title="modifier"  alt="modifier"/>
                                        </a> 
                                    </td>      
                            </tr> 
                        )}  
                    </tbody>
                </table> 
          </div>
} 