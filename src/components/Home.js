// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
  return (
    <div style={styles.container}>
      <h1>Welcome to Our eBook Store</h1>
      <p>Discover a vast collection of eBooks on various topics.</p>
      <Link to="/explore" style={styles.exploreButton}>
        Explore
      </Link>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
  },
  exploreButton: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '18px',
    backgroundColor: '#3498db',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
  },
};

export default Home;
