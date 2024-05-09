import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import banner from '../../assets/images/home/shop-rugs.jpeg'
import '../home/Limited.css'

export default function MiddlleBanner() {
  return (
    <section className="banner-two">
      <Container fluid>
        <Row className="p-0">
          <Col lg={12} className="p-0">
            <div className="banner-img">
              <div className="img-sec">
                <img src={banner} className="w-100" />
              </div>
              <div className="bannertxt">
                <h6>WOVEN TO LAST</h6>
                <p>CHOOSE WISELY AND YOU’LL NEVER NEED ANOTHER</p>
                <div className="banner-btn">
                  <div className="btn-one">
                    <a href="/" className="btn btn-primary">
                      SHOP RUGS
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
