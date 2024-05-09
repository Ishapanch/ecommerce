import React from 'react'
import { useState } from "react";
import {Link} from 'react-router-dom';
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
import Megamenu from './Megamenu';

        

export default function MainHeader() {
  const [isBestSellerVisible, setBestSellerVisible] = useState(false);

  const mouseOverOne = () => {
    setBestSellerVisible(true);
  }
  const mouseLeaveOne = () => {
    setBestSellerVisible(false);
  }

  const [isInspiration, setInspiration] = useState(false);

  const mouseOverTwo = () => {
    setInspiration(true);
  }
  const mouseLeaveTwo = () => {
    setInspiration(false);
  }

  const [isDesignerVisible, setDesignerVisible] = useState(false);

  const mouseOverThree = () => {
    setDesignerVisible(true);
  }
  const mouseLeaveThree = () => {
    setDesignerVisible(false);
  }


  const [isFreeVisible, setFreeVisible] = useState(false);

  const mouseOverFour = () => {
    setFreeVisible(true);
  }
  const mouseLeaveFour = () => {
    setFreeVisible(false);
  }

  const [isWeddingVisible , setWeddingVisible] = useState(false)

  const mouseOverFive = () =>{
    setWeddingVisible(true);
  }
  const mouseLeaveFive = () =>{
    setWeddingVisible(false);
  }

  return (
    <>
      <header className="header-menu">
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
                    <ListGroupItem className="top-text">
                      Carte&kids
                    </ListGroupItem>
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

        <section className="bg-hover padding-10">
          <Container className="new">
            <div>
              <Row className="align-items-center padding-10">
                <Col lg="3" className="align-items-center">
                  <Form className="search-box">
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

                <Col lg="3" className="align-items-center text-end ">
                  <ListGroup className="top-bar-list-two align-items-center">
                    <ListGroupItem className="top-icon">
                      <Link to="/">
                        {" "}
                        <CiUser />
                      </Link>
                    </ListGroupItem>
                    <ListGroupItem className="top-icon">
                      <Link to="/">
                        {" "}
                        <CiLocationOn />
                      </Link>
                    </ListGroupItem>
                    <ListGroupItem className="top-icon">
                      <Link to="/">
                        {" "}
                        <CiHeart />{" "}
                      </Link>
                    </ListGroupItem>
                    <ListGroupItem className="top-icon">
                      <Link to="/">
                        {" "}
                        <CiShoppingCart />{" "}
                      </Link>
                    </ListGroupItem>
                  </ListGroup>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
        <section className="bg-hover padding-10">
          <Container className="new">
            <div>
              <Row className="justify-content-center">
                <Col lg="12" className="align-items-center text-center">
                  <ListGroup className="top-bar-list-two menu align-items-center">
                    <ListGroupItem
                      className="top-text-sm"
                      onMouseOver={mouseOverOne}
                      onMouseLeave={mouseLeaveOne}
                    >
                      <a href="/">Best Sellers</a>
                      {isBestSellerVisible && (
                        <div
                          className="dropdown-menu menu-one mega"
                          id="best-seller"
                        >
                          <Row>
                            <Col lg={4}>
                              <ul>
                                <li>Menu 1</li>
                                <li>Menu 2</li>
                                <li>Menu 3</li>
                              </ul>
                            </Col>
                            <Col lg={4}>
                              <ul>
                                <li>Menu 1</li>
                                <li>Menu 2</li>
                                <li>Menu 3</li>
                              </ul>
                            </Col>
                            <Col lg={4}>
                              <ul>
                                <li>Menu 1</li>
                                <li>Menu 2</li>
                                <li>Menu 3</li>
                              </ul>
                            </Col>
                          </Row>
                        </div>
                      )}
                    </ListGroupItem>
                    <ListGroupItem
                      className="top-text-sm"
                      onMouseOver={mouseOverTwo}
                      onMouseLeave={mouseLeaveTwo}
                    >
                      <a href="/">Inspiration</a>

                      {isInspiration && (
                        <div
                          className="dropdown-menu menu-one"
                          id="best-seller"
                        >
                          <ul>
                            <li>Menu 21</li>
                            <li>Menu 22</li>
                            <li>Menu 32</li>
                          </ul>
                        </div>
                      )}
                    </ListGroupItem>

                    <ListGroupItem
                      className="top-text-sm"
                      onMouseOver={mouseOverThree}
                      onMouseLeave={mouseLeaveThree}
                    >
                      <a href="/">Designers</a>

                      {isDesignerVisible && (
                        <div
                          className="dropdown-menu menu-one"
                          id="best-seller"
                        >
                          <ul>
                            <li>Des 21</li>
                            <li>Des 22</li>
                            <li>Des 32</li>
                          </ul>
                        </div>
                      )}
                    </ListGroupItem>

                    <ListGroupItem
                      className="top-text-sm"
                      onMouseOver={mouseOverFour}
                      onMouseLeave={mouseLeaveFour}
                    >
                      <a href="/">Free Design Services</a>

                      {isFreeVisible && (
                        <div
                          className="dropdown-menu menu-one"
                          id="best-seller"
                        >
                          <ul>
                            <li>Free 21</li>
                            <li>Free 22</li>
                            <li>Free 32</li>
                          </ul>
                        </div>
                      )}
                    </ListGroupItem>

                    <ListGroupItem
                      className="top-text-sm"
                      onMouseOver={mouseOverFive}
                      onMouseLeave={mouseLeaveFive}
                    >
                      <a href="/">Wedding Registry</a>

                      {isWeddingVisible && (
                        <div
                          className="dropdown-menu menu-one"
                          id="best-seller"
                        >
                          <ul>
                            <li>Free 21</li>
                            <li>Free 22</li>
                            <li>Free 32</li>
                          </ul>
                        </div>
                      )}
                    </ListGroupItem>
                  </ListGroup>
                </Col>
              </Row>
            </div>
          </Container>
        </section>

        <Megamenu />

        <div className="opacity"></div>
      </header>
    </>
  );
}
