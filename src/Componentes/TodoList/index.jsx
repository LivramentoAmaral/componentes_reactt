import React from "react";
import styles from "./styles.module.css"
const tasks = [
    { title: 'Fazer compras', completed: false },
    { title: 'Lavar o carro', completed: true },
    { title: 'Estudar React', completed: false },
  ];
function TodoList(){
    return(
    <ul className={styles.taskList}>
      {tasks.map((task, index) => (
        <li
          key={index}
          className={`${styles.taskItem} ${task.completed ? styles.completed : ''}`}
        >
          {task.completed ? <del>{task.title}</del> : task.title}
        </li>
      ))}
    </ul>
    )
}

export default TodoList;
