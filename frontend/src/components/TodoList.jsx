import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos = [], onToggle, onEdit, onDelete }) {
  // Defensive check to ensure todos is always an array
  if (!Array.isArray(todos)) {
    console.warn('Expected todos to be an array but got:', todos);
    return <p style={{ textAlign: 'center', color: 'red' }}>Error: invalid task list</p>;
  }

  if (todos.length === 0) {
    return <p style={{ textAlign: 'center' }}>No tasks yet. Add one!</p>;
  }

  return (
    <ul style={{ padding: 0, listStyle: 'none' }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo._id || todo.id} // handles both _id or id
          todo={todo}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
