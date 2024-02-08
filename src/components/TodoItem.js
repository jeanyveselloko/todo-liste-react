import React from 'react';
import { firestore } from '../firebase/firebase';

const TodoItem = ({ task }) => {
  const handleTaskCompletionToggle = async () => {
    try {
      await firestore.collection('lists').doc(task.listId).update({
        tasks: task.tasks.map(t => {
          if (t.id === task.id) {
            return { ...t, completed: !t.completed };
          }
          return t;
        })
      });
    } catch (error) {
      console.error('Error updating task completion status:', error);
    }
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleTaskCompletionToggle}
      />
      <span>{task.name}</span>
    </li>
  );
};

export default TodoItem;
