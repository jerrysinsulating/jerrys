import { Container, Row, Col, Button } from "reactstrap";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer>
        <Container>
          <Row className="justify-content-between">
            <Col lg="6">
              Address goes here | <a href="tel:905-356-4217">905-356-4217</a> |
              <a href="mailto:jerry@jerrysinsulating.ca">
                jerry@jerrysinsulating.ca
              </a>
            </Col>
            <Col className="text-right" lg="6">
              Copyright 2024 Jerry’s Insulating Co. | Privacy Policy
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
