import React, { useState, ChangeEvent, FormEvent } from "react";

interface Props {
  title?: string;
  content?: string;
  onAdd: (task: { title: string; content: string }) => void;
}

const CreateTask: React.FC<Props> = (props) => {
  const [task, setTask] = useState({ title: "", content: "" });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    props.onAdd(task);
    setTask({
      title: "",
      content: "",
    });
    e.preventDefault();
    // You can handle the form submission here with the `task` state
  };

  return (
    <div className="toDoDivArea">
      <form className="toDoDiv" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control todoText mb-3"
          name="title"
          placeholder="Başlık"
          value={task.title}
          onChange={handleInputChange}
        />
        <textarea
          name="content"
          className="form-control todoText mb-3"
          rows={3}
          placeholder="Yapılacak işi yazınız"
          value={task.content}
          onChange={handleInputChange}
        ></textarea>
        <button onClick={handleSubmit} className="btn btn-primary todoButton">
          Ekle
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
