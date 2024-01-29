import "./App.css";
import React from "react";
import Logo from "./components/Logo";
import Title from "./components/Title";
import Form from "./components/Form";


function App() {
  
  return (
    <div className="App">
      <Logo />
      <div className="App-main">
        <Title />
        <Form />
      </div>
    </div>
  );
}

export default App;
