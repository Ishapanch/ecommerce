import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { PiCubeThin } from "react-icons/pi";
import { CiCreditCard2 } from "react-icons/ci";
import { TbDeviceMobileMessage } from "react-icons/tb";
import { CiMobile1 } from "react-icons/ci";
import appstore from "../assets/images/app-store.png"

import '../component/Footer.css'

export default function Footer() {
  return (
    <footer className="padding-sec bg-grey">
      <div className="footer-sec">
        <Container fluid>
          <Row>
            <Col lg={3} md={6} sm={12}>
              <div className="footer-padding">
                <div className="txt-icon-sec">
                  <div className="icon">
                    <PiCubeThin />
                  </div>
                  <div className="text-icon">
                    <h5>ORDERS</h5>
                  </div>
                </div>
                <div className="content">
                  <p>
                    Find out when your purchase will arrive or schedule a
                    delivery.
                  </p>
                  <div className="links">
                    <a to="/">TRACK ORDER</a>
                    <a to="/">SCHEDULE DELIVERY</a>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={3} md={6} sm={12}>
              <div className="footer-padding">
                <div className="txt-icon-sec">
                  <div className="icon">
                  <TbDeviceMobileMessage className='stroke-1'/>
                  </div>
                  <div className="text-icon">
                    <h5>CONTACT US & STORE LOCATOR</h5>
                  </div>
                </div>
                <div className="content">
                  <p>
                  Questions? Text us: <u>510-399-2206</u>
                  </p>
                  <div className="links">
                    <a to="/">CHAT WITH US</a>
                    <a to="/">LEAVE FEEDBACK</a>
                    <br/>
                    <a to="/">FIND A STORE</a>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={3} md={6} sm={12}>
              <div className="footer-padding">
                <div className="txt-icon-sec">
                  <div className="icon">
                  <CiCreditCard2 />
                  </div>
                  <div className="text-icon">
                    <h5>ORCB2 CREDIT CARDDERS</h5>
                  </div>
                </div>
                <div className="content">
                  <p>
                  Earn Reward Dollars every time you shop* (excluding special financing purchases), plus get access to special offers and events.
                  </p>
                  <div className="links">
                    <a to="/">APPLY NOW</a>
                    <a to="/">MANAGE YOUR ACCOUNT</a>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={3} md={6} sm={12}>
              <div className="footer-padding">
                <div className="txt-icon-sec">
                  <div className="icon">
                  <CiMobile1 />
                  </div>
                  <div className="text-icon">
                    <h5>OUR IOS APP</h5>
                  </div>
                </div>
                <div className="content">
                  <p>
                  Try our View in Your Room feature, manage registries and save payment info.
                  </p>
                  <div className="image">
                    <a to="/">
                        <img src={appstore} className='app-icon'></img>
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}
