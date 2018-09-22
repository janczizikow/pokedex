import React from 'react';
import { Container } from '../Grid';
import logo from '../../assets/logo.svg';
import './Header.css';

const Header = () => (
  <header className="Header">
    <Container fluid className="Header__inner">
      <div className="Header__logo">
        <img src={logo} alt="logo" />
      </div>
    </Container>
  </header>
);

export default Header;
