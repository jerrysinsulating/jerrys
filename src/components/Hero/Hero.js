import { Container, Row, Col, Button } from "reactstrap";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <Container>
          <Row className="text-center">
            <div className="card">
              <Col lg="12">
                <h1>Jerry’s Insulating Co.</h1>
                <h2>
                  Over 50 years of expertise, premium materials, and unbeatable
                  service
                </h2>
                <Link href="/contact-us">
                  <Button>Get A Quote</Button>
                </Link>
              </Col>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Hero;
