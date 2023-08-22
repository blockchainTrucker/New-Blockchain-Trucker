// import node module libraries
import React, { Fragment, useEffect } from "react";
import { Col, Row, Container, Image } from "react-bootstrap";
import Header from "components/functions/Header";

import BackToTop from "components/functions/BackToTop";

import { CopyBlock, dracula } from "react-code-blocks";
import {
  hashingExample,
  hashingTxt1,
  hashingTxt2,
  hashingTxt3,
  hashingTxt4,
  hashingTxt5,
} from "../../../data/exampleTxt";

const PasswordHashing = (props) => {
  useEffect(() => {
    document.title = "Blockchain Trucker - Hashing with Bcrypt";
  }, []);
  return (
    <Fragment>
      <div className="py-4 py-lg-8 pb-14 bg-white ">
        <Container>
          <Fragment>
            <Header
              title="Password Hashing with Bcrypt"
              github="https://github.com/blockchaintrucker/Pizza-King/blob/master/api/controllers/registerUser.js"
              description="Click here to see an example of Bcrypt being used in an application"
            />
            <Row className="justify-content-center">
              <Col md={10} className="mb-2">
                <div>
                  <p>{hashingTxt1}</p>
                  <p>{hashingTxt2}</p>
                  <p>{hashingTxt3}</p>
                  <p>{hashingTxt4}</p>
                  <p>{hashingTxt5}</p>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col md={10}>
                <div className="pop">
                  <CopyBlock
                    text={hashingExample}
                    language={"jsx"}
                    showLineNumbers={false}
                    theme={dracula}
                  />
                </div>
              </Col>
            </Row>
            <Row className="my-5">
              <Header
                className=""
                github="https://github.com/blockchaintrucker/Pizza-King/blob/master/api/controllers/registerUser.js"
                description="Click here to see an example of Bcrypt being used in an application"
              />
            </Row>
            <BackToTop />
          </Fragment>
        </Container>
      </div>
    </Fragment>
  );
};

export default PasswordHashing;
