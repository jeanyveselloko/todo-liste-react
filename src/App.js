import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import TodoLists from './components/TodoLists';
import TodoList from './components/TodoList';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Route publique */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          
          {/* Utilisation de PrivateRoute pour la route protégée */}
          <Route path="/" element={<PrivateRoute component={Dashboard} />} />
          <Route path="/lists" element={<TodoLists />} />
          <Route path="/lists/:id" element={<TodoList />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
