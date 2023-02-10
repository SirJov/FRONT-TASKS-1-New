import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Components/Header/Header.js";
import Main from "../Components/Main/Main";

export default function Home({ data }) {
  const [tarefas, setTarefas] = useState([]);
  useEffect(() => {
    axios
      .get("https://api-task-1.vercel.app/tasks/listar")
      .then((response) => {
        const dataGet = response.data;
        setTarefas(dataGet);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="boxHome">
      <Header tarefas={tarefas} setTarefas={setTarefas} />
      <div className="boxCards">
        <Main tarefas={tarefas} setTarefas={setTarefas} />
      </div>
    </div>
  );
}
