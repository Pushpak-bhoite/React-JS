import React, { Component } from 'react'
// *Here uses 2 components i.e Class & function
// *In function we cant use this keyword
// *In class : props always declared as this.props.name
             //& if we Use state then this.state.name
// * If we uses declare event in class then write as = onClick{this.handlefunction}
// * and in function = onClick{handlefunction}

class MyEventClass extends Component{
    state = {
        name_1 : "Nakul",
        name_2 : this.props.name_2
    }
    HandlerFunc =()=>{
        console.log("I am the Event Handling Function ",this);
    }
    render(){
        return(
            <>

            <h1>This is EventHandling Program </h1>
            <h1>Current syntax is passed by without props {this.state.name_1}</h1> 
            <h1>Current syntax is passed by with props {this.props.name_2}</h1>
            <div>
            <button onClick={this.HandlerFunc}>Namaste</button>
            </div>
            </>
        );
    }
}

const MyEventFunction =(props)=>{
    function Handlerfunk(){     //OR = const Handlerfunk=()=>{
        console.log(`MyEventFunction : we Cant use "this" keyWord in this Handlerfunk function`)
    }
return (
    <>
    <h1>Current syntax is passed with props {props.name_1} </h1>
    <button onClick={Handlerfunk}>Click me</button>
    </>
    )
}


export {MyEventClass};
export {MyEventFunction};