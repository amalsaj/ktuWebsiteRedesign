import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Nav,
  Navbar,
  Row,
  Col,
  Image,
  Button,
} from "react-bootstrap";
import Img from "../../Images/bg.avif";
import logo from "../../Images/logo.png";
import "./Header.css";

function Header() {
  const navigate = useNavigate();
  const buttonClick = () => {
    navigate("/sign");
    console.log("Sign");
  };
  return (
    <div>
      <Container fluid>
        <Row>
          <Col
            xs={12}
            className="nav_style"
            style={{
              backgroundImage: `linear-gradient(to top,transparent, #ffffff, #89CFF0), url(${Img})`,
              height: "80vh",
              width: "100%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Navbar expand="lg" className="mt-2">
              <Container>
                <Navbar.Brand className="nav_brand" href="#home">
                  <Image src={logo} alt="" width={42} height={49} rounded  className="mt-1"/>
                  <h1 className="ms-2 mt-2 fs-6  fw-bolder logo1">
                    APJ ABDUL KALAM <br></br>{" "}
                    <span className="text_head2">TECHNOLOGICAL UNIVERSITY</span>
                    <br></br>
                    <span className="text_head3">
                      സാങ്കേതിക-ശാസ്ത്ര സർവകലാശാല
                    </span>
                  </h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto fw-bolder ">
                    <Nav.Link className="text-dark">HOME</Nav.Link>
                    <Nav.Link className="text-dark">RESEARCH</Nav.Link>
                    <Nav.Link className="text-dark">FAQ</Nav.Link>
                    <Nav.Link className="text-dark">CONTACT US</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <div className="text-center">
              <h1 className="mt-5 center fw-semibold">
                APJ ABDUL KALAM TECHNOLOGICAL UNIVERSITY<br></br> E-GOVERNANCE
                PORTAL
              </h1>
              <Button onClick={buttonClick} className="button mt-4">
                SIGN IN
              </Button>
            </div>
          </Col>
          <Col className="white_shade"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
