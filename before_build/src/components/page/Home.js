import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import Header from '../Header'
import '../style/bootstrap.min.css'

function Home() {
  document.title="Home Page"
  return (
    <Container>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
