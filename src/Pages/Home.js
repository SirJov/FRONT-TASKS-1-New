import React, { useState } from "react";
import Header from "../Components/Header/Header.js";
import Main from "../Components/Main/Main";

export default function Home() {
  const [tarefas, setTarefas] = useState([]);

  return (
    <div className="boxHome">
      <Header tarefas={tarefas} setTarefas={setTarefas} />
      <div className="boxCards">
        <Main tarefas={tarefas} setTarefas={setTarefas} />
      </div>
    </div>
  );
}
