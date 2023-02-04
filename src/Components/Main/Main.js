import React, { useState } from "react";
import "./Main.css";

export default function Main({ tarefas, setTarefas }) {
  const listaDeTarefas = [...tarefas];
  
  function deleteTask(ev, index) {
    listaDeTarefas.splice(index, 1);
    setTarefas([...listaDeTarefas]);
  }

  return tarefas.map((iten, index) => {
    return (
      <div key={index} className="cards">
        <div>
          <h4>{iten.value_task}</h4>
          <p>
            {iten.state_task}
            {index}
          </p>
        </div>
        <div>
          <input
            className="btnDelete"
            onClick={(ev) => {
              deleteTask(ev, index);
            }}
            type="button"
            value="X"
          />
          <input className="btnAlter" type="button" value="#" />
        </div>
      </div>
    );
  });
}
