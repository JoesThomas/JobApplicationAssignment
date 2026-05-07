
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { useState } from 'react';

function App() {
  const [, setRefresh] = useState(0);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">HMCTS Task Manager</h1>
      <TaskForm onTaskCreated={() => setRefresh(prev => prev + 1)} />
      <TaskList />
    </div>
  );
}

export default App;