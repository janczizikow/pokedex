import React from 'react';
import { Link } from '@reach/router';
import { Container } from '../Grid';
import logo from '../../assets/logo.svg';
import './Header.css';

const Header = () => (
  <header className="Header">
    <Container fluid className="Header__inner">
      <Link to="/" className="Header__logo">
        <img src={logo} alt="logo" />
      </Link>
    </Container>
  </header>
);

export default Header;
