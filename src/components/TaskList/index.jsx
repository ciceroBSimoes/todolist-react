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
    <>
      <div>
        <h2>Pendente</h2>
        <h3>{pendantTasks.length} Tarefas</h3>
        <ul>
          {pendantTasks.map((item) => (
            <li key={item.id}>
              <TaskCard task={item} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Concluídos</h2>
        <h3>{doneTasks.length} Tarefas</h3>
        <ul>
          {doneTasks.map((item) => (
            <li key={item.id}>
              <TaskCard task={item} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TaskList;
