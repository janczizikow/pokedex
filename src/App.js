import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import { Container, Row, Col } from './components/Grid';
import Card from './components/Card';
import CardImg from './components/CardImg';
import CardBody from './components/CardBody';
import './styles/App.css';

export const App = () => (
  <div className="App">
    <Header />
    <main className="App__content">
      <Container>
        <Row>
          <Col sm={6} md={4} lg={3}>
            <Card>
              <CardImg
                src="http://www.serebii.net/pokemongo/pokemon/001.png"
                alt="pokemon"
              />
              <CardBody num="#001" heading="Bulbasaur">
                <p>Labels here</p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  </div>
);

export default connect()(App);
