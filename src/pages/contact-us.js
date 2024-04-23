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
      <InnerHero title="Contact / Request An Estimate" />
      <section className="inner-content">
        <Container>
          <Row>
            <Col lg="12">
              <ul>
                <li>
                  <strong>Toll-free:</strong> 1-877-504-7283
                </li>
                <li>
                  <strong>Niagara Region:</strong> 905-356-4217
                </li>
                <li>
                  <strong>Hamilton/Burlington:</strong> 905-549-4217
                </li>
                <li>
                  <strong>Greater Toronto Area:</strong> 416-234-5518
                </li>
                <li>
                  <strong>E-mail:</strong> jerry@jerrysinsulating.ca
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
