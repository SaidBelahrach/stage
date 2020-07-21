import React from 'react';
 
class Style extends React.Component{
    constructor(props){
        super(props);
        this.state={color:"red",margin:"10px",background:"cyan"};
    }
    changeStyle=(name,value)=>{
        // const stylee=this.state.style;
        // stylee.name=name;
        this.setState({[name]:value}); 
    }
    render(){
        return<div>
                <p style={this.state} onClick={()=>this.changeStyle("background","yellow")}>hello</p>

               </div>
    }
}

export default Style;