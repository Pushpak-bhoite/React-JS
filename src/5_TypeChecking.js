import React,{Component} from "react";
import Proptype from "prop-types";
// import ReactDOM from "react-dom";
class Employee extends Component{
    render(){
        return (
            <>
            <h1>This is TypeCheck_propType.js file Component = {this.props.name_1}</h1>
            <h1>This is Also TypeCheck_propType.js file Component = {this.props.name_2}</h1>
            </>
        );
    }
}

Employee.propTypes ={
    name_1 : Proptype.string,
    name_2 : Proptype.string.isRequired
} ;

Employee.defaultProps ={
    name_1: "Siya_Ram",
    name_2: "Siya_Ram"
};
// ReactDOM.render(<Employee />,document.getElementById("employee"));
// ReactDOM.render(<Employee name_1="Shree Ram" name_2="Shree Ram"/>,document.getElementById("employee"));

export default Employee;


