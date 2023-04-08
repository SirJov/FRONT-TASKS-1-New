// COMPONENTE MAIN ------------------
import React, { useState } from "react";
import axios from "axios";

import "./Header.css";

export default function Header({ tarefas, setTarefas }) {
  const [task, setTask] = useState();
  const [alerta, setAlerta] = useState();
  const [dataAtt, setDataAtt] = useState();
  const listaDeTarefas = [...tarefas];
  const ValidaRepeticao = listaDeTarefas.find((i) => i.value_task === task);

  async function postData() {
    const dataEdit = { value_task: task };
    await axios
      .post("https://api-tasks-1.vercel.app/tasks/criar", dataEdit)
      .then((response) => {
        const { id_tasks } = response.data[1];
        setDataAtt(id_tasks);
        console.log(response.data[1]);
        return id_tasks;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function validaVasio(data) {
    const dataString = data;

    if (data === undefined || data === "") {
      setAlerta("Informe uma tarefa!!");
      return 0;
    }

    const removeSpaces = data.trim();

    if (removeSpaces === 0) {
      setAlerta("Informe uma tarefa!!");
      return 0;
    }
    if (data.length > 45) {
      setAlerta("Maximo 45 caracteres!!");
      return 0;
    }
    const dataStryngReplace = dataString.replace(/\s/g, "");
    return dataStryngReplace.length;
  }

  async function criaTarefa(ev) {
    if (validaVasio(task) !== 0) {
      const tarefaData = {
        id_tasks: dataAtt,
        value_task: task,
        state_task: "PENDENTE",
      };
      console.log(tarefaData);

      if (ValidaRepeticao !== undefined) {
        setAlerta("Tarefa ja existe!!");
        return;
      } else {
        await postData();
        setTask("");
        setAlerta("");
        return setTarefas([...tarefas, tarefaData]);
      }
    }
  }

  function textHandle(ev) {
    setTask(ev.target.value);
  }

  return (
    <div className="boxHeader">
      <p className="title">App de Tarefas</p>
      <form>
        <textarea
          className="novaTarefa"
          onChange={(e) => textHandle(e)}
          value={task}
        ></textarea>
        <button className="btnPost" type="button" onClick={() => criaTarefa()}>
          ▶
        </button>
      </form>
      <div>
        <p className="alert">{alerta}</p>
      </div>
    </div>
  );
}
