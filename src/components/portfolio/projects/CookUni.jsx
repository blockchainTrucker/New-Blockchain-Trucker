// import node module libraries
import React, { Fragment, useEffect } from "react";
import { Col, Row, Container, Image } from "react-bootstrap";
import Header from "../../functions/Header";
import SmallHeader from "../../functions/SmallHeader";
import { CopyBlock, dracula } from "react-code-blocks";
import ModalImage from "react-modal-image";
import BackToTop from "../../functions/BackToTop";
import cuHome from "../../../assets/images/cookuni/cookuni-home.png";
import recipes from "../../../assets/images/cookuni/cookuni-recipes.png";
import details from "../../../assets/images/cookuni/cookuni-recipe-details.png";
import signin from "../../../assets/images/cookuni/cookuni-signin.png";
import registration from "../../../assets/images/cookuni/cookuni-reg.png";
import account from "../../../assets/images/cookuni/cookuni-account.png";
import addRecipe from "../../../assets/images/cookuni/cookuni-add-recipe.png";
import {
  cuTxt1,
  cuTxt2,
  cuTxt3,
  cuTxt4,
  cuTxt5,
  cuTxt6,
  cuExample1,
  cuExample2,
  cuExample3,
  cuExample4,
  cuExample5,
  cuExample6,
  cuExample7,
  cuExample8,
  cuExample9,
  cuExample10,
  cuExample11,
  cuExample12,
} from "data/projectTxt";
const PizzaKing = () => {
  useEffect(() => {
    document.title = "Blockchain Trucker - CookUni";
  }, []);

  return (
    <Fragment>
      <div className="py-4 py-lg-8 pb-14 bg-white ">
        <Container>
          <Fragment>
            <Header
              title="CookUni"
              description="Click here to view the full repository"
              github="https://github.com/blockchaintrucker/CookUni"
            />
            <Row className="justify-content-center">
              <Col xl={10} lg={10} md={10} sm={12} xs={12} className="mb-3">
                <p>{cuTxt1}</p>
              </Col>
            </Row>
            <Row className="justify-content-center mb-5">
              <Col className="mx-3" xl={5} lg={5} md={5} sm={12} xs={12}>
                <SmallHeader header="home page" />
                <ModalImage
                  className="pop corners"
                  small={cuHome}
                  large={cuHome}
                  alt="Pizza King homepage"
                />
              </Col>
            </Row>
            <Row className="justify-content-center mb-5">
              <Col xl={6} lg={6} md={12} sm={12} xs={12} className="p-0">
                <SmallHeader header="home route" />
                <CopyBlock
                  text={cuExample1}
                  language={"jsx"}
                  showLineNumbers={false}
                  theme={dracula}
                  customStyle={{
                    height: "300px",
                    overflowY: "scroll",
                    margin: "0px 0.75rem",
                    borderRadius: "5px",
                    boxShadow: "1px 2px 3px rgba(0,0,0,0.35)",
                    fontSize: "0.75rem",
                  }}
                />
              </Col>
              <Col xl={6} lg={6} md={12} sm={12} xs={12} className="p-0">
                <SmallHeader header="home frontend" />
                <CopyBlock
                  text={cuExample2}
                  language={"jsx"}
                  showLineNumbers={false}
                  theme={dracula}
                  customStyle={{
                    height: "300px",
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
                <p>{cuTxt2}</p>
              </Col>
            </Row>
            <Row className="justify-content-center mb-5">
              <Col className="mx-3" xl={5} lg={5} md={5} sm={12} xs={12}>
                <SmallHeader header="recepies page" />
                <ModalImage
                  className="pop corners"
                  small={recipes}
                  large={recipes}
                  alt="CookUni recepies page"
                />
              </Col>
            </Row>
            <Row className="justify-content-center mb-5">
              <Col xl={6} lg={6} md={12} sm={12} xs={12} className="p-0">
                <SmallHeader header="recepies route" />
                <CopyBlock
                  text={cuExample4}
                  language={"jsx"}
                  showLineNumbers={false}
                  theme={dracula}
                  customStyle={{
                    height: "300px",
                    overflowY: "scroll",
                    margin: "0px 0.75rem",
                    borderRadius: "5px",
                    boxShadow: "1px 2px 3px rgba(0,0,0,0.35)",
                    fontSize: "0.75rem",
                  }}
                />
              </Col>
              <Col xl={6} lg={6} md={12} sm={12} xs={12} className="p-0">
                <SmallHeader header="recepies frontend" />
                <CopyBlock
                  text={cuExample3}
                  language={"jsx"}
                  showLineNumbers={false}
                  theme={dracula}
                  customStyle={{
                    height: "300px",
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
                <p>{cuTxt3}</p>
              </Col>
            </Row>
            <Row className="justify-content-center mb-5">
              <Col className="mx-3" xl={5} lg={5} md={5} sm={12} xs={12}>
                <SmallHeader header="recepie details page" />
                <ModalImage
                  className="pop corners"
                  small={details}
                  large={details}
                  alt="CookUni recepies page"
                />
              </Col>
            </Row>
            <Row className="justify-content-center mb-5">
              <Col xl={6} lg={6} md={12} sm={12} xs={12} className="p-0">
                <SmallHeader header="recepie details route" />
                <CopyBlock
                  text={cuExample5}
                  language={"jsx"}
                  showLineNumbers={false}
                  theme={dracula}
                  customStyle={{
                    height: "300px",
                    overflowY: "scroll",
                    margin: "0px 0.75rem",
                    borderRadius: "5px",
                    boxShadow: "1px 2px 3px rgba(0,0,0,0.35)",
                    fontSize: "0.75rem",
                  }}
                />
              </Col>
              <Col xl={6} lg={6} md={12} sm={12} xs={12} className="p-0">
                <SmallHeader header="recepie details frontend" />
                <CopyBlock
                  text={cuExample6}
                  language={"jsx"}
                  showLineNumbers={false}
                  theme={dracula}
                  customStyle={{
                    height: "300px",
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
                <p>{cuTxt4}</p>
              </Col>
            </Row>
            <Row className="justify-content-center mb-5">
              <Col className="mx-3" xl={5} lg={5} md={5} sm={12} xs={12}>
                <SmallHeader header="sign in page" />
                <ModalImage
                  className="pop corners"
                  small={signin}
                  large={signin}
                  alt="CookUni recepies page"
                />
              </Col>
              <Col className="mx-3" xl={5} lg={5} md={5} sm={12} xs={12}>
                <SmallHeader header="registration page" />
                <ModalImage
                  className="pop corners"
                  small={registration}
                  large={registration}
                  alt="CookUni recepies page"
                />
              </Col>
            </Row>
            <Row className="justify-content-center mb-5">
              <Col xl={6} lg={6} md={12} sm={12} xs={12} className="p-0">
                <SmallHeader header="registration route" />
                <CopyBlock
                  text={cuExample7}
                  language={"jsx"}
                  showLineNumbers={false}
                  theme={dracula}
                  customStyle={{
                    height: "300px",
                    overflowY: "scroll",
                    margin: "0px 0.75rem",
                    borderRadius: "5px",
                    boxShadow: "1px 2px 3px rgba(0,0,0,0.35)",
                    fontSize: "0.75rem",
                  }}
                />
              </Col>
              <Col xl={6} lg={6} md={12} sm={12} xs={12} className="p-0">
                <SmallHeader header="registration frontend" />
                <CopyBlock
                  text={cuExample8}
                  language={"jsx"}
                  showLineNumbers={false}
                  theme={dracula}
                  customStyle={{
                    height: "300px",
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
                <p>{cuTxt5}</p>
              </Col>
            </Row>
            <Row className="justify-content-center mb-5">
              <Col className="mx-3" xl={5} lg={5} md={5} sm={12} xs={12}>
                <SmallHeader header="my profile page" />
                <ModalImage
                  className="pop corners"
                  small={account}
                  large={account}
                  alt="CookUni recepies page"
                />
              </Col>
            </Row>
            <Row className="justify-content-center mb-5">
              <Col xl={6} lg={6} md={12} sm={12} xs={12} className="p-0">
                <SmallHeader header="my profile route" />
                <CopyBlock
                  text={cuExample11}
                  language={"jsx"}
                  showLineNumbers={false}
                  theme={dracula}
                  customStyle={{
                    height: "300px",
                    overflowY: "scroll",
                    margin: "0px 0.75rem",
                    borderRadius: "5px",
                    boxShadow: "1px 2px 3px rgba(0,0,0,0.35)",
                    fontSize: "0.75rem",
                  }}
                />
              </Col>
              <Col xl={6} lg={6} md={12} sm={12} xs={12} className="p-0">
                <SmallHeader header="my profile frontend" />
                <CopyBlock
                  text={cuExample12}
                  language={"jsx"}
                  showLineNumbers={false}
                  theme={dracula}
                  customStyle={{
                    height: "300px",
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
                <p>{cuTxt6}</p>
              </Col>
            </Row>
            <Row className="justify-content-center mb-5">
              <Col className="mx-3" xl={5} lg={5} md={5} sm={12} xs={12}>
                <SmallHeader header="add recepie page" />
                <ModalImage
                  className="pop corners"
                  small={addRecipe}
                  large={addRecipe}
                  alt="CookUni recepies page"
                />
              </Col>
            </Row>
            <Row className="justify-content-center mb-5">
              <Col xl={6} lg={6} md={12} sm={12} xs={12} className="p-0">
                <SmallHeader header="add recepie route" />
                <CopyBlock
                  text={cuExample9}
                  language={"jsx"}
                  showLineNumbers={false}
                  theme={dracula}
                  customStyle={{
                    height: "300px",
                    overflowY: "scroll",
                    margin: "0px 0.75rem",
                    borderRadius: "5px",
                    boxShadow: "1px 2px 3px rgba(0,0,0,0.35)",
                    fontSize: "0.75rem",
                  }}
                />
              </Col>
              <Col xl={6} lg={6} md={12} sm={12} xs={12} className="p-0">
                <SmallHeader header="add recepie frontend" />
                <CopyBlock
                  text={cuExample10}
                  language={"jsx"}
                  showLineNumbers={false}
                  theme={dracula}
                  customStyle={{
                    height: "300px",
                    overflowY: "scroll",
                    margin: "0px 0.75rem",
                    borderRadius: "5px",
                    boxShadow: "1px 2px 3px rgba(0,0,0,0.35)",
                    fontSize: "0.75rem",
                  }}
                />
              </Col>
            </Row>
            <Header
              description="Click here to view the full repository"
              github="https://github.com/blockchaintrucker/CookUni"
            />
            <BackToTop />
          </Fragment>
        </Container>
      </div>
    </Fragment>
  );
};

export default PizzaKing;
