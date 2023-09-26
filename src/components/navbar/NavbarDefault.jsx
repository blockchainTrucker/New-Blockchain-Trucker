// import node module libraries
import { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  Navbar,
  Nav,
  Container,
  Dropdown,
} from "react-bootstrap";
import logo from "assets/images/logo/logo-nobackground.png";
import NavDropdownMain from "./NavDropdownMain";
import NavbarDefaultRoutes from "routes/navbar/navbarDefaultRoutes";
import linkedin from "assets/images/icons/linkedin-icon.png";
import medium from "assets/images/icons/medium-icon.png";
import github from "assets/images/icons/github-icon.png";
import PriceTicker from "./PriceTicker";
const NavbarDefault = ({ headerstyle, login }) => {
  useEffect(() => {
    const url = "https://blockchain-trucker-api.herokuapp.com/counter";
    let resources = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch(url, resources);
  }, []);

  const [expandedMenu, setExpandedMenu] = useState(false);

  return (
    <Fragment>
      <Navbar
        onToggle={(collapsed) => setExpandedMenu(collapsed)}
        expanded={expandedMenu}
        expand="lg"
        className={`${login ? "bg-white" : ""} navbar p-2 ${
          headerstyle === "dark" ? "navbar-dark bg-dark" : "navbar-default py-2"
        } `}
      >
        <Container fluid className="px-0 ps-2">
          <Navbar.Brand as={Link} to="/">
            <Image height={115} src={logo} alt="Blockchain Trucker Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="icon-bar top-bar mt-0"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-4">
              {NavbarDefaultRoutes.map((item, index) => {
                if (item.children === undefined) {
                  return (
                    <Nav.Link
                      className="nladj text-dark fw-500 text-primary-hover"
                      as={Link}
                      key={index}
                      to={item.link}
                    >
                      {item.menuitem}
                    </Nav.Link>
                  );
                } else {
                  return (
                    <NavDropdownMain
                      item={item}
                      key={index}
                      onClick={(value) => setExpandedMenu(value)}
                    />
                  );
                }
              })}
            </Nav>
            <Nav className="pt-1 text-center mx-auto">
              <PriceTicker className="" />
            </Nav>
            <Nav className="navbar-nav navbar-right-wrap d-flex">
              <Row>
                <Col
                  md={6}
                  xl={4}
                  lg={4}
                  xs={4}
                  className="d-flex align-items-center"
                >
                  <a
                    href="https://github.com/blockchaintrucker"
                    target="_blank"
                    className="text-muted text-primary-hover me-3  "
                    rel="noreferrer"
                  >
                    <Image src={github} height={40} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jesse-wachtel/"
                    target="_blank"
                    className="text-muted text-primary-hover me-3"
                    rel="noreferrer"
                  >
                    <Image src={linkedin} height={40} />
                  </a>
                  <a
                    href="https://medium.com/@blockchainTrucker"
                    target="_blank"
                    className="text-muted text-primary-hover me-3"
                    rel="noreferrer"
                  >
                    <Image src={medium} height={40} />
                  </a>
                </Col>
              </Row>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default NavbarDefault;
