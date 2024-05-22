import {
  Container,
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
} from "reactstrap";
import Head from "next/head";
import { useForm, ValidationError } from "@formspree/react";

import "bootstrap/dist/css/bootstrap.min.css";
import InnerHero from "@/components/InnerHero/InnerHero";

export default function About() {
  const [state, handleSubmit] = useForm("xgegbywk");
  if (state.succeeded) {
    return (
      <Container>
        <Row>
          <Col lg="12">
            <p className="thanks">
              Thank you! We will get back to you as soon as we can.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
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
            <Col lg="6">
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
            <Col lg="6">
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    invalid={state.errors}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="email">Email Address</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    invalid={state.errors}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="phone">Phone Number</Label>
                  <Input
                    type="tel"
                    name="phone"
                    id="phone"
                    invalid={state.errors}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="message">Message</Label>
                  <Input
                    type="textarea"
                    name="message"
                    id="message"
                    invalid={state.errors}
                  />
                </FormGroup>

                <Button
                  type="submit"
                  color="primary"
                  disabled={state.submitting}
                >
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
