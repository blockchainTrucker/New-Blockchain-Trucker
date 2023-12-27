// import node module libraries
import { Fragment, useEffect } from "react";
import { Col, Row, Image, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiCheckCircle } from "@mdi/js";
import truckimg from "assets/images/about/truckimg.jpg";
import MediumFeed from "./MediumFeed";
import CryptoBrandTicker from "./CryptoBrandTicker";
import FrameworkTicker from "./FrameworkTicker";

const MainLanding = () => {
  useEffect(() => {
    document.title = "Blockchain Trucker - Home";
  }, []);

  return (
    <Fragment>
      <div className="bg-infinite">
        <Row className="d-flex justify-content-center mx-0">
          <Col
            xl={{ span: 5 }}
            lg={{ span: 6 }}
            md={{ span: 8 }}
            sm={{ span: 10 }}
            xs={{ span: 11 }}
            className="mt-lg-10 mt-6 order-md-1 mb-10 ps-2 ps-sm-0"
          >
            <h1 className="text-start display-2 ms-1 mb-5 fw-bold">
              <span className="text-primary">Full Stack</span> web apps with a
              hint of <span className="text-primary">Web 3.0</span>
            </h1>
            {/* list */}
            <ListGroup
              bsPrefix="list-unstyled"
              className="text-start fs-3 text-dark mb-6 fw-medium"
            >
              <ListGroup.Item bsPrefix="mb-1" className="d-flex mb-2">
                <Icon
                  path={mdiCheckCircle}
                  size={0.9}
                  className="text-primary mt-1 me-2"
                />{" "}
                Equal focus on the frontend and backend design
              </ListGroup.Item>
              <ListGroup.Item bsPrefix="mb-1" className="d-flex mb-2">
                <Icon
                  path={mdiCheckCircle}
                  size={0.9}
                  className="text-primary mt-1 me-2"
                />{" "}
                Applications designed to interact with blockchains
              </ListGroup.Item>
              <ListGroup.Item bsPrefix="mb-1" className="d-flex">
                <Icon
                  path={mdiCheckCircle}
                  size={0.9}
                  className="text-primary mt-1 me-2"
                />{" "}
                Focused on bringing decentralization to market
              </ListGroup.Item>
              <ListGroup.Item bsPrefix="mb-1" className="d-flex">
                <Icon
                  path={mdiCheckCircle}
                  size={0.9}
                  className="text-primary mt-1 me-2"
                />{" "}
                Responsive designs that work seamlessly on any size screen
              </ListGroup.Item>
              <ListGroup.Item bsPrefix="mb-1" className="d-flex">
                <Icon
                  path={mdiCheckCircle}
                  size={0.9}
                  className="text-primary mt-1 me-2"
                />{" "}
                Security in mind from start to finish
              </ListGroup.Item>
            </ListGroup>

            {/* Buttons */}
            <div className="text-start mb-5 mb-lg-0">
              <Link
                to="/portfolio"
                className="btn btn-primary me-3 mb-3 mb-lg-0"
              >
                See My Portfolio
              </Link>
              <Link to="/contact-me" className="text-nowrap btn-link">
                Want to chat? Click here
              </Link>
            </div>
          </Col>
        </Row>
        <CryptoBrandTicker />
        <Row className="d-flex justify-content-center py-10 px-md-5 px-lg-15 px-xl-20 bg-grey-sq">
          <MediumFeed />
        </Row>
        <FrameworkTicker />
        <div className="animatedLinesBGContainer">
          <div className="animatedLinesBG text-center shadow-lg py-5">
            <Col xl={12} lg={12} md={12} sm={12} className="mb-2 mt-10">
              <div className="mb-8">
                <Link to="/about-me">
                  <div className="mb-3">
                    <span
                      style={{ position: "relative", zIndex: 9999 }}
                      className="ls-md fs-5 text-primary fw-bold"
                    >
                      FROM TRACTOR TRAILER DRIVER TO WEB DEVELOPER, CLICK HERE
                      TO READ ABOUT MY JOURNEY
                    </span>
                  </div>
                  <div>
                    <Image
                      fluid
                      style={{ position: "relative", zIndex: 9999 }}
                      className="corners mx-auto"
                      src={truckimg}
                    ></Image>
                  </div>
                </Link>
              </div>
            </Col>
            <div className="light x1"></div>
            <div className="light x2"></div>
            <div className="light x3"></div>
            <div className="light x4"></div>
            <div className="light x5"></div>
            <div className="light x6"></div>
            <div className="light x7"></div>
            <div className="light x8"></div>
            <div className="light x9"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MainLanding;
