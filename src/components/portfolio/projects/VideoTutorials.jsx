// import node module libraries
import React, { Fragment, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Header from "../../functions/Header";
import ModalImage from "react-modal-image";
import { CopyBlock, dracula } from "react-code-blocks";
import SmallHeader from "../../functions/SmallHeader";
import BackToTop from "../../functions/BackToTop";
import vtHome from "../../../assets/images/video-tutorials/video-tutorials-home-loggedout.png";
import vtHome2 from "../../../assets/images/video-tutorials/video-tutorials-home-loggedin.png";
import vtReg from "../../../assets/images/video-tutorials/video-tutorials-reg.png";
import vtSignin from "../../../assets/images/video-tutorials/video-tutorials-signin.png";
import vtSearch from "../../../assets/images/video-tutorials/video-tutorials-search.png";
import vtDetails from "../../../assets/images/video-tutorials/video-tutorials-details-unsubscribed.png";
import vtDetails2 from "../../../assets/images/video-tutorials/video-tutorials-details-subscribed.png";
import vtAccount from "../../../assets/images/video-tutorials/video-tutorials-account.png";
import vtEdit from "../../../assets/images/video-tutorials/video-tutorials-edit.png";
import vtCreate from "../../../assets/images/video-tutorials/video-tutorials-create.png";
import {
  vtTxt1,
  vtTxt2,
  vtTxt3,
  vtTxt4,
  vtTxt5,
  vtTxt6,
  vtTxt7,
  vtExample1,
  vtExample2,
  vtExample3,
  vtExample4,
  vtExample5,
  vtExample6,
  vtExample7,
  vtExample8,
  vtExample9,
  vtExample10,
} from "data/projectTxt";
const PizzaKing = () => {
  useEffect(() => {
    document.title = "Blockchain Trucker - Video Tutorials";
  }, []);
  return (
    <Fragment>
      <div className="py-4 py-lg-8 pb-14 bg-white ">
        <Container>
          <Fragment>
            <Header
              title="Video Tutorials"
              description="Click here to see the full repository"
              github="https://github.com/jwachtel96/Video-Tutorials"
            />
            <Row className="justify-content-center">
              <Col xl={10} lg={10} md={10} sm={12} xs={12} className="mb-3">
                <p>{vtTxt1}</p>
                <p>{vtTxt2}</p>
              </Col>
            </Row>
            <Row className="justify-content-center mb-5">
              <Col className="mx-3" xl={5} lg={5} md={5} sm={12} xs={12}>
                <SmallHeader header="home page" />
                <ModalImage
                  className="pop corners"
                  small={vtHome}
                  large={vtHome}
                  alt="Video Tutorials guest Home"
                />
              </Col>
              <Col className="mx-3" xl={5} lg={5} md={5} sm={12} xs={12}>
                <SmallHeader header="authenticated home page" />
                <ModalImage
                  className="pop corners"
                  small={vtHome2}
                  large={vtHome2}
                  alt="Video Tutorials authenticated user Home"
                />
              </Col>
            </Row>
            <Row className="justify-content-center mb-5">
              <Col xl={6} lg={6} md={12} sm={12} xs={12} className="p-0">
                <SmallHeader header="home backend code" />
                <CopyBlock
                  text={vtExample1}
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
                <SmallHeader header="home frontend code" />
                <CopyBlock
                  text={vtExample2}
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
                <p>{vtTxt3}</p>
              </Col>
            </Row>
            <Row className="justify-content-center mb-5">
              <Col className="mx-3" xl={5} lg={5} md={5} sm={12} xs={12}>
                <SmallHeader header="registration page" />
                <ModalImage
                  className="pop corners"
                  small={vtReg}
                  large={vtReg}
                  alt="Video Tutorials Registration page"
                />
              </Col>
              <Col className="mx-3" xl={5} lg={5} md={5} sm={12} xs={12}>
                <SmallHeader header="sign in page" />
                <ModalImage
                  className="pop corners"
                  small={vtSignin}
                  large={vtSignin}
                  alt="Video Tutorials Sign In page"
                />
              </Col>
            </Row>
            <Row className="justify-content-center mb-5">
              <Col xl={6} lg={6} md={12} sm={12} xs={12} className="p-0">
                <SmallHeader header="registration backend code" />
                <CopyBlock
                  text={vtExample3}
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
                <SmallHeader header="registration frontend code" />
                <CopyBlock
                  text={vtExample4}
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
                <p>{vtTxt4}</p>
              </Col>
            </Row>
            <Row className="justify-content-center mb-5">
              <Col className="mx-3" xl={5} lg={5} md={5} sm={12} xs={12}>
                <SmallHeader header="tutorial details page" />
                <ModalImage
                  className="pop corners"
                  small={vtDetails}
                  large={vtDetails}
                  alt="Video Tutorials Details page"
                />
              </Col>
              <Col className="mx-3" xl={5} lg={5} md={5} sm={12} xs={12}>
                <SmallHeader header="subscribed tutorial details page" />
                <ModalImage
                  className="pop corners"
                  small={vtDetails2}
                  large={vtDetails2}
                  alt="Video Tutorials Details page when subscribed"
                />
              </Col>
            </Row>
            <Row className="justify-content-center mb-5">
              <Col xl={6} lg={6} md={12} sm={12} xs={12} className="p-0">
                <SmallHeader header="tutorial details backend code" />
                <CopyBlock
                  text={vtExample5}
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
                <SmallHeader header="tutorial details frontend code" />
                <CopyBlock
                  text={vtExample6}
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
                <p>{vtTxt5}</p>
                <p>{vtTxt6}</p>
              </Col>
            </Row>
            <Row className="justify-content-center mb-5">
              <Col className="mx-3" xl={5} lg={5} md={5} sm={12} xs={12}>
                <SmallHeader header="profile page" />
                <ModalImage
                  className="pop corners"
                  small={vtAccount}
                  large={vtAccount}
                  alt="Video Tutorials Profile page"
                />
              </Col>
              <Col className="mx-3" xl={5} lg={5} md={5} sm={12} xs={12}>
                <SmallHeader header="search results page" />
                <ModalImage
                  className="pop corners"
                  small={vtSearch}
                  large={vtSearch}
                  alt="Video Tutorials Search function"
                />
              </Col>
            </Row>
            <Row className="justify-content-center mb-5">
              <Col xl={6} lg={6} md={12} sm={12} xs={12} className="p-0">
                <SmallHeader header="profile backend code" />
                <CopyBlock
                  text={vtExample7}
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
                <SmallHeader header="search function backend code" />
                <CopyBlock
                  text={vtExample8}
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
                <p>{vtTxt7}</p>
              </Col>
            </Row>
            <Row className="justify-content-center mb-5">
              <Col className="mx-3" xl={5} lg={5} md={5} sm={12} xs={12}>
                <SmallHeader header="create tutorial page" />
                <ModalImage
                  className="pop corners"
                  small={vtCreate}
                  large={vtCreate}
                  alt="Video Tutorials Create Tutorial page"
                />
              </Col>
              <Col className="mx-3" xl={5} lg={5} md={5} sm={12} xs={12}>
                <SmallHeader header="edit tutorial page" />
                <ModalImage
                  className="pop corners"
                  small={vtEdit}
                  large={vtEdit}
                  alt="Video Tutorials Edit Tutorial page"
                />
              </Col>
            </Row>
            <Row className="justify-content-center mb-5">
              <Col xl={6} lg={6} md={12} sm={12} xs={12} className="p-0">
                <SmallHeader header="create backend code" />
                <CopyBlock
                  text={vtExample9}
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
                <SmallHeader header="create frontend code" />
                <CopyBlock
                  text={vtExample10}
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
            <Header
              description="Click here to see the full repository"
              github="https://github.com/jwachtel96/Video-Tutorials"
            />
            <BackToTop />
          </Fragment>
        </Container>
      </div>
    </Fragment>
  );
};

export default PizzaKing;
