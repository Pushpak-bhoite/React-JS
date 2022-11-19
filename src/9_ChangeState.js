import React ,{Component}from "react";

class EventHnadler_3 extends Component{
    state = {
            name : "Kishan ",
            rollNo : this.props.rollNo
        }//state
    
    HandleFunc=()=>{
        this.setState({name : "Radhey " ,rollNo :"10" });
    }
    render(){
        return(
            <>
            <h1>{this.state.name}and also rollNo: {this.state.rollNo}  will ChangeAfter clicking</h1>
            <button onClick={this.HandleFunc}>Button</button>
            </>
            );
        }
    }//class

    export default EventHnadler_3;