// import node module libraries
import React, { Fragment, useEffect } from "react";
import { Col, Row, Container, Image } from "react-bootstrap";
import Header from "../../functions/Header";
import SmallHeader from "../../functions/SmallHeader";
import { CopyBlock, dracula } from "react-code-blocks";
import ModalImage from "react-modal-image";
import BackToTop from "../../functions/BackToTop";

import {} from "data/projectTxt";

const Blockchain = () => {
  useEffect(() => {
    document.title = "Blockchain Trucker - Custom Blockchian";
  }, []);

  return (
    <Fragment>
      <div className="py-4 py-lg-8 pb-14 bg-white ">
        <Container>
          <Fragment>
            <Header
              title="Custom Blockchain"
              description="Click here to view the full repository"
              github="https://github.com/blockchaintrucker/Blockchain-Project"
            />
          </Fragment>
        </Container>
      </div>
    </Fragment>
  );
};

export default Blockchain;
