import React,{useState} from 'react'
import './App.css';
import Component from './Component';

function SimpleState() {
  let [b,setB]=useState(0);
    var a = 23;
  var ClickedFn =()=>{
    console.log("Clicked")
    a++;
    console.log(a)
    setB(b+1)
  }
  return (<div className="App">
      <h1>hello welcome to react state</h1>
      <h1>{a}</h1>
      <button onClick={ClickedFn}>increase</button>
      <h1>{b}</h1>
      </div>
  );
}
export default SimpleState;