//import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function countDecrement() {
    setCount(count - 1);
  }

  function countIncrement() {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <button onClick={countDecrement}>Decrement</button>
      <span>{count}</span>
      <button onClick={countIncrement}>Increment</button>
    </div>
  );
}

export default App;
