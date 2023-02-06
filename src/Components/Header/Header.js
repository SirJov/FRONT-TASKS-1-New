// COMPONENTE MAIN ------------------
import React, { useState } from "react";

import "./Header.css";

export default function Header({ tarefas, setTarefas }) {
  const [data, setData] = useState();
  const [alerta, setAlerta] = useState();
  const listaDeTarefas = [...tarefas];
  const ValidaRepeticao = listaDeTarefas.find((i) => i.value_task == data);

  function validaVasio(data) {
    const dataString = data;

    if (data == undefined || data == "") {
      setAlerta("Informe uma tarefa!!");
      return 0;
    }

    const removeSpaces = data.trim();

    if (removeSpaces == 0) {
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

  function criaTarefa(ev) {
    if (validaVasio(data) != 0) {
      const tarefaData = { value_task: data, state_task: "PENDENTE" };

      if (ValidaRepeticao != undefined) {
        setAlerta("Tarefa ja existe!!");
        return;
      } else {
        setData("");
        setAlerta("");
        return setTarefas([...tarefas, tarefaData]);
      }
    }
  }

  function textHandle(ev) {
    setData(ev.target.value);
  }

  return (
    <div className="boxHeader">
      <p className="title">App de Tarefas</p>
      <form>
        <textarea
          className="novaTarefa"
          onChange={(e) => textHandle(e)}
          value={data}
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
