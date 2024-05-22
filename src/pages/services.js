import { Container, Row, Col } from "reactstrap";
import Head from "next/head";
import Image from "next/image";

import "bootstrap/dist/css/bootstrap.min.css";
import InnerHero from "@/components/InnerHero/InnerHero";

export default function About() {
  return (
    <>
      <Head>
        <title>Other Services | Jerry's Insulating</title>
        <meta
          name="description"
          content="Welcome to Jerry's Insulating website."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InnerHero title="Other Services" />
      <section className="inner-content" id="services">
        <Container>
          <Row>
            <Col lg="12">
              <p>
                Jerry’s Insulating is your one-stop shop for all your insulation
                needs. Jerry’s offers soundproofing, fireproofing, and
                insulation removal services.
                <br />
                <br />
                When it comes to insulation, we do not compromise, bringing our
                clients the best materials available, including spray foam,
                batting, and blown insulation. With us, you get to choose the
                best insulation to meet your home’s insulation needs and budget.
                <br />
                <br />
                In addition, we also offer fireproofing, soundproofing and
                insulation removal services, wrapping up all your possible needs
                in a nice compact bundle. Old insulation can be upgraded or
                removed and replaced with a higher-performing, and
                longer-lasting insulation.
              </p>
              <h2>Fireproofing</h2>
              <p>
                Fireproofing is required by the Building Code of Ontario to
                cover all spray foam applications that are not covered by
                drywall. You can choose between two available products, an
                intumescent paint or a cementitious thermal barrier that can be
                applied over spray foam.
              </p>
              <h2>Insulation Removal</h2>
              <p>
                Insulation removal can be difficult, time consuming and a messy
                process without the proper equipment. Depending on the age and
                condition of your home’s insulation, it may need to be removed.
                Insulation may be removed for the following reasons:
              </p>
              <ul>
                <li>Fire/water damage</li>
                <li>Mould</li>
                <li>Animal contamination</li>
                <li>Renovation purposes</li>
              </ul>
              <h2>Soundproofing</h2>
              <p>
                Choose one of our great insulation materials such as stone wool
                batt insulation to reduce sound transmission between floors,
                ceilings and other interior walls in your home for added comfort
                in your living space.
              </p>
              <h2>Frequently Asked Questions:</h2>
              <h3>Spray Foam vs. Fiberglass, What's the difference?</h3>
              <p>
                Spray foams outperform fiberglass and cellulose insulation by up
                to 50%. Spray foams act as air barrier material, reducing your
                home's energy loss due to air infiltration.
              </p>
              <h3>How do I prepare to have Jerry's Insulate my home?</h3>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <h4>Attic Insulation</h4>
              <ul>
                <li>
                  Our crews will access the attic through the hatch door. Enough
                  area is required to set up a ladder.
                </li>
                <li>
                  If the attic hatch is located within a closet, please remove
                  all contents prior to our crews arriving at your home.
                </li>
              </ul>
            </Col>
            <Col lg="6">
              <h4>Exterior Wall Insulation (Blown Fiberglass)</h4>
              <ul>
                <li>
                  Move all furniture at least 4ft from all exterior walls to
                  allow sufficient room for our installers.
                </li>
                <li>
                  Remove all pictures/mirrors/decorations from exterior walls.
                </li>
                <li>
                  Please remove all fragile items such as lamps from tables and
                  shelving to ensure no items are damaged.
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <h4>Spray Foam Garage Ceiling</h4>
              <ul>
                <li>
                  All items must be removed from the garage prior to the arrival
                  of our crews.
                </li>
              </ul>
            </Col>
            <Col lg="6">
              <h4>Spray Foam Crawl Space</h4>
              <ul>
                <li>
                  All items must be removed from the crawl space prior to
                  applying spray foam.
                </li>
                <li>
                  The crawl space must be dry and provide sufficient height for
                  the crew to move freely.
                </li>
              </ul>
            </Col>
          </Row>
          <h4>Spray Foam Basement Walls</h4>
          <ul>
            <li>
              All items must be moved a minimum of 4ft from the exterior walls.
            </li>
            <li>
              Washer and Dryer should be disconnected and moved 4ft from the
              exterior walls.
            </li>
            <li>
              All Items in the spray area should be covered with a plastic tarp
              to protect from overspray.
            </li>
            <li>
              All spray foams must be covered with a thermal barrier such as
              1/2" drywall to meet Ontario Building Code requirements.
            </li>
          </ul>
        </Container>
      </section>
    </>
  );
}
