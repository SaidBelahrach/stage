import React, { useContext, useEffect,useState } from 'react'
import Store from './store'

export default function Login(props){
    const values=useContext(Store);
    const [errmsg, seterrmsg] = useState(" ");
    useEffect(()=>{
        if(localStorage.getItem("user")==null)
            localStorage.setItem("user","said@sa");
        if(localStorage.getItem("loged")==null){
            localStorage.setItem("loged",false);  
        } 
        values.setloged(localStorage.getItem("loged"));
        console.log(values.loged ); 
    },[]);
    // useEffect(() => {
    //     console.log('didUpdate') ; 
    // },[values.pass]);
    function validate(e){ 
        
        // console.log(e.target.childNodes[1].value)
        const email=e.target.childNodes[1].value;
        // const reg=/(.fr)$/g; 
        // console.log(email.split('@') ); 
        if( email===localStorage.getItem('user')){  
            localStorage.setItem("loged",true);  
            values.setloged("true");
            console.log(values)
            console.log(localStorage.getItem("loged")); 
            seterrmsg(" ");
        }
        else {
            e.preventDefault(); 
            seterrmsg("Email or password is incorrect");
        }
    }
    return <div className="ml-5 border mx-auto mt-3" style={{width:"400px"}}>
                <h1 className="text-center">Login</h1>
                <p className='err'>{errmsg}</p>
                <form className="text-center my-4" style={{width:"190px",margin:"0px auto"}} name='f1'onSubmit={validate} > 

                     <p className="text-left ml-1 mb-0 mt-2">Email</p>
                     <input type="email" required value={values.email} onChange={(e)=>values.setemail(e.target.value)}/><br/>
                     
                     <p className="text-left ml-1 mb-0 mt-2">Password</p>
                     <input type="password" required value={values.pass} onChange={(e)=>values.setpass(e.target.value)}/> <br/><br/>
                     <input id='btn' type="submit" value="submit" className="btn btn-info w-75"/>
                </form>
 
           </div>
}