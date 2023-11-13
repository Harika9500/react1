import React from 'react'
import './App.css';
import Component from './Component';
import SimpleState from './SimpleState';

function App() {
  return (<div className="App">
      <h1>hello welcome to react</h1>
      <button>click me</button>
      <Component comp={"1"} user={{name :"harika",email:"harika903j@gmail.com",role:"developer"}}/>

      <SimpleState/>
    </div>
  );
}
export default App;
