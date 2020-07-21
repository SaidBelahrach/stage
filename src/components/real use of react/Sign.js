import React, { useContext, useEffect,useState } from 'react'
import Store from './store'

export default function Sign(props){
    const values=useContext(Store);
    useEffect(() => {
         //fetch from API
    },[]);
     const apps=["Offres","Payements","Client Space","oncf.ma"]
     const servers=["server1","server2","server3","server4"];
 
    const [version, setversion] = useState(null);
    const [Package, setPackage] = useState("");
    const [descri, setdescri] = useState("")
    function handleChange(e){
       

    }
    function validate(){

    }
    
    return <div className="sign mx-auto" >
                <h5 className="text-center">New Deployment</h5>
                <p className='err'>{}</p>
                <form className=" my-4" name='f1'onSubmit={validate} > 
                <table>
                         <tr>
                              <td className="odd">Application</td>
                              <td> 
                                   <select value={apps[3]}>
                                        {apps.map((e,i)=><option key={i}>{e}</option>)}

                                   </select>
                              </td>
                         </tr>
                         <tr>
                              <td className="odd">Version</td>
                              <td><input type="text" required value={version} onChange={(e)=>setversion(e.target.value)} name="version" placeholder="Version"/> </td>
                         </tr> 
                         <tr>
                               <td className="odd">Server</td>
                               <td>
                                   <select value={apps[3]}> {servers.map((e,i)=><option key={i}>{e}</option>)}  </select>
                               </td>
                         </tr>
                         <tr>
                               <td className="odd">Package</td>
                               <td><input type="text" required value={Package} onChange={(e)=>setPackage(e.target.value)} name="package" placeholder="Package"/></td>
                         </tr>
                         <tr>
                               <td className="odd">Description</td>
                               <td><input type="text" required value={descri} onChange={(e)=>setdescri(e.target.value)} name="description" placeholder="Description"/></td>
                         </tr>
                         <tr>
                              <td colSpan="2"><input id='btn' type="submit" value="Save"/></td> 
                         </tr>
                    </table>
                   
                </form>
 
           </div>
}