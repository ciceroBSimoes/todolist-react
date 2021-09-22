import React, { useContext } from "react";
import { listContext } from "../../pages/Home";

const NewTaskForm = () => {
  const { setIsUpdated } = useContext(listContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    let tasks = localStorage.getItem("tasks");
    let taskList;

    tasks ? (taskList = JSON.parse(tasks)) : (taskList = { list: [] });
    taskList.list.push({
      id: Date.now(),
      status: false,
      color: event.target[2].value,
      text: event.target[0].value,
    });
    localStorage.setItem("tasks", JSON.stringify(taskList));
    setIsUpdated(false);
  };
  const wipeTasks = () => {
    if (window.confirm("Limpar todas as tarefas?")) {
      localStorage.clear();
      setIsUpdated(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Descreva a tarefa..." required />
        <button type="submit">Salvar</button>
        <input type="color" id="colorPicker" defaultValue="#FFFFFF" />
      </form>
      <button onClick={wipeTasks}>Limpar Tarefas</button>
    </>
  );
};

export default NewTaskForm;
