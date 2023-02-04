// COMPONENTE MAIN ------------------
import React, { useState } from "react";

import "./Header.css";

export default function Header(props) {
  const [text, setText] = useState();

  function criaTarefa(ev) {
    setText({
      value_task: "",
    });
    props.setTarefas([...props.tarefas, text]);
  }

  function textHandle(ev) {
    setText({ value_task: ev.target.value, state_task: "PENDENTE" });
  }

  return (
    <div className="boxMain">
      <form>
        <p>Tarefa</p>
        <textarea
          className="novaTarefa"
          onChange={(e) => textHandle(e)}
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
        <p>asdasd</p>
        <button type="button" onClick={() => console.log(props.tarefas)}>
          O
        </button>
      </div>
    </div>
  );
}
