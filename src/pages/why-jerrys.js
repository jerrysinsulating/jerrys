import { Container, Row, Col } from "reactstrap";
import Head from "next/head";

import "bootstrap/dist/css/bootstrap.min.css";
import InnerHero from "@/components/InnerHero/InnerHero";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Jerry's Insulating</title>
        <meta
          name="description"
          content="Welcome to Jerry's Insulating website."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InnerHero title="Why Jerry's" />
      <section className="inner-content">
        <Container>
          <Row>
            <Col lg="6">
              <ul>
                <li>50 years of experience</li>
                <li>Trained professional installers</li>
                <li>Scheduled installation times</li>
                <li>Fixed contract pricing before the job starts</li>
                <li>Exceptional customer service</li>
              </ul>
            </Col>
            <Col lg="6">
              <p>
                Jerry's Insulating is a family owned and operated full service
                insulation contractor. Jerry’s Insulating Co. was established in
                1975. Our service area includes the Niagara Region,
                Hamilton/Burlington, as well as the Greater Toronto Area.
                <br />
                <br />
                At Jerry’s we use only premium insulation materials. Our
                knowledgeable staff will help you choose the best insulation
                solution for your project. Many of our employees have more than
                20 years experience, offering considerable knowledge and
                exceptional service. Our focus on customer satisfaction is what
                sets us apart from our competitors. In fact, many of our clients
                are repeat customers, which is a testament to our great work.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
