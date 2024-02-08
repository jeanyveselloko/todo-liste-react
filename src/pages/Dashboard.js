import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import TodoLists from '../components/TodoLists';

const Dashboard = () => {
  const { currentUser, logout } = useAuth();
  const history = useNavigate();

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