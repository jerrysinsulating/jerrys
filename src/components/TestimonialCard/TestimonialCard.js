import { Row, Col, Card } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const TestimonialCard = ({ author, desc }) => {
  return (
    <section className="testimonial-card">
      <Card>
        <Row>
          <Col lg="12">
            <div className="d-flex align-items-center justify-content-between">
              <p className="author">{author}</p>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="#E7C85B"
                >
                  <path d="M12 1.5l2.18 6.651h7.029l-5.698 4.151 2.18 6.649-5.709-4.157-5.698 4.157 2.18-6.649-5.698-4.151h7.03z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="#E7C85B"
                >
                  <path d="M12 1.5l2.18 6.651h7.029l-5.698 4.151 2.18 6.649-5.709-4.157-5.698 4.157 2.18-6.649-5.698-4.151h7.03z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="#E7C85B"
                >
                  <path d="M12 1.5l2.18 6.651h7.029l-5.698 4.151 2.18 6.649-5.709-4.157-5.698 4.157 2.18-6.649-5.698-4.151h7.03z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="#E7C85B"
                >
                  <path d="M12 1.5l2.18 6.651h7.029l-5.698 4.151 2.18 6.649-5.709-4.157-5.698 4.157 2.18-6.649-5.698-4.151h7.03z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="#E7C85B"
                >
                  <path d="M12 1.5l2.18 6.651h7.029l-5.698 4.151 2.18 6.649-5.709-4.157-5.698 4.157 2.18-6.649-5.698-4.151h7.03z" />
                </svg>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12">
            <p className="desc">"{desc}"</p>
          </Col>
        </Row>
      </Card>
    </section>
  );
};

export default TestimonialCard;
