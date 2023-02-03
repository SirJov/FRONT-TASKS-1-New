import React, { useState } from "react";
import Header from "./Components/Header/Header.js";

function App() {
  const [tarefas, setTarefas] = useState([]);

  return (
    <div className="App">
      <Header tarefas={tarefas} setTarefas={setTarefas} />
    </div>
  );
}

export default App;
