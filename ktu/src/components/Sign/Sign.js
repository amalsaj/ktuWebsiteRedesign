import React from "react";
import { Container, Button, Card, Row, Col, Image } from "react-bootstrap";
import logo from "../../Images/logo.png";
import "./Sign.css";
function Sign() {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-content-center main1"
    >
      <Row>
        <Col className="logo-container d-flex m-3 text-black" lg={12}>
          <Image
            src={logo}
            alt=""
            width={42}
            height={49}
            rounded
            className="mt-1"
          />
          <h1 className="ms-2 mt-2 fs-6  fw-bolder logo2">
            APJ ABDUL KALAM <br></br>{" "}
            <span className="text_head2">TECHNOLOGICAL UNIVERSITY</span>
            <br></br>
            <span className="text_head3">സാങ്കേതിക-ശാസ്ത്ര സർവകലാശാല</span>
          </h1>
        </Col>
      </Row>
      <Row>
        <Col className="text-center" lg={12}>
          <Card className="card_sign">
            <Card.Header>
              <h1 className="fs-5 mt-2 heading fw-bolder">SIGN IN</h1>
            </Card.Header>
            <Card.Body>
              <form autocomplete="off">
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

                <div className="justify-content-center d-flex align-items-center mt-4">
                  <Button type="submit" className="btn login">
                    Login
                  </Button>
                </div>
                <div className="justify-content-center d-flex align-items-center mt-4">
                  <a href="/" className="text-decoration-none font">
                    Forgot password
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
