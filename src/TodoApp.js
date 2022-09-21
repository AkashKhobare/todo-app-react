import { useState } from 'react';
import './App.css';

import AddTodo from './components/AddTodo'

const TodoApp = () => {
  
  const [ todos, setTodos ] = useState([]);

  return (
    <main className="todo-app-container"> 
      <AddTodo addTodo={(todo) => { 
        setTodos([
          ...todos, todo
        ]) 
      }}/>

      <h2>Todos</h2>
      {todos?.length > 0 ? 
        todos : 
        <p>Oops! There is nothing in the to-do list</p>}
    </main>
  )
}

export default TodoApp;