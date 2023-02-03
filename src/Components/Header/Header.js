// COMPONENTE MAIN ------------------
import React, { useState } from "react";

import "./Header.css";

export default function Header(props) {
  const [text, setText] = useState();

  function criaTarefa(ev) {
    setText({
      value_task: "",
      state_task: "PENDENTE",
    });
    props.setTarefas([...props.tarefas, text]);
  }

  return (
    <section className="boxMain">
      <form>
        <p>Tarefa</p>
        <textarea
          className="novaTarefa"
          onChange={(e) =>
            setText({ value_task: e.target.value, state_task: "PENDENTE" })
          }
        ></textarea>
        <button
          className="btnPost"
          type="button"
          onClick={() => criaTarefa(text)}
        >
          ▶
        </button>
      </form>
      <div>
        <button type="button" onClick={() => console.log(props.tarefas)}>
          O
        </button>
      </div>
    </section>
  );
}
