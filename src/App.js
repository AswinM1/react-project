import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/Products" element={<Products />} />
          <Route path='/Signup' element={<Signup></Signup>}></Route>
        </Routes>
          
      </div>
    </Router>
  );
}

export default App;
