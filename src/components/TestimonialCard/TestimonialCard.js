import { Container, Row, Col, Button, Card } from "reactstrap";
import Link from "next/link";

const TestimonialCard = ({ author, desc }) => {
  return (
    <>
      <Card>
        <Row>
          <Col lg="12">
            <div className="d-flex align-items-center justify-content-between">
              <p className="author">{author}</p>
              <p>stars</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12">
            <p className="desc">"{desc}"</p>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default TestimonialCard;
