import { Container, Row, Col } from "reactstrap";
import Head from "next/head";

import "bootstrap/dist/css/bootstrap.min.css";
import InnerHero from "@/components/InnerHero/InnerHero";

export default function About() {
  return (
    <>
      <Head>
        <title>Infused Agency - Review</title>
        <meta
          name="description"
          content="Welcome to Jerry's Insulating website."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InnerHero title="Infused Agency" />
      <section className="inner-content">
        <Container>
          <Row>
            <Col lg="12">
              <h2>Web Design & SEO Company</h2>
              <p>
                Since our inception in 2013,{" "}
                <a href="https://infused.agency" target="_blank">
                  Infused Agency
                </a>{" "}
                has been dedicated to enhancing the digital presence of
                businesses in St. Catharines, Niagara, and beyond. From small
                local ventures to large enterprises, our expertise spans web
                design, digital marketing, search engine optimization (SEO),
                WordPress development, and e-commerce website creation.
              </p>
              <p>
                Over the years, we have been pivotal in improving our clients’
                online visibility and fostering their growth through strategic
                digital solutions. Our team excels in optimizing websites for
                search engines, creating visually appealing and user-friendly
                WordPress sites, and implementing successful e-commerce
                platforms, consistently delivering measurable results.
              </p>
              <p>
                Our commitment to local businesses has produced a diverse
                portfolio of success stories. We have increased website traffic,
                developed modern and responsive websites, and adhered to the
                latest design trends. Our customized solutions have
                significantly contributed to revenue growth for businesses of
                all sizes by leveraging the power of digital channels.
              </p>
              <p>
                In summary, our journey since 2013 has been marked by a
                dedication to empowering businesses with comprehensive digital
                strategies, transforming their online presence, and achieving
                success in the competitive digital landscape.
              </p>
              <h2>Why Choose Infused Agency?</h2>
              <h3>Proven Results</h3>
              <p>
                Don’t settle for a web design company that fails to deliver
                tangible business growth. Choose Infused Agency, and we’ll help
                your company stand out. Our skilled web design agency
                specializes in crafting websites and implementing strategies
                that drive business success. Since 2013, we’ve consistently
                helped businesses thrive, ensuring we can make a significant
                impact for you too.
              </p>

              <h3>SEO & Web Design Specialists</h3>
              <p>
                While many web designers offer services, our approach truly sets
                us apart. We don’t rely on pre-made templates; instead, we
                meticulously handcraft each website to ensure security, speed,
                and a unique aesthetic. Utilizing the latest techniques, we
                create high-quality websites that truly shine.
              </p>

              <h3>On-Time Delivery</h3>
              <p>
                We understand the importance of having a timely and effective
                website for your business. From our initial consultation to the
                final launch, we prioritize clear communication, ensuring your
                website is delivered exactly when you need it. We respond to
                your inquiries promptly, keeping your project on track.
                Punctuality is our promise!
              </p>
              <h2>Schedule Your Free Consultation</h2>
              <p>
                Click the link below to schedule a free consultation and receive
                a no-obligation quote for your website or SEO needs:
              </p>
              <a href="https://infused.agency/get-a-quote">Get Free Quote</a>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
