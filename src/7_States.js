import React, { Component } from 'react';

class MyStates1 extends Component{
    state = {
        name: "States"
    }
    render(){
        return(
            <>
            <h1>1_ Hii Im lerning {this.state.name}</h1>
            <h1>1_ Without Using  {this.props.character}</h1>
            </>
        )
    }
}

class MyStates2 extends Component{
    constructor(props){
        super(props)
        this.state = {
            name : "constructor Component",
            Character : this.props.Character
        } //state
    } //constructor
    render(){
        return(
            <div>
            <h1>2_I am in {this.state.name}</h1>
            <h1>2_without using  {this.props.Character}</h1>
            </div>
        )
    }
}

export {MyStates1};
export {MyStates2};