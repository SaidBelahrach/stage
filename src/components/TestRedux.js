import React from 'react';
// import {createStore} from 'redux';

 function TestRedux(props){

  //STORE :global state seprated that holds all data used by the app (and all its component)
        // import {createStore} from 'redux';
        let store=Redux.createStore(counter);  //better after creating action

  //ACTION: describe what u wanna do;describe manipulation of state vars
        const decrement=()=>{
            return{type: "INCREMENT"};   //type or name
        }
        const increment=()=>{
            return{type: "DECREMENT"};   //type or name
        }
  //REDUCER :describe how ur action change state (check what action is called then...)
        const counter=(state=0,action)=>{
            switch(action.type){
                case "INCREMENT":  return state+1;
                case "DECREMENT":  return state-1;
                default :          return state;
            }
        }
        // let store=createStore(counter);
  //DISPACH :execute action and then the store will be updated
        store.dispach(increment());
        console.log(store.getState)
        return <h1>hello</h1>;
 }

export default TestRedux;