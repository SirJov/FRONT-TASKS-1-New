// COMPONENTE MAIN ------------------
import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Header.css";

export default function Header({ tarefas, setTarefas }) {
  const [task, setTask] = useState();
  const [alerta, setAlerta] = useState();
  const [objTask, setObjTask] = useState();
  const listaDeTarefas = [...tarefas];

  useEffect(() => {
    if (objTask !== undefined) {
      setTarefas([...tarefas, objTask]);
    }
  }, [objTask]);

  async function postData() {
    const dataEdit = { value_task: task };
    await axios

      .post("https://api-tasks-1.vercel.app/tasks/criar", dataEdit)
      .then((response) => {
        setObjTask(response.data[1]);

        return;
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

  const criaTarefa = (ev) => {
    const ValidaRepeticao = listaDeTarefas.find((i) => i.value_task === task);
    if (validaVasio(task) !== 0) {
      if (ValidaRepeticao !== undefined) {
        setAlerta("Tarefa ja existe!!");
        return;
      } else {
        //setTask("");
        setAlerta("");
        postData();
        return;
      }
    }
  };

  const textHandle = (ev) => {
    setTask(ev.target.value);
  };

  return (
    <div className="boxHeader">
      <p className="title">App de Tarefas</p>
      <form>
        <textarea
          className="novaTarefa"
          onChange={textHandle}
          value={task}
        ></textarea>
        <button className="btnPost" type="button" onClick={criaTarefa}>
          ▶
        </button>
      </form>
      <div>
        <p className="alert">{alerta}</p>
      </div>
    </div>
  );
}
