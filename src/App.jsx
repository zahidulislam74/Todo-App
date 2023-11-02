import { useEffect, useState } from "react";
import CreateTasks from "./components/CreateTasks";
import ListTasks from "./components/ListTasks";
import { Toaster } from "react-hot-toast";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")));
  }, []);
  console.log("tasks", tasks);
  return (
    <DndProvider backend={HTML5Backend}>
      <Toaster />
      <h1 className="text-3xl font-bold text-cyan-700 text-center mt-5">
        TODO APP
      </h1>
      <div className="  flex flex-col items-center pt-32 gap-16">
        <CreateTasks tasks={tasks} setTasks={setTasks} />
        <ListTasks tasks={tasks} setTasks={setTasks} />
      </div>
    </DndProvider>
  );
}

export default App;
