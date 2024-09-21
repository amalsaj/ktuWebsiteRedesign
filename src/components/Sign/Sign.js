import React from "react";
import { Container, Button, Card, Row, Col, Image } from "react-bootstrap";
import logo from "../../Images/logo.png";
import "./Sign.css";

function Sign() {
  return (
    <Container fluid className="main1">
      <Row>
        <Col className="logo-container">
          <div className="logo-wrapper">
            <Image src={logo} alt="Logo" className="logo-image" />
            <div className="logo-text">
              <h1 className="logo-title">APJ ABDUL KALAM</h1>
              <h2 className="logo-subtitle">TECHNOLOGICAL UNIVERSITY</h2>
              <h3 className="logo-subtitle-malayalam">
                സാങ്കേതിക-ശാസ്ത്ര സർവകലാശാല
              </h3>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col className="text-center">
          <Card className="card_sign">
            <Card.Header>
              <h1 className="fs-5 mt-2 heading fw-bolder">SIGN IN</h1>
            </Card.Header>
            <Card.Body>
              <form autoComplete="off">
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="form-control input_sign"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control input_sign"
                    required
                  />
                </div>
                <Button type="submit" className="btn login">
                  Login
                </Button>
                <div className="mt-2">
                  <a href="/" className="text-decoration-none">
                    Forgot password?
                  </a>
                </div>
              </form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Sign;
