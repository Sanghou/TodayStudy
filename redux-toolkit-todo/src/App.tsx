import React from "react";
import InputTest from "./components/basicReducerTest";
import Todos from "./components/todos";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Todos />
      {/* <InputTest /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
