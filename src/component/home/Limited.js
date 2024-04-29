import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import limited from  '../../assets/images/home/limited.jpeg'
import '../home/Limited.css'

export default function Limited() {

    const buttonList = [
        "SHOP TABLETOP",
         "SHOP DECOR",
        "SHOP BEDDING",
        "SHOP PILLOWS & THROWS"        
    ]
  return (
    <div className="bg-white padding-sec">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <h6 className="sm-heading">LIMITED TIME ONLY</h6>
            <h2 className="lg-heaing">FREE, FAST SHIPPING OVER $149</h2>
            <p className="desc-txt">
              *EXCLUDES FURNITURE, RUGS, AND OVERSIZED ITEMS
            </p>
          </Col>
          <Col lg={11}>
            <Row>
              {buttonList.map((button) => (
                <Col>
                  <div className="button-sec">
                    <button className='square'>{button}</button>
                  </div>
                </Col>
              ))}
              
            </Row>
          </Col>
          <Col lg={12}>
              <div className="padding-sec">
                <img src={limited} className='w-100'/>
              </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
