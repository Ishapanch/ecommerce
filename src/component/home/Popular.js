import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import top from  '../../assets/images/home/top-sec.jpeg'
import '../home/Limited.css'

export default function Popular() {
  return (
    <div className="bg-white padding-sec-bottom">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <h2 className="lg-heaing">10 OUT OF 10</h2>
            <h6 className="sm-heading">MEET OUR MOST POPULAR PIECES</h6>
          </Col>
          <Col lg={11}>
            <Row className="justify-content-center">
              <Col lg={3}>
                <div className="button-sec">
                  <button className="square">SHOP BEST SELLERS</button>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={12}>
            <div className="pt-5">
              <img src={top} className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
