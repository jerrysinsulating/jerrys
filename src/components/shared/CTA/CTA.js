import { Container, Row, Col, Button } from "reactstrap";
import Link from "next/link";

const CTA = () => {
  return (
    <>
      <section className="cta">
        <Container>
          <Row className="text-center">
            <Col lg="12">
              <h2>Request An Estimate</h2>
              <hr />
              <Link href="/contact-us">
                <Button>Contact/Request Estimate</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CTA;
