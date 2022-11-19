import React from "react"

function Student(name){
    return(
        <h1>Student says हमारे साथ श्री  {name}</h1>
    )
}
let ele = <h1>{Student(" रघुनाथ ")}तो किस बात की चिंता  </h1>

export default ele ;







// import React from "react";
// import ReactDOM from "react-dom";

// const myFunc_1 = ()=>{
//     return <h2>ye mera  hgkkjhkjhkjhkjhj</h2>
//     }
//   const z = <h1>{myFunc("bharat")} amar hai </h1>
// ReactDOM.render(myFunc_1,document.getElementById("root_1"));
// ReactDOM.render(<myFunc_1/>,document.getElementById("root"));
// export default myFunc_1;