import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Cards() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        {/* Header Text */}
        <h1 className='header-txt mt-4 mb-4' >My PortFolio</h1>

        {/* Cards in Grid view */}
        <Col md={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./Images/identity.png" width={"325px"} height={"188px"} />
            <Card.Body>
              <Card.Title>Citizen X</Card.Title>
              <Card.Text>
                Logo Design
              </Card.Text>
              <Button variant="primary">N320,000</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./Images/logo.png" width={"325px"} height={"188px"} />
            <Card.Body>
              <Card.Title>QA Logo</Card.Title>
              <Card.Text>
                Logo Design
              </Card.Text>
              <Button variant="primary">N320,000</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./Images/Logoone.png" width={"325px"} height={"188"} />
            <Card.Body>
              <Card.Title>Thrift By Bos</Card.Title>
              <Card.Text>
                Logo Designs
              </Card.Text>
              <Button variant="primary">N320,000</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Cards;
