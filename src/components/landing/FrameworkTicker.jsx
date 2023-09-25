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
      <Ticker direction="toRight" nextOffset={100}>
        {({ index }) => (
          <div>
            <a href="https://nodejs.org" target="_blank" rel="noreferrer">
              <Image
                className="mx-10"
                height={70}
                width={90}
                src={node}
                alt="Node.js icon"
              />
            </a>
            <a href="https://reactjs.org" target="_blank" rel="noreferrer">
              <Image
                className="mx-10"
                height={70}
                width={70}
                src={react}
                alt="React icon"
              />
            </a>
            <a href="https://www.mongodb.com" target="_blank" rel="noreferrer">
              <Image
                className="mx-10"
                height={80}
                width={90}
                src={mongodb}
                alt="MongoDB icon"
              />
            </a>
            <a to="https://soliditylang.org" target="_blank" rel="noreferrer">
              <Image
                className="mx-10"
                height={60}
                width={60}
                src={solidity}
                alt="Solidity icon"
              />
            </a>
            <a href="expressjs.com" target="_blank" rel="noreferrer">
              <Image
                className="mx-10"
                height={50}
                width={110}
                src={express}
                alt="Express icon"
              />
            </a>
            <a
              to="https://developer.mozilla.org"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="mx-10"
                height={60}
                width={60}
                src={js}
                alt="Javascript icon"
              />
            </a>{" "}
            <a href="https://sass-lang.com" target="_blank" rel="noreferrer">
              <Image
                className="mx-10"
                height={60}
                width={60}
                src={scss}
                alt="SCSS icon"
              />
            </a>
            <a href="https://www.json.org" target="_blank" rel="noreferrer">
              <Image
                className="mx-10"
                height={60}
                width={60}
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