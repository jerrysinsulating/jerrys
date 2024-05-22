import { Container, Row, Col } from "reactstrap";
import Head from "next/head";

import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "@/components/Hero/Hero";
import Insulation from "@/components/Insulation/Insulation";
import TestimonialCard from "@/components/TestimonialCard/TestimonialCard";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Jerry's Insulating</title>
        <meta
          name="description"
          content="Welcome to Jerry's Insulating website."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Insulation />
      <section className="about">
        <Container>
          <Row className="text-center">
            <Col lg="12">
              <h2>About Jerry’s Insulating Co.</h2>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <p>
                Jerry's Insulating is a family owned and operated full service
                insulation contractor. Jerry’s Insulating Co. was established in
                1975. Our service area includes the Niagara Region,
                Hamilton/Burlington.
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
            <Col lg="6">
              <p>
                We thank you for visiting our website. For a complimentary,
                no-obligation and hassle-free quote, please contact us at 
                <a href="tel:1-877-504-7283">1-877-504-7283</a>. Or you can also
                contact us by filling out a request an estimate form on our site
                and someone will get back to you shortly We look forward to
                hearing from you!
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="testimonials">
        <Container>
          <Row className="text-center">
            <Col lg="12">
              <h2>Our Happy Clients</h2>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <TestimonialCard
                author="Darren K."
                desc="This is a great company. I used them a few times. The staff are friendly and they show up when they say they will. If I need this service again - they are the first company that I will call."
              />
            </Col>
            <Col lg="6">
              <TestimonialCard
                author="Jeff R."
                desc="The people at Jerry’s Insulating were professional, polite and cleaned up after the job very well. I will be recommending you guys to anyone who asks!"
              />
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <TestimonialCard
                author="Dan D."
                desc="I had a very good experience working with Jerry’s. Very professional. They quoted a more complete job than their competition.  Friendly staff all around and they did a fantastic job. Highly recommended."
              />
            </Col>
            <Col lg="6">
              <TestimonialCard
                author="Randy W."
                desc="Your service was terrific, especially on short notice. Your service people were clean, polite, and professional. We are very happy."
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
