import react from 'react'
import './App.css';
import Component from './Component';

function App() {
  return (
    <div classname="App">
      <h1>hello welcome to react</h1>
      <button>click me</button>
      <Component comp={"1"}/>
      <Component comp={"2"}/>
      <Component comp={"3"}/>
    </div>
  );
}
export default App;
