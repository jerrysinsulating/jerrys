import { Container, Row, Col, Button } from "reactstrap";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer>
        <Container>
          <Row className="justify-content-between">
            <Col lg="6">
              <p>
                <a href="tel:905-356-4217">905-356-4217</a> |{" "}
                <a href="mailto:jerry@jerrysinsulating.ca">
                  jerry@jerrysinsulating.ca
                </a>
              </p>
            </Col>
            <Col className="text-end" lg="6">
              <p>Copyright {new Date().getFullYear()} Jerry’s Insulating Co</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
