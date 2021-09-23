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
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="Descreva a tarefa..." required />
        </div>
        <div>
          <input type="submit" value="Salvar" />
          <input type="color" id="colorPicker" defaultValue="#FEF596" />
        </div>
      </form>
      <button onClick={wipeTasks} className="wipe-button">
        Limpar Tarefas
      </button>
    </div>
  );
};

export default NewTaskForm;
