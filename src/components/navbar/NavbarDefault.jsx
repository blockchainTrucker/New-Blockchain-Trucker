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

import { useMediaQuery } from "react-responsive";
import publicIp from "public-ip";
import Icon from "@mdi/react";
import { mdiGithub, mdiLinkedin } from "@mdi/js";
import logo from "assets/images/brand/logo/logo-nobackground-200.png";
import NavDropdownMain from "./NavDropdownMain";
import NavbarDefaultRoutes from "routes/navbar/navbarDefaultRoutes";

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
  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const [expandedMenu, setExpandedMenu] = useState(false);

  const QuickMenu = () => {
    return (
      <Fragment>
        <Dropdown
          as={Nav.Item}
          className={`${isDesktop || isLaptop ? "mt-2 me-0" : "mt-2 me-2"}`}
        ></Dropdown>
      </Fragment>
    );
  };
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
            <Image src={logo} alt="Blockchain Trucker Logo" />
          </Navbar.Brand>
          <div
            className={`navbar-nav navbar-right-wrap ms-auto d-lg-none nav-top-wrap ${
              login ? (isDesktop || isLaptop ? "d-none" : "d-flex") : "d-none"
            }`}
          >
            <QuickMenu />
          </div>
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
            <Nav className="navbar-nav navbar-right-wrap ms-auto d-flex">
              <Row>
                <Col
                  md={6}
                  xl={4}
                  lg={4}
                  xs={4}
                  className="d-flex align-items-center"
                >
                  <a
                    href="https://github.com/jwachtel96"
                    target="_blank"
                    className="text-muted text-primary-hover me-3  "
                  >
                    <Icon path={mdiGithub} size={1.5} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jesse-wachtel/"
                    target="_blank"
                    className="text-muted text-primary-hover me-3"
                  >
                    <Icon path={mdiLinkedin} size={1.5} />
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
