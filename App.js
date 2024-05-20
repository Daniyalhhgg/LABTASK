// src/App.js
import React, { useState } from 'react';
import TodoList from './TodoList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1' },
    { id: 2, text: 'Task 2' },
    { id: 3, text: 'Task 3' },
  ]);

  const handleDelete = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
        <TodoList tasks={tasks} onDelete={handleDelete} />
      </header>
    </div>
  );
};

export default App;
