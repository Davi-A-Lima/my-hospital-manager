import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navigation.module.css';

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/stock">Stock</Link>
    </nav>
  );
}

export default Navigation;