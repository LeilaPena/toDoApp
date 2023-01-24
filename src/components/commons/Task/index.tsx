import { FC } from "react";
import { Category, Task as TaskType } from "../../../types";
import { Button } from "../Button";

type Props = Omit<TaskType, "id"> & {onStatusChange: () => void}

const Task: FC<Props> = ({ category, date, description, status, title, onStatusChange }) => {
  return (
    <div className="card w-25">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <br />
        <strong>Estado:</strong> {status}
        <br />
        <strong>Fecha:</strong> {date.toString()}
        <br />
        <strong>{category.name}</strong>
        <br />
      </div>
      <Button className="btn btn-primary" handleClick={onStatusChange} text="Cambiar estado" type="button"/>
    </div>
  );
};

export { Task };
