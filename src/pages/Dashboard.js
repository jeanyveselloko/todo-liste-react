import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import TodoLists from '../components/ToDoLists';

const Dashboard = () => {
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await logout();
      history.push('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {currentUser.email}!</p>
      <button onClick={handleLogout}>Log Out</button>
      <TodoLists />
    </div>
  );
};

export default Dashboard;