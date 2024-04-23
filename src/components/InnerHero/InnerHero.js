import { Container, Row, Col } from "reactstrap";

const InnerHero = ({ title }) => {
  return (
    <>
      <section className="inner-hero">
        <Container>
          <Row className="text-center">
            <div className="card">
              <Col lg="12">
                <h1>{title}</h1>
              </Col>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default InnerHero;
