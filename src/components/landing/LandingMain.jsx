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
        <Row
          className="d-flex justify-content-center mx-0"
          style={{ minHeight: "85vh", alignContent: "center", height: "100%" }}>
          <div
            style={{ width: 650 }}
            className="mt-lg-10 mt-6 order-md-1 mb-10 ps-2 ps-sm-0">
            <h1 className="text-start display-2 ms-1 mb-5 fw-bold">
              <span className="text-primary">Full Stack</span> web apps with a
              hint of <span className="text-primary">Web 3.0</span>
            </h1>
            {/* list */}
            <ListGroup
              bsPrefix="list-unstyled"
              className="text-start fs-3 text-dark mb-6 fw-medium">
              <ListGroup.Item bsPrefix="mb-1" className="d-flex mb-2">
                <Icon
                  path={mdiCheckCircle}
                  size={0.9}
                  className="text-primary mt-1 me-2"
                />
                Equal focus on the frontend and backend design
              </ListGroup.Item>
              <ListGroup.Item bsPrefix="mb-1" className="d-flex mb-2">
                <Icon
                  path={mdiCheckCircle}
                  size={0.9}
                  className="text-primary mt-1 me-2"
                />
                Applications designed to interact with blockchains
              </ListGroup.Item>
              <ListGroup.Item bsPrefix="mb-1" className="d-flex mb-2">
                <Icon
                  path={mdiCheckCircle}
                  size={0.9}
                  className="text-primary mt-1 me-2"
                />
                Focused on bringing decentralization to market
              </ListGroup.Item>
              <ListGroup.Item bsPrefix="mb-1" className="d-flex mb-2">
                <Icon
                  path={mdiCheckCircle}
                  size={0.9}
                  className="text-primary mt-1 me-2"
                />
                Responsive designs that work seamlessly on any device
              </ListGroup.Item>
              <ListGroup.Item bsPrefix="mb-1" className="d-flex mb-2">
                <Icon
                  path={mdiCheckCircle}
                  size={0.9}
                  className="text-primary mt-1 me-2"
                />
                Security in mind from start to finish every time
              </ListGroup.Item>
            </ListGroup>

            {/* Buttons */}
            <div className="text-start mb-5 mb-lg-0">
              <Link
                to="/portfolio"
                className="btn btn-primary me-3 mb-3 mb-lg-0">
                See My Portfolio
              </Link>
              <Link to="/contact-me" className="text-nowrap btn-link">
                Want to chat? Click here
              </Link>
            </div>
          </div>
        </Row>
        <CryptoBrandTicker />
        <Row className="d-flex justify-content-center py-10 px-md-5 px-lg-15 px-xl-20 bg-grey-sq">
          <MediumFeed />
        </Row>
        <FrameworkTicker />
        <div className="animatedLinesBGContainer">
          <div className="animatedLinesBG text-center shadow-lg">
            <Col xl={12} lg={12} md={12} sm={12} xs={12} className="mt-10">
              <div>
                <Link to="/about-me">
                  <div>
                    <h3
                      style={{
                        zIndex: 9999,
                        width: "50%",
                      }}
                      className="d-flex display-5 mx-6 text-primary fw-bold text-center mx-auto">
                      FROM TRACTOR TRAILER DRIVER TO WEB 3.0 DEVELOPER, CLICK
                      HERE TO READ ABOUT MY JOURNEY
                    </h3>
                  </div>
                  <div>
                    <div className="image-container">
                      <Image
                        className="mt-xs-n5 mt-sm-n10 mt-md-n15 mt-lg-n17 mt-xl-n20"
                        src={truckimg}></Image>
                    </div>
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
