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
        const r=[...arr].splice(firstItem,nbItmDisp); 
        setItms( r) ;   
        
    },[arr,currentpg])  

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
                         isEditin:true,  
        }); 
        history.push('/new-dep')  ;
    }
    function new_dep(){
        history.push('/new-dep');
        setvars({...vars,selected:'/new-dep'})
    }
    function depInfo(e){
        setpagVar({...pagVar,switcher:true});  //disp deployement info
        setpagVar({...pagVar,status:e.status});  
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
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n]; 
            if (dir == "asc") {
              if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { 
                shouldSwitch = true;
                break;
              }
            } else if (dir == "desc") {
              if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) { 
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
    return<div className="pagina-tab">
                <div>
                    <button id="btn-new-dep" 
                        onClick={new_dep} >New deployement
                    </button>
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
                            <tr key={i} onClick={()=>depInfo(e)}> 
                                    <td>{e.N_ref}</td>    
                                    <td>{e.app}</td>
                                    <td>{e.date}</td>
                                    <td><p className={"badge "+e.status.replace(' ','').replace('/','')}>
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