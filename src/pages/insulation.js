import { Container, Row, Col } from "reactstrap";
import Head from "next/head";
import Image from "next/image";

import "bootstrap/dist/css/bootstrap.min.css";
import InnerHero from "@/components/InnerHero/InnerHero";

import sprayFoam from "../img/spray-foam.jpg";
import blown from "../img/blown.jpg";
import batting from "../img/batting.jpg";

export default function About() {
  return (
    <>
      <Head>
        <title>Insulation Services | Jerry's Insulating</title>
        <meta
          name="description"
          content="Welcome to Jerry's Insulating website."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InnerHero title="Insulation Services" />
      <section className="inner-content" id="insulation">
        <Container>
          <Row>
            <Col lg="12">
              <h2>Spray Foam</h2>
              <Image className="img-fluid" src={sprayFoam} alt="spray foam" />
              <p>
                Improve the comfort and reduce the energy usage of your home
                today. Spray foam insulation offers up to 50% energy savings
                over conventional insulation products. Spray foams act as both a
                thermal insulation and air barrier material. Once installed,
                spray foams maintain its R value and do not shrink, sag or
                settle. Spray foams are ideal for those hard to seal areas,
                limiting air leakage.
              </p>
              <p>
                Spray foam is one of the longest-lasting insulation materials on
                the market today, offering higher R values than other materials.
                It is applied as a foamy liquid that seeps into the smallest
                nooks and crannies in the wall, sealing it tightly. As soon as
                the spray foam sets, it creates a solid, airtight barrier.{" "}
              </p>
              <p>
                At Jerry’s Insulating we only install the highest quality spray
                foam insulation materials. The two options we offer our clients
                include; 2 lb. closed cell medium-density insulation and a 1/2lb
                open cell low density foam insulation.
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <h3>2 lb. Density Polyurethane Foam</h3>
              <div className="card">
                <p>
                  <strong>Benefits of Polyurethane: </strong>
                </p>
                <ul>
                  <li>
                    Polyurethane spray foam provides the highest possible
                    R-Value per inch, making it an effective solution for
                    meeting building code requirements in all spaces.
                  </li>
                  <li>
                    Polyurethane spray foam should not require the use of vapour
                    barriers as it is a closed cell product blocking moisture as
                    well as air from entering into your home. (Check with your
                    local building inspector).
                  </li>
                  <li>
                    Polyurethane spray foam is a closed cell insulation that
                    restricts moisture flow and is ideal to turn your cold damp
                    basement into a comfortable living space.
                  </li>
                  <li>
                    Creates an airtight envelope around any structure, by
                    filling in all small spaces, corners and angles resulting in
                    a tight seal that prevents any unwanted drafts.
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg="6">
              <h3>1/2 lb. Low-Density Spray Foam</h3>
              <div className="card">
                <p>
                  <strong>Benefits of Low-Density Spray Foam:</strong>
                </p>
                <ul>
                  <li>
                    100% water-blown and contains no HFC’s, thereby emitting no
                    harmful gases once cured.
                  </li>
                  <li>
                    Contains no ozone-depleting substances and does not off-gas
                    over time.
                  </li>
                  <li>
                    Creates a continuous air barrier restricting the flow of
                    outdoor allergens and pollutants.
                  </li>
                  <li>
                    Significantly reduces unwanted noise pollution that can
                    invade living spaces, creating a more enjoyable indoor
                    environment.
                  </li>
                  <li>Contains no PBDE’s, a flame retardant.</li>
                </ul>
              </div>
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col lg="12">
              <p>
                The choice of product is made on the R value required, the
                cavity depth, location of application and vapour barrier
                requirements. Call Jerry’s Insulating Co. now for the
                professional advice and guidance you require to make sure your
                home is nice and cool in the summer and perfectly snug and warm
                for the winter. We are here for you!
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <h2>Blown Insulation</h2>
              <Image className="img-fluid" src={blown} alt="blown insulation" />
            </Col>
            <p>
              Blow insulation is a fast, easy and cost-effective way to save
              money and significantly reduce your growing energy bill. Blown
              insulation can be installed in your home’s attic and exterior
              walls. Upgrading your home’s insulation limits heat flow and
              reduces noise, keeping your home comfortable year round.
            </p>
          </Row>
          <Row>
            <Col lg="6">
              <h3>Fast and Simple Process</h3>
              <p>
                Installing blown insulation is a quick and simple process.
                Attics are typically accessed through the attic hatch. Attic
                insulation is installed using specialized equipment and is
                installed through a corrugated hose.
              </p>
            </Col>
            <Col lg="6">
              <h3>Energy Efficient and Cost Effective</h3>
              <p>
                Blown insulation is one of the most energy efficient types of
                insulation available in the market today. It is blown into
                attics or into empty stud wall cavities, expanding to fill up
                the tiniest cracks. This method reduces heat flow, air flow and
                improves noise transmission, reducing your energy bill by up to
                50%.
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <h3>Attics</h3>
              <p>
                Increasing the amount of insulation in your attic is one of the
                easiest ways to increase the comfort and energy efficiency of
                your home. New blown insulation can be added on top of any
                existing insulation. If your existing attic insulation thickness
                is 12 inches or less, we recommend increasing your attic
                insulation to R50 or greater.
              </p>
              <p>
                Our trained installers will upgrade your attic and install
                soffit ventilation as required, while ensuring minimal
                inconvenience to the homeowner. Proper attic ventilation is
                important to prevent growth of mould and mildew.
              </p>
              <p>
                If your attic insulation has been exposed to excessive moisture,
                or contaminated with debris, you may want to remove the existing
                insulation prior to installing new material. Any roof repairs
                should also be completed before upgrading your attic to prevent
                future water damage and potential mould growth.
              </p>
            </Col>
            <Col lg="6">
              <h3>Walls</h3>
              <p>
                Many homes built prior to 1960 have little or no insulation in
                the exterior walls. Adding insulation to your exterior walls and
                attic can reduce your home's energy costs by up to 50%.
              </p>
              <p>
                Fiberglass can be blown into the exterior walls providing R14
                for 2×4 construction. The insulation is blown into the exterior
                walls thru 1″ holes drilled into the exterior walls. Our trained
                installers use a vacuum system while drilling to minimize dust.
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <h2>Batting Insulation</h2>
              <Image
                className="img-fluid"
                src={batting}
                alt="batting insulation"
              />
              <p>
                We have been installing fiberglass batt insulation for half a
                century. Batting is typically installed in new construction or
                retrofit application where existing drywall/plaster has been
                removed.
              </p>
              <div className="card">
                <h3>Benefits of Fiberglass Batting</h3>
                <ul>
                  <li>
                    Batting insulation provides an economical way to reduce your
                    home’s energy costs.
                  </li>
                  <li>
                    Fiberglass batting is available in various thicknesses (“R”
                    values) suitable for exterior walls, cathedral ceilings, and
                    attic spaces.
                  </li>
                  <li>
                    Fiberglass batting requires an air barrier and vapor barrier
                    to maximize its R value. All electrical outlets, windows,
                    doors are taped or caulked to provide a continuous vapor
                    barrier.
                  </li>
                </ul>
              </div>
              <br />
              <br />
              <h3>Installing Batting Insulation</h3>
              <p>
                While batt insulation seems easy to install, it takes a
                professional to do it right. Unless you are a DIY handyman with
                years of experience, installing fiberglass batting is not as
                easy as it may seem. Unprofessional installation may leave lots
                of gaps and over compressed batts, which will admit drafts and
                heat leaks from, and into, your home. Poorly installed batt
                insulation will sag and settle over time, under its own weight,
                creating gaps in your insulation. Poorly installed DIY batting
                insulation may save you a few dollars now, but will cost you
                thousands of dollars in heating & cooling costs down the road.
                <br />
                <br />
                Properly installed batt insulation can give you peace of mind,
                reduce your energy costs and be easy to replace down the road.
                If you have a problem with the existing insulation and need it
                removed prior to installing new one, no problem – we can do this
                for you as well.
                <br />
                <br />
                Still undecided? The type of insulation you need depends on the
                type of house you live in, the climate that you are located in
                and other factors. Keep in mind that batt insulation can be
                supplemented by other types of insulation to achieve the best
                effect. If you are undecided on what kind of insulation will fit
                your home best, call us now, and we will help you find the best
                solution.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
