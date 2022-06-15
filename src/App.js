import React from "react";
//import logo from './logo.svg';
//import './App.css';
import FC from "./Components/FunctionalComp";
import {ClassComp1} from "./Components/ClassComp";
import Click from "./Components/Click";
import Counter from "./Components/Counter";
import ParentComp from "./Components/ParentComp";

function App() {
  return (
    <div>
      <h1>Tutorial to Learn React</h1>
      <h2>More about Components</h2>
      <FC />
      {/*<ClassComp /> */}
      <ClassComp1 />
      <Click />
      <Counter />
      <ParentComp />
    </div>
  );
}

export default App;
