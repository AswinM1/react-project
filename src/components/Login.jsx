// Logina.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevents the form from submitting and reloading the page

    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Login successful');
      history('/');
    } catch (error) {
      console.error('Error logging in:', error.message);
      toast.error('Login failed. Please check your credentials.');
    }
  };

  return (
    <ToastContainer>
      <div className='container'>
        <form className='form' onSubmit={handleLogin}>
          <div className='input-group'>
            <label htmlFor='uname'>Username</label>
            <input type='text' id='uname' placeholder='Username' onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='input-group'>
            <label htmlFor='pass'>Password</label>
            <input type='password' id='pass' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className='button-group'>
            <button type='submit'>Login</button>
          </div>
        </form>
      </div>
    </ToastContainer>
  );
};

export default Login;
