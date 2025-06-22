import React, { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import {
  fetchTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from './services/api';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    const data = await fetchTodos();
    setTodos(data);
  };

  const handleAdd = async (text) => {
    const newTodo = await createTodo(text);
    setTodos([...todos, newTodo]);
  };

  const handleToggle = async (id, completed) => {
    const updated = await updateTodo(id, { completed });
    setTodos(todos.map(todo => (todo._id === id ? updated : todo)));
  };

  const handleEdit = async (id, newText) => {
    const updated = await updateTodo(id, { text: newText });
    setTodos(todos.map(todo => (todo._id === id ? updated : todo)));
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter(todo => todo._id !== id));
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>📝 To-Do List</h1>
      <TodoForm onAdd={handleAdd} />
      <TodoList
        todos={todos}
        onToggle={handleToggle}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
