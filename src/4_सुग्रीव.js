import React , {Component}from "react"
import "./App.css"

class सुग्रीव extends Component{
    render(){
        return (
            <>
            <h1 className="bg">my name is {this.props.name}</h1>
            <h1>My Id is {this.props.Id}</h1>
            </>
        );
    }
}
 
export default सुग्रीव;