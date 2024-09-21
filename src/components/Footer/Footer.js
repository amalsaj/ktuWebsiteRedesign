import React from "react";
import logo from "../../Images/logo.png";
import insta from "../../Images/instagram.png";
import face from "../../Images/facebook.png";
import tube from "../../Images/youtube.png";
import link from "../../Images/linkedin.png";
import "./Footer.css";
import { Container, Image, Row, Col } from "react-bootstrap";
function Footer() {
  return (
    <Container className="main" fluid >
      <Row className="foot1 text-center">
        <Col></Col>
        <Col className="mt-4" lg={3} md={3} sm={3} xm={3}>
          <h3 className="">Quick Links</h3>
          <ul>
            <li>
              <a href="/academic-calendar">Academic Calendar</a>
            </li>
            <li>
              <a href="/course-catalog">Course Catalog</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </Col>
        <Col className="mt-4" lg={3} md={3} sm={3} xm={3}>
          <h3 className="">Resources</h3>
          <ul>
            <li>
              <a href="/student-portal">Student Portal</a>
            </li>
            <li>
              <a href="/research-centers">Research Centers</a>
            </li>
            <li>
              <a href="/it-support">IT Support</a>
            </li>
          </ul>
        </Col>

        <Col className="mt-4" lg={3} md={3} sm={3} xm={3}>
          <h3 className="">Legal & Policies</h3>
          <ul>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms-of-use">Terms of Use</a>
            </li>
            <li>
              <a href="/accessibility">Accessibility Statement</a>
            </li>
          </ul>
        </Col>
        <Col></Col>
      </Row>
      <Row className="text-center foot2">
        <Col lg={12} className="line ms-2 me-2"></Col>
        <Col lg={4} md={4} sm={4} xm={4}>
          <h1 className="fs-6">
            © APJ Abdul Kalam Technological University 2021
          </h1>
        </Col>
        <Col className="foot" lg={4} md={4} sm={4} xm={4}>
          <h1 className="fs-6">
            <span className="fw-bold text"> APJ ABDUL KALAM </span>
            <br></br>
            <span className="fs-6 text_center fw-bolder">
              TECHNOLOGICAL UNIVERSITY
            </span>
            <br></br>
            <span className="fs-6 text_malayalam">
              സാങ്കേതിക-ശാസ്ത്ര സർവകലാശാല
            </span>
          </h1>
          <Image src={logo} alt="" width={50} />
        </Col>

        <Col className="text-center fs-3" lg={4} md={4} sm={4} xm={4}>
          <Image
            src={insta}
            width={30}
            title="Instagram"
            className="me-3 social"
          />
          <Image
            src={face}
            width={30}
            title="Facebook"
            className="me-3 social"
          />
          <Image
            src={tube}
            width={30}
            title="Youtube"
            className="me-3 social"
          />
          <Image
            src={link}
            width={30}
            title="Linkedln"
            className="me-3 social"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
