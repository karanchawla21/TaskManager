import React, { useEffect, useState } from "react";

import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";

const oldTasks = localStorage.getItem("tasks");
console.log(oldTasks);

const App = () => {
  const [task, setTask] = useState(JSON.parse(oldTasks) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);

  const handleDelete = (taskIndex) => {
    const newTask = task.filter((task, index) => index !== taskIndex);
    setTask(newTask);
  };

  console.log(task);

  return (
    <div className="app">
      <TaskForm setTask={setTask} />
      <main className="app_main">
        <TaskColumn
          columnName="🎯To Do"
          tasks={task}
          status="todo"
          handleDelete={handleDelete}
        />
        <TaskColumn
          columnName="🤩 Doing"
          tasks={task}
          status="doing"
          handleDelete={handleDelete}
        />
        <TaskColumn
          columnName="✅ Done"
          tasks={task}
          status="done"
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default App;
