import React, { useRef, useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useNavigate ();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/dashboard');
    } catch {
      setError('Failed to log in');
    }

    setLoading(false);
  };

  return (
    <div>
      <h2>Log In</h2>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="email" ref={emailRef} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" ref={passwordRef} required />
        </div>
        <button disabled={loading} type="submit">Log In</button>
      </form>
      <div>
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
