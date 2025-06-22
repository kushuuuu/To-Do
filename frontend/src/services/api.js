const API_URL = 'http://localhost:5000/api/todos';

export const fetchTodos = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const createTodo = async (text) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  });
  return res.json();
};

export const updateTodo = async (id, updatedFields) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedFields),
  });
  return res.json();
};

export const deleteTodo = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  return res.json();
};
