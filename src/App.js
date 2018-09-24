import React from 'react';
import { Router } from '@reach/router';
import Header from './components/Header';
import MainWithConnect from './containers/Main';
import NotFound from './components/NotFound';
import './styles/App.css';

const App = () => (
  <div className="App">
    <Header />
    <main className="App__content">
      <Router>
        <MainWithConnect path="/" />
        <NotFound default />
      </Router>
    </main>
  </div>
);

export default App;
