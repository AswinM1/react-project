// Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // If login is successful, show success toast and navigate to home
      toast.success('Login successful');
      history('/'); // Navigate to the root ("/") or your desired home page
    } catch (error) {
      console.error('Error logging in:', error.message);
      // If login fails, show error toast
      toast.error('Login failed. Please check your credentials.');
    }
  };

  return (
    <ToastContainer>
      <div className="container">
        <div className="form-box">
          {/* ... existing code ... */}
          <button type="button" className="btn btn-secondary btn-block" onClick={handleLogin}>
            Login
          </button>
          <div className="message">
            <div>
              <input type="checkbox" /> Remember ME
            </div>
            <div>
              <Link to="/signup">Don't have an account? Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </ToastContainer>
  );
};

export default Login;
