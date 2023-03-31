// import node module libraries
import React, { Fragment, useEffect } from "react";
import { Col, Row, Container, Image } from "react-bootstrap";
import Header from "../../functions/Header";
import SmallHeader from "../../functions/SmallHeader";
import ModalImage from "react-modal-image";
import BackToTop from "../../functions/BackToTop";
import { CopyBlock, dracula } from "react-code-blocks";
import pkHome from "assets/images/pizza-king/pizzaKingHomeLarge.jpg";
import pkMenu from "assets/images/pizza-king/pizzaKingMenuLarge.jpg";
import pkAccount from "assets/images/pizza-king/pizza-king-account.png";
import pkRegistration from "assets/images/pizza-king/PizzaKingSignupLarge.jpg";
import pkSignin from "assets/images/pizza-king/PizzaKingSigninLarge.jpg";
import pkCheckout from "assets/images/pizza-king/pizza-king-checkout.png";
import {
  menuExample,
  homeExample,
  cartExample,
  registrationExample,
  registrationBackend,
  pastOrders,
  pkTxt1,
  pkTxt3,
  pkTxt4,
  pkTxt5,
  pkTxt6,
} from "data/projectTxt";

const PizzaKing = () => {
  useEffect(() => {
    document.title = "Blockchain Trucker - Pizza King";
  }, []);
  return (
    <Fragment>
      <div className="py-4 py-lg-8 pb-14 bg-white ">
        <Container>
          <Fragment>
            <Header
              title="Pizza King"
              github="https://github.com/jwachtel96/Pizza-King"
            />
            <Row className="justify-content-center">
              <Col xl={10} lg={10} md={10} sm={12} xs={12} className="mb-3">
                <p>{pkTxt1}</p>
                <p>{pkTxt3}</p>
              </Col>
            </Row>
            <Row className="justify-content-center mb-5">
              <Col className="mx-3" xl={3} lg={3} md={5} sm={12} xs={12}>
                <SmallHeader header="home page" />
                <ModalImage
                  className="pop corners"
                  small={pkHome}
                  large={pkHome}
                  alt="Pizza King homepage"
                />
              </Col>
              <Col className="mx-3" xl={3} lg={3} md={5} sm={12} xs={12}>
                <SmallHeader header="menu page" />
                <ModalImage
                  className="pop corners"
                  small={pkMenu}
                  large={pkMenu}
                  alt="Pizza King menu "
                />
              </Col>
            </Row>
            <Row className="justify-content-center mb-5">
              <Col xl={6} lg={6} md={12} sm={12} xs={12} className="p-0">
                <SmallHeader header="home page react component" />
                <CopyBlock
                  text={homeExample}
                  language={"jsx"}
                  showLineNumbers={false}
                  theme={dracula}
                  customStyle={{
                    height: "400px",
                    overflowY: "scroll",
                    margin: "0px 0.75rem",
                    borderRadius: "5px",
                    boxShadow: "1px 2px 3px rgba(0,0,0,0.35)",
                    fontSize: "0.75rem",
                  }}
                />
              </Col>
              <Col xl={6} lg={6} md={12} sm={12} xs={12} className="p-0">
                <SmallHeader header="menu react component" />
                <CopyBlock
                  text={menuExample}
                  language={"jsx"}
                  showLineNumbers={false}
                  theme={dracula}
                  customStyle={{
                    height: "400px",
                    overflowY: "scroll",
                    margin: "0px 0.75rem",
                    borderRadius: "5px",
                    boxShadow: "1px 2px 3px rgba(0,0,0,0.35)",
                    fontSize: "0.75rem",
                  }}
                />
              </Col>
            </Row>
            <Row className="justify-content-center mb-3">
              <Col xl={10} lg={10} md={10} sm={12} xs={12}>
                <div>
                  <p>{pkTxt4}</p>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center mb-5">
              <Col className="mx-3" xl={4} lg={4} md={4} sm={12} xs={12}>
                <SmallHeader header="sign in page" />
                <ModalImage
                  className="pop corners"
                  small={pkSignin}
                  large={pkSignin}
                  alt="Pizza King homepage"
                />
              </Col>
              <Col className="mx-3" xl={4} lg={4} md={4} sm={12} xs={12}>
                <SmallHeader header="registration page" />
                <ModalImage
                  className="pop corners"
                  small={pkRegistration}
                  large={pkRegistration}
                  alt="Pizza King menu "
                />
              </Col>
            </Row>
            <Row className="justify-content-center mb-5">
              <Col xl={6} lg={6} md={12} sm={12} xs={12} className="p-0">
                <SmallHeader header="registration react component" />
                <CopyBlock
                  text={registrationExample}
                  language={"jsx"}
                  showLineNumbers={false}
                  theme={dracula}
                  customStyle={{
                    height: "400px",
                    overflowY: "scroll",
                    margin: "0px 0.75rem",
                    borderRadius: "5px",
                    boxShadow: "1px 2px 3px rgba(0,0,0,0.35)",
                    fontSize: "0.75rem",
                  }}
                />
              </Col>
              <Col xl={6} lg={6} md={12} sm={12} xs={12} className="p-0">
                <SmallHeader header="registration backend" />
                <CopyBlock
                  text={registrationBackend}
                  language={"jsx"}
                  showLineNumbers={false}
                  theme={dracula}
                  customStyle={{
                    height: "400px",
                    overflowY: "scroll",
                    margin: "0px 0.75rem",
                    borderRadius: "5px",
                    boxShadow: "1px 2px 3px rgba(0,0,0,0.35)",
                    fontSize: "0.75rem",
                  }}
                />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xl={10} lg={10} md={10} sm={12} xs={12} className="mb-3">
                <div>
                  <p>{pkTxt5}</p>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center mb-5">
              <Col className="mx-3" xl={7} lg={7} md={7} sm={12} xs={12}>
                <SmallHeader header="my account page" />
                <ModalImage
                  className="pop corners"
                  small={pkAccount}
                  large={pkAccount}
                  alt="Pizza King homepage"
                />
              </Col>
            </Row>
            <Row className="justify-content-center mb-5">
              <Col xl={6} lg={6} md={12} sm={12} xs={12} className="p-0">
                <SmallHeader header="cart react component" />
                <CopyBlock
                  text={cartExample}
                  language={"jsx"}
                  showLineNumbers={false}
                  theme={dracula}
                  customStyle={{
                    height: "400px",
                    overflowY: "scroll",
                    margin: "0px 0.75rem",
                    borderRadius: "5px",
                    boxShadow: "1px 2px 3px rgba(0,0,0,0.35)",
                    fontSize: "0.75rem",
                  }}
                />
              </Col>
              <Col xl={6} lg={6} md={12} sm={12} xs={12} className="p-0">
                <SmallHeader header="past orders react component" />
                <CopyBlock
                  text={pastOrders}
                  language={"jsx"}
                  showLineNumbers={false}
                  theme={dracula}
                  customStyle={{
                    height: "400px",
                    overflowY: "scroll",
                    margin: "0px 0.75rem",
                    borderRadius: "5px",
                    boxShadow: "1px 2px 3px rgba(0,0,0,0.35)",
                    fontSize: "0.75rem",
                  }}
                />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xl={10} lg={10} md={10} sm={12} xs={12} className="mb-3">
                <div>
                  <p>{pkTxt6}</p>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center mb-5">
              <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                <ModalImage
                  className="pop corners"
                  small={pkCheckout}
                  large={pkCheckout}
                  alt="Pizza King homepage"
                />
              </Col>
            </Row>
            <Row>
              <Header
                description="Click here to view the full repository"
                github="https://github.com/jwachtel96/Pizza-King"
              />
            </Row>
            <BackToTop />
          </Fragment>
        </Container>
      </div>
    </Fragment>
  );
};

export default PizzaKing;
