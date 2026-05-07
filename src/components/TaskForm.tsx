import { useState } from 'react';
import API from '../services/api';

export default function TaskForm({ onTaskCreated }: { onTaskCreated: () => void }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    await API.post('/tasks', { title, description });
    setTitle('');
    setDescription('');
    onTaskCreated();
  };

  return (
    <form onSubmit={submit} className="space-y-4 mb-6">
      <input
        className="border p-2 w-full"
        placeholder="Task title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <textarea
        className="border p-2 w-full"
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Task
      </button>
      </form>
        );
      }