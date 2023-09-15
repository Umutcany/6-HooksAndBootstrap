import CreateTask from "./CreateTask";
import Header from "./Header";
import "./App.css";
import { useState } from "react";
import Task from "./Task";
import Footer from "./Footer";

type Task = {
  title: string;
  content: string;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (newTask: Task) => {
    setTasks((prevTask) => {
      return [...prevTask, newTask];
    });
  };

  const deleteTask = (id: number) => {
    setTasks((prevTask) => {
      return prevTask.filter((taskItem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div>
        <Header />
        <CreateTask onAdd={addTask} />
        <div className="row ">
          {tasks.map((taskItem, index) => {
            return (
              <Task
                key={index}
                id={index}
                title={taskItem.title}
                content={taskItem.content}
                onDelete={deleteTask}
              />
            );
          })}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
