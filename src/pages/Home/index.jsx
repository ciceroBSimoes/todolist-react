import React, { useState, createContext } from "react";
import Header from "../../components/Header";
import TaskList from "../../components/TaskList";
import NewTaskForm from "../../components/NewTaskForm";

export const listContext = createContext();

const Home = () => {
  const [isUpdated, setIsUpdated] = useState(false);

  return (
    <>
      <Header />
      <listContext.Provider value={{ isUpdated, setIsUpdated }}>
        <NewTaskForm />
        <TaskList />
      </listContext.Provider>
    </>
  );
};

export default Home;
