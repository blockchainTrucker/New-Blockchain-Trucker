// import node module libraries
import React, { Fragment, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import portfolioData from "routes/portfolio/portfolioData";

const Portfolio = () => {
  useEffect(() => {
    document.title = "Blockchain Trucker - Portfolio";
  }, []);
  return (
    <Fragment>
      <div className="bg-infinite">
        <div className="pt-9 pb-5">
          <Container>
            <Row>
              <Col
                lg={{ span: 10, offset: 1 }}
                xl={{ span: 8, offset: 2 }}
                md={12}
                sm={12}>
                <div className="text-center mb-4">
                  <h1 className="display-3 fw-bold text-primary">
                    My Portfolio
                  </h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Page Content */}
        <div className="mx-sm-5">
          <div className="d-flex justify-content-center flex-wrap gap-5">
            {portfolioData[0].map((item, index) => (
              <ProjectCard item={item} key={item.id} />
            ))}
          </div>
        </div>
        <div className="pt-9 pb-5">
          <Container>
            <Row>
              <Col
                lg={{ span: 10, offset: 1 }}
                xl={{ span: 8, offset: 2 }}
                md={12}
                sm={12}>
                <div className="text-center mb-4">
                  <h2 className="display-4 fw-bold text-primary">
                    Other Projects
                  </h2>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Page Content */}
        <div className="pb-12 mx-sm-5">
          <div className="d-flex justify-content-center flex-wrap gap-5">
            {portfolioData[1].map((item, index) => (
              <ProjectCard item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Portfolio;
