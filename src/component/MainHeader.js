import React from 'react'
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import '../assets/css/MainHeader.css';
import logo from '../assets/logo/logo.png' ;
import flag from '../assets/logo/usa.png' ;
import Form from 'react-bootstrap/Form';
import { CiSearch , CiUser ,CiLocationOn ,CiShoppingCart , CiHeart  } from "react-icons/ci";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function MainHeader() {
  const [isBestSellerVisible, setBestSellerVisible] = useState(false);

  const handleMouseEnter = () => {
    setBestSellerVisible(true);
  }
  const handleMouseLeave = () => {
    setBestSellerVisible(false);
  }

  const [isInspiration, setInspiration] = useState(false);

  const handleMouseEnter2 = () => {
    setInspiration(true);
  }
  const handleMouseLeave2 = () => {
    setInspiration(false);
  }

  return (
    <>
      <section className="bg-grey padding-10">
        <Container className="new">
          <div>
            <Row className="align-items-center">
              <Col lg="6" className="align-items-center">
                <ListGroup className="top-bar-list align-items-center">
                  <ListGroupItem className="top-icon">
                    <img src={logo} className="w-100" />
                  </ListGroupItem>
                  <ListGroupItem className="top-text">
                    Carte&Barrel
                  </ListGroupItem>
                  <ListGroupItem className="top-text">Carte&kids</ListGroupItem>
                  <ListGroupItem className="top-text letter-space">
                    HUDSON|GRANCE
                  </ListGroupItem>
                  <ListGroupItem className="top-icon flag-sm">
                    <img src={flag} className="flag" />
                  </ListGroupItem>
                </ListGroup>
              </Col>

              <Col lg="6" className="align-items-center text-end">
                <p className="top-text">
                  EARN 10% BACK IN REWARD DOLLARS &nbsp; *
                  <a href="/">LEARN MORE</a>
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      <section className="bg-dark padding-10">
        <Container className="new">
          <div>
            <Row className="align-items-center justify-content-center">
              <Col lg="12" className="align-items-center text-center">
                <p className="top-text-two text-white">
                  <a href="/">The Upholstery Event: Up to 20% Off</a>
                  &nbsp; | &nbsp;
                  <a href="/">Up to 30% Off Outdoor</a>
                  &nbsp; | &nbsp;
                  <a href="/">Up to 60% Off Clearance</a>
                  &nbsp; | &nbsp;
                  <a href="/">Sign Up for Texts & Save 15%*</a>
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      <section className="bg-white padding-10">
        <Container className="new">
          <div>
            <Row className="align-items-center">
              <Col lg="3" className="align-items-center">
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="What can we help you find ?"
                    className="me-2 search"
                    aria-label="Search"
                  />
                  <span className="search-icon">
                    <CiSearch />
                  </span>
                </Form>
              </Col>

              <Col lg="6" className="align-items-center text-center">
                <div>
                  <img src={logo} className="logo-header" />
                </div>
              </Col>

              <Col lg="2" className="align-items-center text-end offset-lg-1">
                <ListGroup className="top-bar-list-two align-items-center">
                  <ListGroupItem className="top-icon">
                    <CiUser />
                  </ListGroupItem>
                  <ListGroupItem className="top-icon">
                    <CiLocationOn />
                  </ListGroupItem>
                  <ListGroupItem className="top-icon">
                    <CiHeart />
                  </ListGroupItem>
                  <ListGroupItem className="top-icon">
                    <CiShoppingCart />
                  </ListGroupItem>
                </ListGroup>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className="bg-white padding-10">
        <Container className="new">
          <div>
            <Row className="justify-content-center">
              <Col lg="6" className="align-items-center text-center">
                <ListGroup className="top-bar-list-two menu align-items-center">
                  <ListGroupItem className="top-text-sm">
                    <a href="/" onMouseOver={handleMouseEnter} onMouseLeave={handleMouseLeave}>Best Sellers</a>
                    {isBestSellerVisible && 
                    <div className="dropdown-menu" id='best-seller'>
                      <ul>
                        <li>Menu 1</li>
                        <li>Menu 2</li>
                        <li>Menu 3</li>
                      </ul>
                    </div>
                    }
                  </ListGroupItem>
                  <ListGroupItem className="top-text-sm">
                    <a href="/" onMouseOver={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>Inspiration</a>

                    {isInspiration && 
                    <div className="dropdown-menu" id='best-seller'>
                      <ul>
                        <li>Menu 21</li>
                        <li>Menu 22</li>
                        <li>Menu 32</li>
                      </ul>
                    </div>
                    }
                  </ListGroupItem>

                  <ListGroupItem className="top-text-sm">
                    <a href="/">Designers</a>
                  </ListGroupItem>

                  <ListGroupItem className="top-text-sm">
                    <a href="/">Free Design Services</a>
                  </ListGroupItem>

                  <ListGroupItem className="top-text-sm">
                    <a href="/">Wedding Registry</a>
                  </ListGroupItem>
                </ListGroup>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
}
