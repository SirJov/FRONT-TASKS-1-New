import React from "react";
import axios from "axios";
import "./Main.css";

export default function Main({ tarefas, setTarefas }) {
  const listaDeTarefas = [...tarefas];

  async function selectDelete(obj, id) {
    await axios
      .delete(`https://api-task-1.vercel.app/tasks/deletarBody?id_tasks=${id}`)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  }
 
  async function selectPut(id_tasks) {
    const id = id_tasks;

    await axios
      .put(`https://api-task-1.vercel.app/tasks/atualizar/${id}`)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  }

  async function deleteTask(ev, index, id_tasks) {
    const task = listaDeTarefas[index];
    const id = id_tasks;
    console.log(id);

    const taskValue = { value_task: task.value_task };

    await selectDelete(taskValue, id);

    listaDeTarefas.splice(index, 1);
    setTarefas([...listaDeTarefas]);
  }

  function verificaClass(iten) {
    if (iten.state_task == "PENDENTE") {
      const config = { class: "btnComplit", icon: "✓" };
      return config;
    }
    if (iten.state_task == "CONCLUIDO") {
      const config = { class: "btnAlter", icon: "↺" };
      return config;
    }
  }

  return tarefas.map((iten, index) => {
    return (
      <div key={index} className="cards">
        <div>
          <p className="task">{iten.value_task}</p>
          <p className="state">{iten.state_task}</p>
        </div>
        <div>
          <input
            className="btnDelete"
            onClick={(ev) => {
              deleteTask(ev, index, iten.id_tasks);
            }}
            type="button"
            value="X"
          />
          
          <input
            className={verificaClass(iten).class}
            onClick={(ev) => {
              selectPut(iten.id_tasks);
            }}
            type="button"
            value={verificaClass(iten).icon}
          />
        </div>
      </div>
    );
  });
}
