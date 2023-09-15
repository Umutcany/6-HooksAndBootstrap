import React from "react";
import "./App.css";

interface Props {
  id: number;
  title: string;
  content: string;
  onDelete: (id: number) => void;
}

const Task: React.FC<Props> = (props) => {
  const deleteClick = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="contentDiv">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button className="btn btn-danger" onClick={deleteClick}>
          Sil
        </button>
      </div>
    </div>
  );
};

export default Task;
