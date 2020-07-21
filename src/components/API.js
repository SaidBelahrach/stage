import React,{useState} from 'react';
import './apiCSS.css'; 
  function Api(props){
    // https://api.randomuser.me/ 
    const [person,setPerson]=useState(null);
    const [user,setUser]=useState(null);

    const url="https://api.randomuser.me/";
    var data= ""; 
   async function getData(){ 
        const response= await fetch(url);
        data=await response.json();  //obj=JSON.parse(response)
        setPerson(data.results[0]);
        // console.log(data.results[0]);
        setUser(null); 
    }
    function loadProfil(person){
        const obj={name:person.name.first+" "+person.name.first,
                gender:person.gender,
                city:person.location.city,
                phone:person.phone 
              };
              setUser(obj);
    }
    return <div className="container">
                <h2 style={{textAlign:"center"}}>first time using API </h2> 
                
                    <button id="btn" onClick={getData}>generate</button>
                    <div className="profil"> 
                            <User person={person} loadProfil={()=>loadProfil(person)} onLoad={{getData}}/> 
                     </div> 
                     <div className="profil"> 
                            <User person={person} loadProfil={()=>loadProfil(person)} /> 
                     </div> 
                     <Userinfo user={user}/>
                               
                 
           </div>
}
function User(props){
        return <div> {props.person? <div>
                                      <img src= {props.person.picture.large}/><br/>
                                        {props.person.name.first+" "+props.person.name.last}
                                      <button id="see-btn" onClick={()=>props.loadProfil(props.person)}>See profil</button><br/>
                                        <a href="#" className="fa fa-facebook"></a>
                                        <a href="#" className="fa fa-instagram"></a>
                                        <a href="#" className="fa fa-twitter"></a>
                                        <a href="#" className="fa fa-whatsapp"></a>
                                        <a href="#" className="fa fa-linkedin"></a>
                                        <a href="#" className="fa fa-youtube"></a>
                                        <a href="#" className="fa fa-github"></a>
                                    </div> :"" 
                      } 
                </div>
}
function Userinfo(props){ 
  return <div id="user-info"> {props.user? (<table>
                                        <tbody>
                                            <tr><td>Full name:</td><td> {props.user.name}  </td></tr>
                                            <tr><td> Gender:  </td><td> {props.user.gender}</td></tr>
                                            <tr><td>City:     </td><td> {props.user.city}  </td></tr>
                                            <tr><td>Phone:    </td><td> {props.user.phone} </td></tr>
                                        </tbody>
                                    </table>)
                              :""}
        </div>
}
export default Api;