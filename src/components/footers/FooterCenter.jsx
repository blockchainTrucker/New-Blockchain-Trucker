import { Container, Row, Col, Image } from "react-bootstrap";
import linkedin from "assets/images/icons/linkedin-icon.png";
import medium from "assets/images/icons/medium-icon.png";
import github from "assets/images/icons/github-icon.png";
import x from "assets/images/icons/x.png";

const FooterCenter = () => {
  return (
    <div className="py-lg-5 py-5 bg-white">
      <Container>
        <Row className="justify-content-center text-center  ">
          <Col lg={8} md={12} sm={12}>
            <div className="mt-6 mb-1">
              <a
                href="https://x.com/bchaintrucker"
                target="_blank"
                className="text-muted text-primary-hover me-3"
                rel="noreferrer">
                <Image src={x} height={30} />
              </a>
              <a
                href="https://github.com/blockchaintrucker"
                target="_blank"
                className="text-muted text-primary-hover me-3  "
                rel="noreferrer">
                <Image src={github} height={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/jesse-wachtel/"
                target="_blank"
                className="text-muted text-primary-hover me-3"
                rel="noreferrer">
                <Image src={linkedin} height={30} />
              </a>
              <a
                href="https://medium.com/@blockchainTrucker"
                target="_blank"
                className="text-muted text-primary-hover me-3"
                rel="noreferrer">
                <Image src={medium} height={30} />
              </a>
            </div>
          </Col>
          <Col lg={8} md={12} sm={12}>
            <span>
              {`© ${new Date().getFullYear()} `}
              <a
                href="https://www.linkedin.com/in/jesse-wachtel"
                target="_blank"
                rel="noreferrer">
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
