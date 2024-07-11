// import node module libraries
import React, { Fragment, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import FrameworkLogos from "components/landing/FrameworkLogos";
import LogoList from "routes/frameworkLogos/logoList";
import BackToTop from "components/functions/BackToTop";
import ModalImage from "react-modal-image";
import fsCert from "assets/images/about/fsCert.jpg";
import blockchainCert from "assets/images/about/blockchainCert.jpg";

const About = () => {
  useEffect(() => {
    document.title = "Blockchain Trucker - About Me";
  }, []);
  return (
    <Fragment>
      <div className="py-4 py-lg-8 pb-14 bg-white ">
        <Container>
          <Fragment>
            <Row className="justify-content-center">
              <Col className="mb-2">
                <div className="text-center mb-4">
                  <h1 className="display-4 text-primary fw-bold mb-4">
                    About Me
                  </h1>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xl={12} lg={12} md={12} sm={12}>
                <div>
                  <p>
                    My name is Jesse Wachtel, and I am a dedicated full stack
                    and Web3 developer specializing in decentralized
                    applications (dApps) and blockchain technology. Since 2021,
                    I have been at the forefront of the blockchain revolution,
                    leveraging my skills in the MERN stack and Solidity to
                    create innovative solutions that push the boundaries of
                    financial inclusivity and transparency. In December 2021, I
                    became a certified Full Stack Developer, leading to the
                    creation of my business, Decentralized Ventures. After
                    earning my Blockchain Engineer certification in January
                    2023, I applied my expertise in cryptography, blockchain
                    development, and smart contracts to develop two flagship
                    projects:{" "}
                    <a
                      href="https://www.fundingchain.io"
                      target="_blank"
                      rel="noreferrer">
                      Funding Chain
                    </a>
                    , a pioneering crowdfunding platform ensuring transparency
                    and autonomy through smart contracts on Ethereum and Hedera
                    networks, and{" "}
                    <a
                      href="https://www.smartcontractverifier.com"
                      target="_blank"
                      rel="noreferrer">
                      Smart Contract Verifier
                    </a>
                    , a tool that verifies the authenticity of smart contracts
                    by checking key signatures, setting a new standard in
                    trustless systems.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center mb-5">
              <Col className="mx-3 mt-3" xl={4} lg={4} md={4} sm={12} xs={12}>
                <ModalImage
                  fulid
                  className="shadow-lg corners card-hover"
                  small={fsCert}
                  large={fsCert}
                  alt="Jesse Wachtel's Full Stack Developer Certification Certificte"
                />
              </Col>
              <Col
                fulid
                className="mx-3 mt-3"
                xl={4}
                lg={4}
                md={4}
                sm={12}
                xs={12}>
                <ModalImage
                  className="shadow-lg corners card-hover"
                  small={blockchainCert}
                  large={blockchainCert}
                  alt="Jesse Wachtel's Blockchain Engineer Certification Certificte"
                />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xl={12} lg={12} md={12} sm={12} className="mx-3 mt-3 mb-3">
                <div>
                  <p>
                    In addition to these projects, I have had the opportunity to
                    contribute to a wide range of other innovative platforms and
                    tools in various stages of development. My experience spans
                    gamified platforms, AI and Machine Learning systems,
                    universal reward tokens, web3 mobile gaming, and business
                    networking applications. This diverse project portfolio has
                    allowed me to hone my skills in both front-end and back-end
                    development, as well as in security, API architecture, and
                    smart contract verification.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="d-flex justify-content-center">
              <Col xl={12} lg={12} md={12} sm={12} className="mx-3 mt-3">
                <FrameworkLogos
                  title="THESE ARE THE ENVIRONMENTS AND FRAMEWORKS I WORK WITH THE MOST"
                  logos={LogoList}
                  limit={6}
                />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xl={12} lg={12} md={12} sm={12} className="mx-3 mt-3 mb-3">
                <div>
                  <p>
                    Until May 2023, I balanced my burgeoning tech career with a
                    job as a tractor-trailer driver. This unique path has shaped
                    my perspective and work ethic, earning me the nickname
                    "Blockchain Trucker." I have always been passionate about
                    technology and the transformative potential of decentralized
                    networks. This passion continues to drive my work as I build
                    solutions that aim to make blockchain technology accessible
                    and beneficial for everyone.
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="mb-2">
                <div className="text-center mb-2">
                  <span className="ls-md fs-5 text-primary fw-bold">
                    THESE ARE SOME OF THE OTHER SKILLS I HAVE DEVELOPED
                  </span>
                </div>
              </Col>
            </Row>
            <Row className="d-flex justify-content-center">
              <Col
                xl={3}
                lg={4}
                md={5}
                sm={6}
                xs={9}
                className="mx-auto me-lg-n10 me-xl-n20">
                <ul>
                  <p className="mb-0 fw-bolder">Web 3.0</p>
                  <li>Solidity Smart Contracts</li>
                  <li>Full Stack DApps</li>
                  <li>Wallet Management</li>
                  <li>Private Key Sharding</li>
                  <li>Web3 Integrations</li>
                  <li>Payment Integrations</li>
                  <li>InterPlanetary File System</li>
                  <li>Staking</li>
                  <li>Remix</li>
                  <li>Truffle/Ganache</li>
                  <li>Hardhat</li>
                  <li>Smart Contract Unit Testing</li>
                  <li>Ethers</li>
                  <li>Hedera SDK</li>
                  <p className="mb-0 fw-bolder mt-2">Frontend</p>
                  <li>Custom UX/UI</li>
                  <li>Responsive Design</li>
                  <li>Dynamic Components</li>
                  <li>Search Engine Optimization</li>
                  <li>Custom Hooks</li>
                  <li>Templating</li>
                  <li>File Upload Handling</li>
                  <li>Platform Development</li>
                  <li>Cookies</li>
                  <li>Reusable Code</li>
                  <li>SCSS</li>
                  <li>Animations</li>
                  <li>Leaflet</li>
                  <li>Sharp</li>
                  <li>Visual Effects</li>
                  <li>Mobile Apps</li>
                  <li>Android Studio</li>
                </ul>
              </Col>
              <Col xl={3} lg={4} md={5} sm={6} xs={9} className="mb-2 mx-auto">
                <ul>
                  <p className="mb-0 fw-bolder">AI</p>
                  <li>AWS Recognition</li>
                  <li>Tensorflow</li>
                  <p className="mb-0 fw-bolder mt-2">Backend</p>
                  <li>API Architecture</li>
                  <li>Database Architecture</li>
                  <li>Schema Design</li>
                  <li>Tracking and Reporting</li>
                  <li>Express</li>
                  <li>Cron Jobs</li>
                  <li>Webhooks</li>
                  <p className="mb-0 fw-bolder mt-2">Security</p>
                  <li>Data Sharding</li>
                  <li>JSON Web Token</li>
                  <li>Two Factor Methods</li>
                  <li>Rate Limiting</li>
                  <li>Time Limiting</li>
                  <li>User Management</li>
                  <li>Encryption</li>
                  <li>Hashing</li>
                  <li>Validation</li>
                  <li>Sanitization</li>
                  <li>Escaping</li>
                  <p className="mb-0 fw-bolder mt-2">Services</p>
                  <li>AWS Amplify</li>
                  <li>Heroku</li>
                  <li>MoonPay</li>
                  <li>PayPal</li>
                  <li>Atlas</li>
                  <li>cPanel</li>
                  <li>Go Daddy</li>
                  <li>Github</li>
                </ul>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xl={12} lg={12} md={12} sm={12} className="mb-2">
                <div>
                  <p>
                    My professional journey began in the US Army, where I served
                    with the 1st Cavalry Division, including a year-long
                    deployment in Iraq. Following my military service, I
                    transitioned into telecommunication sales, working my way up
                    to managerial roles where I led teams to success through a
                    combination of product knowledge and strategic sales
                    techniques. My experiences in these diverse roles have honed
                    my leadership skills and my ability to drive projects to
                    completion.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="d-flex justify-content-center mb-10">
              <Col xl={9} lg={9} md={12} sm={12} className="mb-2">
                <div className="mb-8 mb-lg-0 text-center mt-5">
                  <Link
                    to="/portfolio"
                    className="btn btn-primary me-3 mb-3 mb-lg-0">
                    See My Portfolio
                  </Link>
                  <Link to="/contact-me" className="text-nowrap btn-link">
                    Want to chat? Click here
                  </Link>
                </div>
              </Col>
            </Row>
            <BackToTop />
          </Fragment>
        </Container>
      </div>
    </Fragment>
  );
};

export default About;
