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
                    My name is Jesse Wachtel. From the beginning of 2021, I had
                    been working to complete the Zero to Blockchain program at{" "}
                    <a href="https://kingslanduniversity.com/zero-to-blockchain-developer-program/">
                      Kingsland University
                    </a>
                    . The program was split into two parts. The first part was a
                    nine month Full Stack Developer bootcamp. It was JavaScript
                    focused and had an emphasis on the MERN stack. I received my
                    certification as a Full Stack Developer in December of 2021.
                    After graduating, I started my own business,{" "}
                    <a
                      href="https://www.decentralized-ventures.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Decentralized Ventures
                    </a>
                    , and have started working on my first two decentralized
                    applications called{" "}
                    <a
                      href="https://www.fundingchain.io"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Funding Chain
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://www.smartcontractverifier.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Smart Contract Verifier
                    </a>
                    . I simultaneously began working on my Blockchain Engineer
                    certification while working building the two projects. The
                    Blockchain Engineer portion of the program covered a wide
                    range of topics such as cryptography and elliptic curves,
                    public and private blockchain devopment, mining, DApp
                    development, smart contract development including ERC20 and
                    ERC721. There was an emphasis on the Ethereum blockchain,
                    although a lot of that transfers to any EVM chain. There
                    were two advanced projects required in order to graduate, a
                    decentralized application that deployed smart contracts and
                    a custom blockchain network. I received my certification as
                    a Blockchain Engineer in January of 2023. Keep in mind, all
                    of this happened during my down time from the back of a
                    tractor-trailer. Honestly, at times, it felt like I was
                    solving coding problem in my head while driving down the
                    interstate.
                  </p>
                  <Row className="justify-content-center mb-5">
                    <Col
                      className="mx-3 mt-3"
                      xl={4}
                      lg={4}
                      md={4}
                      sm={12}
                      xs={12}
                    >
                      <ModalImage
                        fulid
                        className="pop corners"
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
                      xs={12}
                    >
                      <ModalImage
                        className="pop corners"
                        small={blockchainCert}
                        large={blockchainCert}
                        alt="Jesse Wachtel's Blockchain Engineer Certification Certificte"
                      />
                    </Col>
                  </Row>

                  <p>
                    Circling back to{" "}
                    <a
                      href="https://www.fundingchain.io"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Funding Chain
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://www.smartcontractverifier.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Smart Contract Verifier
                    </a>
                    , they are both fully functional MVPs running on both the
                    Ethereum and Hedera networks. Funding Chain is a
                    crowdfunding platform that uses smart contracts to
                    orchestrate the fundraisers. This will give users full
                    transparancy, autonomy, and instant access to funds. Smart
                    Contract Verifier is to verify the contracts deployed by
                    Funding Chain and any other company or developer that would
                    like to use its services. It specializes not only in
                    verifying that the bytecode on an address is what it is
                    supposed to be. It take it another step further. It ensures
                    that key signatures that would only be there if the smart
                    contract is authentic are actually there. Smart Contract
                    Verifier looks for the authenticity which no other product
                    on the market does. That is why one of it's trademarks is
                    "We put the trust in trustless."
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="d-flex justify-content-center">
              <Col xl={12} lg={12} md={12} sm={12} className="mx-3 mt-3">
                <FrameworkLogos
                  title="THESE ARE THE ENVIRONMENTS AND FRAMEWORKS I AM CURRENTLY MOST COMFORTABLE WITH"
                  logos={LogoList}
                  limit={6}
                />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xl={12} lg={12} md={12} sm={12} className="mx-3 mt-3 mb-3">
                <div>
                  <p>
                    You may be wondering why I chose the name Blockchain
                    Trucker. It has to do with where I started this journey and
                    where I'm heading. Until May of 2023, I worked as a Tractor
                    Trailer Driver in the United States and had been doing that
                    for the past 7 years. I've always been into technology and
                    had been following the uprising of various blockchains and
                    other decentralized networks. As I read about them, I
                    started understanding the ways they could change how we go
                    about our daily tasks personally and professionally in the
                    future. I started having ideas and looked into how I could
                    build decentralized application. That is where{" "}
                    <a href="https://kingslanduniversity.com/zero-to-blockchain-developer-program/">
                      Kingsland University
                    </a>{" "}
                    came into the picture.
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
                className="mx-auto me-lg-n10 me-xl-n20"
              >
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
                  <li>Image Upload Handling</li>
                  <li>Platform Development</li>
                  <li>Cookies</li>
                  <li>Reusable Code</li>
                  <li>SCSS</li>
                  <li>Animations</li>
                  <li>AI Detection Tools</li>
                </ul>
              </Col>
              <Col xl={3} lg={4} md={5} sm={6} xs={9} className="mb-2 mx-auto">
                <ul>
                  <p className="mb-0 fw-bolder">Backend</p>
                  <li>API Architecture</li>
                  <li>Database Architecture</li>
                  <li>Schema Design</li>
                  <li>Tracking and Reporting</li>
                  <li>Express</li>
                  <li>Cron</li>
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
                    My professional life began when I joined the US Army at
                    seventeen. I spent a little over four years in the service,
                    including a year deployed to Iraq with the 1st Cavalry
                    Division. After I was discharged, I jumped into
                    telecommunication sales working for a company based out of
                    Ogen, UT named Marketstar. I did well and was promoted to
                    becoming the sales manager of the location I worked in. In
                    that role, I was responsible for my sales as well as my team
                    of five. Eventually, I accepted a position with the same
                    company as the Blackberry brand advocate (back when
                    Blackberry was still cool) for a territory in South Florida
                    from Port St. Lucie to Fort Lauderdale and over to Fort
                    Myers and Cape Coral. In that position, I visited wireless
                    retail stores of all brands and taught the employees tips
                    and tricks and how to use the features and benefits of the
                    devices to sell more. I was also responsible for territory
                    sales and identified locations to focus on to reach goals. I
                    regularly conducted classroom style training as well as
                    taking part in special events. My final role prior to
                    deciding to start driving a truck was as a Retail Associate
                    Manager for T-Mobile. During that time, I was responsible
                    for a team of up to ten sales associates and an operations
                    associate. I strived to create a team that was competitive
                    but would also work together. My sales philosophy was was
                    centered around product knowledge and I constantly coached
                    my team to become as knowledgeable as possible on our
                    products as well as competitors. This resulted in success
                    month after month not only in sales, but also with customer
                    satisfaction.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="d-flex justify-content-center mb-10">
              <Col xl={9} lg={9} md={12} sm={12} className="mb-2">
                <div className="mb-8 mb-lg-0 text-center">
                  <Link
                    to="/portfolio"
                    className="btn btn-primary me-3 mb-3 mb-lg-0"
                  >
                    See Portfolio
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
