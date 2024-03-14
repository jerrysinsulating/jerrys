import { Container, Row, Col } from "reactstrap";

const Hero = () => {
  return (
    <>
      <Container>
        <Row className="text-center">
          <Col lg="12">
            <h1>Jerry’s Insulating Co.</h1>
            <h2>
              Over 40 years of expertise, premium materials, and unbeatable
              service
            </h2>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Hero;
