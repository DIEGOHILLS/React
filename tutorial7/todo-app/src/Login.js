import React, { useState } from 'react';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Sign up function to create a new user
  const signUp = () => {
    setError('');
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('User signed up:', userCredential.user);
        setIsLoggedIn(true); // After successful sign-up, update state to proceed to Tasks
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  // Log in function to sign in an existing user
  const logIn = () => {
    setError('');
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('User logged in:', userCredential.user);
        setIsLoggedIn(true); // After successful login, update state to proceed to Tasks
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <div style={{ color: 'red' }}>{error}</div>}

      <button onClick={signUp} disabled={loading}>
        {loading ? 'Signing Up...' : 'Sign Up'}
      </button>
      <button onClick={logIn} disabled={loading}>
        {loading ? 'Logging In...' : 'Log In'}
      </button>
    </div>
  );
}

export default Login;
