import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Card.css";
function Card_Content() {
  return (
    <div>
      <Container fluid style={{ marginLeft: "2rem"}}>
        <Row className="text-center m-5">
          <Col lg={4} md={3} xs={12} >
            <Card className="card1 card_style mt-lg-5 mt-md-5 mt-sm-2 mt-2">
              <i class="fa-solid fa-building-columns mt-4 fs-1 icon1"></i>
              <Card.Body>
                <Card.Title>INSTITUTION</Card.Title>
                <Card.Text className="card_text">
                  <p>
                    Institutions affiliated or applying for affiliation with APJ
                    Abdul Kalam Technological University can click here to log
                    in to the e-Gov application. Institution users can perform
                    activities related to affiliation, student registration and
                    academics, make fee payments etc. Colleges can view the
                    student records that includes personal information,
                    admission information, attendance details, internal
                    evaluation details, mark lists, student history and other
                    details after logging on.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={3} xs={12}>
            <Card className="card2 card_style mt-lg-1 mt-md-1 mt-2">
              <i class="fa-solid fa-graduation-cap mt-4 fs-1 icon2"></i>
              <Card.Body>
                <Card.Title>STUDENT</Card.Title>
                <Card.Text className="card_text">
                  Students who are admitted in colleges affiliated to APJ Abdul
                  Kalam Technological University can click here to login to the
                  e-Gov application. Registered students can use the student
                  portal to gain access to personalized information and also
                  view their academic details, attendance and marks, earned
                  credits etc. They can download their mark list, grade sheet
                  etc and access educational information. The portal also allows
                  students to securely communicate with the university.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={3} xs={12}>
            <Card className="card3 card_style mt-lg-5 mt-md-5 mt-sm-2 mt-2">
              <i class="fa-regular fa-chess-rook mt-4 fs-1 icon3"></i>
              <Card.Body>
                <Card.Title>UNIVERSITY</Card.Title>
                <Card.Text className="card_text">
                  University staff such as management team, auditors, external
                  trainers and other officials can login to the e-Gov
                  application to perform various activities. Master data such as
                  programs, schemes, branches/streams, courses, academic
                  calendar etc can be set up by the administrators. Clusters can
                  be set up, cluster members configured and curriculum managed
                  for each cluster. University academic experts can prepare the
                  Curriculum, Course Plan and Evaluation Plan for the various
                  programs offered and set the rules for course selection by
                  colleges.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Card_Content;
