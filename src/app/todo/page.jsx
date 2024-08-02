"use client";
import { useState } from "react";
import style from './page.module.css'

const TodoList = () => {
  const [addTodo, setAddTodo] = useState([]);
  const [addTask, setAddTask] = useState("");

  const handleChange = (event) => {
    setAddTask(event.target.value);
  };

  const addList = () => {
    setAddTodo([...addTodo, addTask]);
  };
  return (
    <div className={style.container}>
      <h1>TodoList</h1>
      <div className={style.search}>
        <input type="text" onChange={handleChange} />
        <button onClick={addList}>addtask</button>
        <div className={style.task}>
          {addTodo.map((task, i) => (
            <p key={i}>{task}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
