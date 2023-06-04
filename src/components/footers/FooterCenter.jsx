import { Container, Row, Col } from "react-bootstrap";
import Icon from "@mdi/react";
import { mdiGithub, mdiLinkedin } from "@mdi/js";
const FooterCenter = () => {
  return (
    <div className="py-lg-5 py-5 bg-white">
      <Container>
        <Row className="justify-content-center text-center  ">
          <Col lg={8} md={12} sm={12}>
            <div className="mt-6 mb-1">
              <a
                href="https://github.com/jwachtel96"
                target="_blank"
                className="text-muted me-2"
                rel="noreferrer"
              >
                <Icon path={mdiGithub} size={1.5} />
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/jesse-wachtel"
                target="_blank"
                className="text-muted me-2"
                rel="noreferrer"
              >
                <Icon path={mdiLinkedin} size={1.5} />
              </a>
              {/* GitHub */}
            </div>
          </Col>
          <Col lg={8} md={12} sm={12}>
            <span>
              {`${new Date().getFullYear()} `}
              <a
                href="https://www.linkedin.com/in/jesse-wachtel"
                target="_blank"
                rel="noreferrer"
              >
                Jesse Wachtel
              </a>
              . All Rights Reserved
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterCenter;
