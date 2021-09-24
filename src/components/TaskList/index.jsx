import React, { useState, useEffect, useContext } from "react";
import { listContext } from "../../pages/Home";
import TaskCard from "../TaskCard";

const TaskList = () => {
  const { isUpdated, setIsUpdated } = useContext(listContext);
  const [pendantTasks, setPendantTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  useEffect(() => {
    let doneList = [];
    let pendantList = [];
    if (!isUpdated) {
      const taskList = JSON.parse(localStorage.getItem("tasks"));
      if (taskList) {
        doneList = taskList.list.filter((item) => item.status);
        pendantList = taskList.list.filter((item) => !item.status);
      }
      setDoneTasks(doneList);
      setPendantTasks(pendantList);
      setIsUpdated(true);
    }
  }, [isUpdated]);

  return (
    <div className="tasks-container">
      <div className="list-header">
        <h2>Pendente</h2>
        <h3>{pendantTasks.length}{pendantTasks.length === 1 ? " Tarefa" : " Tarefas"}</h3>
      </div>
      <div className="list-container">
        {pendantTasks.map((item) => (
          <TaskCard task={item} key={item.id} />
        ))}
      </div>

      <div className="list-header">
        <h2>Feito</h2>
        <h3>{doneTasks.length}{doneTasks.length === 1 ? " Tarefa" : " Tarefas"}</h3>
      </div>
      <div className="list-container">
        {doneTasks.map((item) => (
          <TaskCard task={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
