import React from "react";
// import ReactDOM from "react-dom";

const x = <h1>Mahabharta</h1>
const y = <h1>{10+20}</h1>
// let name ="bharat"
const myFunc = (name)=>{
  return <h1>ye mera {name}</h1>
  }
const z = <h1>{myFunc("bharat")} amar hai </h1>
export {x};
export {y};
export {z};
// export default myFunc;
