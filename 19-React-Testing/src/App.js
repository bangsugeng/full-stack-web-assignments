import React, { useState } from 'react';
import './App.css';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { AddTodo } from './components/helper';

const App = () => {
  const defaultTodo = [
    {
      id: 1,
      name: 'Learn JSX',
      isComplete: false,
    },
    {
      id: 2,
      name: 'Build awasome react app',
      isComplete: false,
    },
    {
      id: 3,
      name: 'Ship it',
      isComplete: false,
    }
  ];
  const [currentToDo, setCurrentToDo] = useState('');
  const [todos, setTodos] = useState(defaultTodo);

  const handleOnChangeInput = (e) => {
    e.preventDefault();
    setCurrentToDo(e.target.value)
  }

  const generateId = () => Math.floor(Math.random() * 100000)

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: generateId(),
      name: currentToDo,
      isComplete: false
    }

    const updateTodos = AddTodo(todos, newTodo);
    setTodos(updateTodos);
    setCurrentToDo('');
  }

  console.log(currentToDo)
  return (
    <div className="App">
      <h1>Simple Todolist App</h1>

      <TodoForm handleSubmit={handleSubmit} handleOnChangeInput={handleOnChangeInput} currentTodo={currentToDo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
