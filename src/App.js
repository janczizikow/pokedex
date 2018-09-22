import React from 'react';
import Header from './components/Header';
import { Container } from './components/Grid';
import './styles/App.css';

const App = () => (
  <div className="App">
    <Header />
    <main className="App__content">
      <Container>
        <p>content</p>
      </Container>
    </main>
  </div>
);

export default App;
