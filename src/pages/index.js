import { Container, Row, Col } from "reactstrap";
import Head from "next/head";
import { Montserrat } from "next/font/google";

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
                Jerry’s Insulating is a family owned and operated full service
                insulation contractor. Established in 1975, Jerry’s Insulating
                has been providing quality insulation solutions for over 40
                years. Jerry’s Insulating services include new construction and
                retrofit projects for both the residential and commercial
                markets. Our service areas includes Toronto, Halton/Peel,
                Mississauga, Oakville, Hamilton/Burlington, and the Niagara
                region.
                <br />
                <br />
                At Jerry’s we use only premium insulation materials. Our
                knowledgeable staff will help you choose the best insulation
                solution for your project. Many of our employees have more than
                20 years experience, offering considerable knowledge and
                exceptional service. Our focus on customer satisfaction is what
                sets us apart from our competitors.
              </p>
            </Col>
            <Col lg="6">
              <p>
                Jerry’s Insulating can provide polyurethane spray foam at your
                job site in Hamilton, blown fiberglass insulation for your
                rental property in Mississauga, spray fireproofing for your
                commercial project in Niagara, soundproofing for your duplex in
                Oakville or a combination of fiberglass and spray foam solutions
                for that custom home in Toronto.
                <br />
                <br />
                We thank you for visiting our website. For a complimentary,
                no-obligation and hassle-free quote, please contact us at 
                <a href="tel:1-877-504-7283">1-877-504-7283</a>. We look forward
                to hearing from you!
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
                author="Jerry Dodger"
                desc="Awesome company to deal with. I have dealt with many trades and different companies over the years and Jerrys is by far the best insulation company I have used. Super friendly staff, worked fast and efficiently, with great attention to detail. To top it all off they had the best price of anyone I called. 11/10 will be using again in the future for sure."
              />
            </Col>
            <Col lg="6">
              <TestimonialCard
                author="Jerry Dodger"
                desc="Awesome company to deal with. I have dealt with many trades and different companies over the years and Jerrys is by far the best insulation company I have used. Super friendly staff, worked fast and efficiently, with great attention to detail. To top it all off they had the best price of anyone I called. 11/10 will be using again in the future for sure."
              />
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <TestimonialCard
                author="Jerry Dodger"
                desc="Awesome company to deal with. I have dealt with many trades and different companies over the years and Jerrys is by far the best insulation company I have used. Super friendly staff, worked fast and efficiently, with great attention to detail. To top it all off they had the best price of anyone I called. 11/10 will be using again in the future for sure."
              />
            </Col>
            <Col lg="6">
              <TestimonialCard
                author="Jerry Dodger"
                desc="Awesome company to deal with. I have dealt with many trades and different companies over the years and Jerrys is by far the best insulation company I have used. Super friendly staff, worked fast and efficiently, with great attention to detail. To top it all off they had the best price of anyone I called. 11/10 will be using again in the future for sure."
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
