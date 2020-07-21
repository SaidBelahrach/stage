import React from 'react';
import {BrowserRouter,Link,Route} from 'react-router-dom'



export default function RouterApp(props){
    function Home(props){
        return <h1>Home </h1>
      }
      function About(props){
          return <h3>Contact us.{console.log(props.history)}</h3>
      }
    return   <BrowserRouter> 
                    <div>
                        <Link to="/page_Name_In_Link" >Home</Link> {"  "}
                        <Link to="/about">about</Link>
    
                        <Route path="/page_Name_In_Link" exact component={Home}/>
                        <Route path="/about" component={About} />
    
                    </div>
                </BrowserRouter> 
}

