import { Container, Row, Col, Button, Card } from "reactstrap";
import Link from "next/link";

const TestimonialCard = ({ author, desc }) => {
  return (
    <>
      <Card>
        <div className="d-flex align-items-center">
          <p className="author">{author}</p>
          <p className="stars">"{desc}"</p>
        </div>
      </Card>
    </>
  );
};

export default TestimonialCard;
