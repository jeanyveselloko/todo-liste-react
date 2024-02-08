import React, { useState } from 'react';
import { useFirestore } from '../hooks/useFirestore';

const ListForm = () => {
  const [listName, setListName] = useState('');
  const { addDocument } = useFirestore('lists');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (listName.trim() !== '') {
      await addDocument({ name: listName, tasks: [] });
      setListName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter list name"
        value={listName}
        onChange={(e) => setListName(e.target.value)}
      />
      <button type="submit">Create List</button>
    </form>
  );
};

export default ListForm;
