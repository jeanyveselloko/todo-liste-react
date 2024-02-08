import React from 'react';
import { useFirestore } from '../hooks/useFirestore';
import { Link } from 'react-router-dom';
import ListForm from './ListForm';

const TodoLists = () => {
  const { data: lists } = useFirestore('lists');

  return (
    <div>
      <h2>Lists of Tasks</h2>
      <ListForm />
      <ul>
        {lists.map(list => (
          <li key={list.id}>
            <Link to={`/lists/${list.id}`}>{list.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoLists;