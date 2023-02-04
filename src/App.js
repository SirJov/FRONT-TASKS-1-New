import React, { useState } from "react";
import Header from "./Components/Header/Header.js";
import Main from "./Components/Main/Main.js";
import "./App.css";

function App() {
  const [tarefas, setTarefas] = useState([]);
  console.log("resnderizou");
  return (
    <div className="App">
      <Header tarefas={tarefas} setTarefas={setTarefas} />
      <Main tarefas={tarefas} setTarefas={setTarefas} />
    </div>
  );
}

export default App;
