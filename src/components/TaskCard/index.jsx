import React, { useContext } from "react";
import { listContext } from "../../pages/Home";

const TaskCard = ({ task }) => {
  const { setIsUpdated } = useContext(listContext);
  const handleDbClick = (event) => {
    const id = Number(event.target.id);
    const taskList = JSON.parse(localStorage.getItem("tasks"));
    const index = taskList.list.findIndex((item) => item.id === id);
    taskList.list[index].status = !taskList.list[index].status;
    localStorage.setItem("tasks", JSON.stringify(taskList));
    setIsUpdated(false);
  };

  const setTextColor = () => {
    let corHex = task.color.replace("#", "");
    let r = parseInt(corHex.substr(0, 2), 16);
    let g = parseInt(corHex.substr(2, 2), 16);
    let b = parseInt(corHex.substr(4, 2), 16);
    let lumLv = (r * 299 + g * 587 + b * 114) / 1000;
    if (lumLv > 128) {
      return "black";
    } else {
      return "white";
    }
  };

  return (
    <div
      id={task.id}
      className="task-card"
      draggable="true"
      style={{
        backgroundColor: task.color,
        color: setTextColor(),
      }}
      onDoubleClick={handleDbClick}
    >
      <div className="pin"></div>
      <span>{task.text}</span>
    </div>
  );
};

export default TaskCard;
