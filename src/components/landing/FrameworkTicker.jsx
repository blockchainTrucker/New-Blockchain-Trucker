import node from "../../assets/images/icons/node-icon.png";
import react from "../../assets/images/icons/react-icon.png";
import express from "../../assets/images/icons/expressjs-icon.png";
import mongodb from "../../assets/images/icons/mongodb-icon.png";
import solidity from "../../assets/images/icons/solidity-icon.png";
import js from "../../assets/images/icons/javascript-icon.png";
import json from "../../assets/images/icons/json-icon.png";
import scss from "../../assets/images/icons/scss-icon.png";
import Ticker from "../tickers/horizontal/HorizontalTicker";
import { Row, Image } from "react-bootstrap";

const CryptoBrandTicker = () => {
  return (
    <Row className="bg-gradient-mix-shade d-flex text-center text-nowrap py-5 shadow text-nowrap">
      <Ticker direction="toRight" speed={10} nextOffset={100}>
        {({ index }) => (
          <div>
            <a href="https://nodejs.org" target="_blank" rel="noreferrer">
              <Image
                className="mx-10"
                height={55}
                width={80}
                src={node}
                alt="Node.js icon"
              />
            </a>
            <a href="https://reactjs.org" target="_blank" rel="noreferrer">
              <Image
                className="mx-10"
                height={50}
                width={50}
                src={react}
                alt="React icon"
              />
            </a>
            <a href="https://www.mongodb.com" target="_blank" rel="noreferrer">
              <Image
                className="mx-10"
                height={50}
                width={25}
                src={mongodb}
                alt="MongoDB icon"
              />
            </a>
            <a href="https://soliditylang.org" target="_blank" rel="noreferrer">
              <Image
                className="mx-10"
                height={50}
                width={50}
                src={solidity}
                alt="Solidity icon"
              />
            </a>
            <a href="https://expressjs.com" target="_blank" rel="noreferrer">
              <Image
                className="mx-10"
                height={35}
                width={110}
                src={express}
                alt="Express icon"
              />
            </a>
            <a
              href="https://developer.mozilla.org"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="mx-10"
                height={50}
                width={50}
                src={js}
                alt="Javascript icon"
              />
            </a>
            <a href="https://sass-lang.com" target="_blank" rel="noreferrer">
              <Image
                className="mx-10"
                height={50}
                width={50}
                src={scss}
                alt="SCSS icon"
              />
            </a>
            <a href="https://www.json.org" target="_blank" rel="noreferrer">
              <Image
                className="mx-10"
                height={50}
                width={50}
                src={json}
                alt="JSON icon"
              />
            </a>
          </div>
        )}
      </Ticker>
    </Row>
  );
};

export default CryptoBrandTicker;
