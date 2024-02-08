import React, { useState } from 'react';
import { useFirestore } from '../hooks/useFirestore';

const TaskForm = ({ listId }) => {
  const [taskName, setTaskName] = useState('');
  const { addDocument } = useFirestore('lists');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (taskName.trim() !== '') {
      await addDocument({ name: taskName, completed: false }, listId);
      setTaskName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
