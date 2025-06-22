import React, { useState } from 'react';

function TodoItem({ todo, onToggle, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleEditSubmit = () => {
    if (!text.trim()) return;
    onEdit(todo._id, text);
    setIsEditing(false);
  };

  return (
    <li
      style={{
        padding: '12px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #ddd',
      }}
    >
      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            flex: 1,
            padding: '6px',
            fontSize: '16px',
          }}
        />
      ) : (
        <span
          onClick={() => onToggle(todo._id, !todo.completed)}
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
            cursor: 'pointer',
            flex: 1,
          }}
        >
          {todo.text}
        </span>
      )}

      <div style={{ display: 'flex', gap: '10px' }}>
        {isEditing ? (
          <>
            <button
              onClick={handleEditSubmit}
              style={{
                backgroundColor: '#28a745',
                color: '#fff',
                border: 'none',
                padding: '6px 10px',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Update
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              style={{
                backgroundColor: '#ffc107',
                color: '#000',
                border: 'none',
                padding: '6px 10px',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(todo._id)}
              style={{
                backgroundColor: '#dc3545',
                color: '#fff',
                border: 'none',
                padding: '6px 10px',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </li>
  );
}

export default TodoItem;
