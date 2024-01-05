import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import About from './components/About';
import Products from './components/Products';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/About" element={<About />} />
          <Route path="/Products" element={<Products />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Explore' element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
