import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFirestore } from '../hooks/useFirestore';

const TodoList = () => {
  const { id } = useParams();
  const { data: list, updateDocument } = useFirestore('lists');

  const [taskName, setTaskName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (taskName.trim() !== '' && list && list.tasks) { // Assurez-vous que list et list.tasks sont définis
      await updateDocument({
        tasks: [...list.tasks, { name: taskName, completed: false }]
      }, id);
      setTaskName('');
    }
  };

  if (!list) return <div>Loading...</div>;

  return (
    <div>
      <h2>{list.name}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {list.tasks && list.tasks.map((task, index) => (
          <li key={index}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;