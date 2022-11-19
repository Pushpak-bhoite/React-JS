import React ,{Component} from "react"

class PassArg1 extends Component {
    state={
        id: 10,
        name:"Siya_Ram"

    };
    handleClick_2 = (name,j,e)=>{
        console.log(name);
        console.log(j);
        console.log(e);
            
    }
    Click_1 = (e) => {
       
        this.handleClick_2(this.state.name, "Hello" ,e)
       
    }
    render(){
        return(
            <>
        <h1>1 = This is the Passing Argument to Event Handler</h1>
        <button onClick={this.Click_1}>RollNo</button>
        </>
        );
    }//render
}//class

class PassArg2 extends Component{
    state ={
        name :"Lakshuman",
        id : 10
    }
    handleClick_2 = (name,j,e)=>{
        console.log(name);
        console.log(j);
        console.log(e);
    }
    render(){
        return(
            <>
            <h1>2 = This is the Passing Argument to Event Handler</h1>
            <button onClick = { (e)=>{this.handleClick_2(this.state.name,"hello",e)}}>Click</button>
            </>
        );
    }
}

export  {PassArg1};
export  {PassArg2};
