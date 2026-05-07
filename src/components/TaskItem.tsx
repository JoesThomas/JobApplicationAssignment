import API from '../services/api';
import { Task } from '../types/Task';

export default function TaskItem({ task, refresh }: { task: Task; refresh: () => void }) {
  const updateStatus = async (status: string) => {
    await API.put(`/tasks/${task.id}`, { status });
    refresh();
  };

  const deleteTask = async () => {
    await API.delete(`/tasks/${task.id}`);
    refresh();
  };

  return (
    <div className="border rounded p-4 shadow mb-3">
      <h3 className="font-bold">{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <div className="flex gap-2 mt-2">
        <button onClick={() => updateStatus('In Progress')} className="bg-yellow-400 px-2 py-1 rounded">
          In Progress
        </button>
        <button onClick={() => updateStatus('Done')} className="bg-green-500 text-white px-2 py-1 rounded">
          Done
        </button>
        <button onClick={deleteTask} className="bg-red-500 text-white px-2 py-1 rounded">
          Delete
        </button>
      </div>
    </div>
  );
}