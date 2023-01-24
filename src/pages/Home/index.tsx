import { useEffect, useState } from "react";
import { Task } from "../../components/commons";
import { tasksServices } from "../../services";
import { Task as TaskType } from "../../types";

const Home = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  useEffect(() => {
    tasksServices.getAll().then((data) => setTasks(data));
  }, []);

  const cambiarEstado = (id:string) =>{
    tasksServices.taskDone(id)
  }

  const rta = tasks.map(
    ({ category, date, description, status, title, id }) => {
      return (
        <Task
          key={id}
          title={title}
          category={category}
          status={status}
          date={date}
          description={description}
          onStatusChange= { () => cambiarEstado(id)}
        />
      );
    }
  );

  return <div className="dashboard">{rta}</div>;
};

export { Home };
