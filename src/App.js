import React from "react";
//import logo from './logo.svg';
//import './App.css';
import FC from "./Components/FunctionalComp";
import {ClassComp1} from "./Components/ClassComp";
import Click from "./Components/Click";
import Counter from "./Components/Counter";
import ParentComp from "./Components/ParentComp";
import Classprops from "./Classprops";
import Functionprop from "./Functionprop";

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
      <Classprops name="Learner 1" place="PlaceX">
        <p>
          Child Component
        </p>
      </Classprops>
      <Classprops name="Learner 2" place="PlaceY">
        <button>
          Click
        </button>
      </Classprops>
      <Classprops name="Learner 3" place="PlaceZ" />
      <Functionprop name="Learner 4" place="PlaceA" /> {" "}
    </div>
  );
}

export default App;
