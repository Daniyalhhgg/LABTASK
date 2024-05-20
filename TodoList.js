// src/TodoList.js
import React from 'react';

const TodoList = ({ tasks, onDelete }) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {task.text}
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
