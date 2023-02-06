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
    console.log(dataString);
    if (data == undefined || data == "") {
      setAlerta("Informe uma tarefa!!");
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
    <div className="boxMain">
      <form>
        <p>Tarefa</p>
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
        <p>{alerta}</p>
      </div>
    </div>
  );
}
