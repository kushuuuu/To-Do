import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { fetchTodos, createTodo, updateTodo, deleteTodo } from "./services/api";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      const response = await fetchTodos();
      // Extract the todo array from response.data.todo
      const todosArray = response.data.todo;
      if (Array.isArray(todosArray)) {
        setTodos(todosArray);
      } else {
        console.error("Invalid todos array from fetchTodos", response);
      }
    } catch (error) {
      console.error("Error loading todos:", error);
    }
  };

  // handleAdd expects an object with all required fields: title, description, dueDate
  const handleAdd = async (todoData) => {
    try {
      const response = await createTodo(todoData);
      // Add the new todo (assuming response.data.todo contains the whole updated list)
      const todosArray = response.data.todo;
      if (Array.isArray(todosArray)) {
        setTodos(todosArray);
      } else {
        console.error("Invalid todos array from createTodo", response);
      }
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  // Toggle completion: updates hasCompleted only
  const handleToggle = async (id, hasCompleted) => {
    try {
      const response = await updateTodo(id, { hasCompleted });
      const todosArray = response.data.todo;
      if (Array.isArray(todosArray)) {
        setTodos(todosArray);
      } else {
        console.error("Invalid todos array from updateTodo", response);
      }
    } catch (error) {
      console.error("Error toggling todo:", error);
    }
  };

  // Edit title, description, dueDate
  const handleEdit = async (id, updatedFields) => {
    try {
      const response = await updateTodo(id, updatedFields);
      const todosArray = response.data.todo;
      if (Array.isArray(todosArray)) {
        setTodos(todosArray);
      } else {
        console.error("Invalid todos array from updateTodo", response);
      }
    } catch (error) {
      console.error("Error editing todo:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await deleteTodo(id);
      const todosArray = response.data.todo;
      if (Array.isArray(todosArray)) {
        setTodos(todosArray);
      } else {
        console.error("Invalid todos array from deleteTodo", response);
      }
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>📝 To-Do List</h1>
      <TodoForm onAdd={handleAdd} />
      <TodoList todos={todos} onToggle={handleToggle} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default App;
git init