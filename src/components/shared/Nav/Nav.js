import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
} from "reactstrap";

import logo from "../../../img/logo.jpg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="fixed-top" id="nav" expand="lg">
        <Container>
          <NavbarBrand href="/" className="logo">
            <Image
              className="logo"
              src={logo}
              alt="jerry's insulating"
              title="jerry's insulating"
            />
          </NavbarBrand>
          <NavbarToggler className="custom-toggler" onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link href="/" className="nav-link">
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/why-jerrys" className="nav-link">
                  Why Jerry's
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/insulation" className="nav-link">
                  Insulation Services
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/services" className="nav-link">
                  Other Services
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link btn" href="/contact-us">
                  Contact/Request Estimate
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
