import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getTodos = async () => {
  const response = await axios.get(`${API_BASE_URL}/todos`);
  return response.data;
};

export const addTodo = async (title: string) => {
  const response = await axios.post(`${API_BASE_URL}/todos`, { title });
  return response.data;
};

export const updateTodo = async (id: number, title: string) => {
  const response = await axios.put(`${API_BASE_URL}/todos/${id}`, { title });
  return response.data;
};

export const deleteTodo = async (id: number) => {
  const response = await axios.delete(`${API_BASE_URL}/todos/${id}`);
  return response.data;
};
