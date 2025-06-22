import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onToggle, onEdit, onDelete }) {
  if (todos.length === 0) {
    return <p style={{ textAlign: 'center' }}>No tasks yet. Add one!</p>;
  }

  return (
    <ul style={{ padding: 0, listStyle: 'none' }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
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
