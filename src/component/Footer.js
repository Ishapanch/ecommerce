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
import { CiInstagram } from "react-icons/ci";
import { FaPinterestP } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import '../component/Footer.css'
import { FaFacebookF } from "react-icons/fa";
import brands from '../assets/brands-footer.jpg'

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
                    <TbDeviceMobileMessage className="stroke-1" />
                  </div>
                  <div className="text-icon">
                    <h5>CONTACT US & STORE LOCATOR</h5>
                  </div>
                </div>
                <div className="content">
                  <p>
                    Questions? Text us: <a to='/'>510-399-2206</a>
                  </p>
                  <div className="links">
                    <a to="/">CHAT WITH US</a>
                    <a to="/">LEAVE FEEDBACK</a>
                    <br />
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
                    Earn Reward Dollars every time you shop* (excluding special
                    financing purchases), plus get access to special offers and
                    events.
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
                    Try our View in Your Room feature, manage registries and
                    save payment info.
                  </p>
                  <div className="image">
                    <a to="/">
                      <img src={appstore} className="app-icon"></img>
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <hr className="my-3" />

          <Row>
            <Col lg={3} md={6} sm={12}>
              <div className="footer-padding">
                <div className="txt-icon-sec">
                  <div className="text-icon">
                    <h5>HELP</h5>
                  </div>
                </div>
                <ul className="list-footer">
                  <li>
                    <a to="/">CUSTOMER SERVICE</a>
                  </li>
                  <li>
                    <a to="/">ACCOUNT</a>
                  </li>
                  <li>
                    <a to="/">RETURN POLICY</a>
                  </li>
                  <li>
                    <a to="/">SHIPPING INFORMATION</a>
                  </li>
                  <li>
                    <a to="/">PRODUCT RECALLS</a>
                  </li>
                  <li>
                    <a to="/">EMAIL & TEXT PREFERENCES</a>
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg={3} md={6} sm={12}>
              <div className="footer-padding">
                <div className="txt-icon-sec">
                  <div className="text-icon">
                    <h5>RESOURCES</h5>
                  </div>
                </div>
                <ul className="list-footer">
                  <li>
                    <a to="/">FREE DESIGN SERVICES</a>
                  </li>
                  <li>
                    <a to="/">GIFT REGISTRY</a>
                  </li>
                  <li>
                    <a to="/">GIFT CARDS</a>
                  </li>
                  <li>
                    <a to="/">CATALOGS</a>
                  </li>
                  <li>
                    <a to="/">CB2 INTERIORS</a>
                  </li>
                  <li>
                    <a to="/">TRADE PROGRAM</a>
                  </li>
                  <li>
                    <a to="/">CONTACT GRADE FURNITURE</a>
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg={3} md={6} sm={12}>
              <div className="footer-padding">
                <div className="txt-icon-sec">
                  <div className="text-icon">
                    <h5>OUR COMPANY</h5>
                  </div>
                </div>
                <ul className="list-footer">
                  <li>
                    <a to="/">ABOUT US</a>
                  </li>
                  <li>
                    <a to="/">CAREERS</a>
                  </li>
                  <li>
                    <a to="/">RESPONSIBLE DESIGN</a>
                  </li>
                  <li>
                    <a to="/">ACCESSIBILITY STATEMENT</a>
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg={3} md={6} sm={12}>
              <div className="footer-padding">
                <div className="txt-icon-sec">
                  <div className="text-icon">
                    <h5>
                      SHOW US YOUR LOOK WITH <a to="/">#MYCB2</a>
                    </h5>
                  </div>
                </div>
                <div className="icons-social">
                  <CiInstagram />
                  <FaTiktok />
                  <FaPinterestP />
                  <FaYoutube />
                  <FaFacebookF />
                </div>
                <div className="txt-icon-sec">
                  <div className="text-icon">
                    <h5>OUR BRANDS</h5>
                    <img src={brands} className="w-100"></img>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <hr className="my-3" />

          <Row>
            <Col lg={12} md={12} sm={12}>
              <div className="footer-padding">
                <div className="content">
                  <div className="links d-flex justify-content-between">
                    <a to="/">TERMS OF USE</a>
                    <a to="/">PRIVACY</a>
                    <a to="/">SITE INDEX</a>
                    <a to="/">AD CHOICES</a>
                    <a to="/">COOKIE SETTINGS</a>
                    <a to="/">CA SUPPLY CHAINS ACT</a>
                    <a to="/">
                      DO NOT SELL OR SHARE MY PERSONAL INFORMATION
                    </a>
                    <a to="/">CREDIT CARD TERMS</a>
                  </div>
                  <p className='py-2 mb-0'>©2024 All rights reserved. If you are using a screen reader and are having problems using this website, please call (800) 967-6696 for assistance.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}
