// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="fixed" style={{backgroundColor:'black'}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Book heaven
        </Typography>
        <Button color="inherit" component={Link} to="/">  
          Home
        </Button>
        <Button color="inherit" component={Link} to="/Login">
          Login
        </Button>
        <Button color="inherit" component={Link} to="/About">
          About Us
        </Button>
        <Button color="inherit" component={Link} to="/Products">
          Products
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
