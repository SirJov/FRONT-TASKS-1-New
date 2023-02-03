// COMPONENTE MAIN ------------------
import React, { useState } from "react";

import "./Header.css";

export default function Header({}) {
  const [text, setText] = useState(null);
  const [tarefas, setTarefas] = useState([]);

  return (
    <section className="boxMain">
      <form>
        <p>Tarefa</p>
        <textarea
          className="novaTarefa"
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button
          className="btnPost"
          type="button"
          onClick={() => setTarefas([...tarefas, text])}
        >
          ▶
        </button>
      </form>
      <div>
        <p>{text}</p>
        <button type="button" onClick={() => console.log(tarefas)}></button>
      </div>
    </section>
  );
}
