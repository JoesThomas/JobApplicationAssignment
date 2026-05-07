import { useEffect, useState } from 'react';
import API from '../services/api';
import { Task } from '../types/Task';
import TaskItem from './TaskItem';

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    const response = await API.get('/tasks');
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} refresh={fetchTasks} />
      ))}
    </div>
  );
}