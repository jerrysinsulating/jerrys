import { Container, Row, Col, Button, Card } from "reactstrap";
import Link from "next/link";
import Image from "next/image";
import spray from "../../img/spray-foam-insulation.jpg";
import blown from "../../img/blown-insulation.jpg";
import batting from "../../img/batting-insulation.jpg";

const Insulation = () => {
  return (
    <>
      <section className="insulation">
        <Container>
          <Row className="text-center">
            <Col lg="12">
              <h2>Our Insulation Services</h2>
              <hr />
              <Image
                className="img-fluid"
                src={spray}
                alt="spray foam insulation"
              />
              <Card>
                <h3>Spray Foam Insulation</h3>
                <p>
                  Improve the comfort and energy usage of your home today. Spray
                  foam insulation offers up to 50% energy savings over
                  conventional insulation products.
                </p>
                <Link href="/insulation">
                  <Button>Learn More</Button>
                </Link>
              </Card>
            </Col>
          </Row>
          <Row className="text-center">
            <Col lg="6">
              <Image className="img-fluid" src={blown} alt="Blown Insulation" />
              <Card>
                <h3>Blown Insulation</h3>
                <p>
                  Blown Insulation Blown insulation has many uses and benefits
                  and is the traditional form of insulation. It is a fast and
                  easy way to save money and significantly reduce your growing
                  energy bill.
                </p>
                <Link href="/insulation">
                  <Button>Learn More</Button>
                </Link>
              </Card>
            </Col>
            <Col lg="6">
              <Image
                className="img-fluid"
                src={batting}
                alt="Batting Insulation"
              />
              <Card>
                <h3>Batting Insulation</h3>
                <p>
                  Properly installed batting insulation can give you peace of
                  mind, reduce your energy costs and be easy to replace down the
                  road. If you have a problem with the existing insulation and
                  need it removed prior to...
                </p>
                <Link href="/insulation">
                  <Button>Learn More</Button>
                </Link>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Insulation;
