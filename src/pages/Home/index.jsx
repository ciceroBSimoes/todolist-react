import React, { useState, createContext } from "react";
import Header from "../../components/Header";
import TaskList from "../../components/TaskList";

export const listContext = createContext();

const Home = () => {
  const [isUpdated, setIsUpdated] = useState(false);

  return (
    <>
      <listContext.Provider value={{ isUpdated, setIsUpdated }}>
        <Header />
        <TaskList />
      </listContext.Provider>
    </>
  );
};

export default Home;
