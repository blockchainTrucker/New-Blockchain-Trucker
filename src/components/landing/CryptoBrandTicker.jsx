import ethLogo from "../../assets/images/icons/ethereum-icon.png";
import hbarLogo from "../../assets/images/icons/hedera-icon.png";
import adaLogo from "../../assets/images/icons/cardano-icon.png";
import dotLogo from "../../assets/images/icons/dot-icon.png";
import linkLogo from "../../assets/images/icons/link-icon.png";
import maticLogo from "../../assets/images/icons/matic-icon.png";
import solLogo from "../../assets/images/icons/sol-icon.png";
import scvLogo from "../../assets/images/icons/scv-icon.png";
import dvLogo from "../../assets/images/icons/dv-icon.png";
import xrpLogo from "../../assets/images/icons/xrp-icon.png";
import arbitrumLogo from "../../assets/images/icons/arbitrum-icon.png";
import bitcoin from "../../assets/images/icons/bitcoin-icon.png";
import fcLogo from "../../assets/images/icons/fc-icon.png";
import Ticker from "../tickers/horizontal/HorizontalTicker";
import { Row, Image } from "react-bootstrap";

const CryptoBrandTicker = () => {
  return (
    <Row className="bg-gradient-mix-shade d-flex text-center text-nowrap py-5 shadow text-nowrap">
      <Ticker speed={10} nextOffset={100}>
        {({ index }) => (
          <div>
            <a href="https://ethereum.org/" target="_blank" rel="noreferrer">
              <Image
                className="mx-10"
                height={50}
                width={35}
                src={ethLogo}
                alt="Ethereum icon"
              />
            </a>
            <a href="https://hedera.com/" target="_blank" rel="noreferrer">
              <Image
                className="mx-10"
                height={40}
                width={40}
                src={hbarLogo}
                alt="Hedera icon"
              />
            </a>
            <a href="https://bitcoin.org/" target="_blank" rel="noreferrer">
              <Image
                className="mx-10"
                height={50}
                width={50}
                src={bitcoin}
                alt="Bitcoin icon"
              />
            </a>
            <a href="https://cardano.org/" target="_blank" rel="noreferrer">
              <Image
                className="mx-10"
                height={50}
                width={50}
                src={adaLogo}
                alt="Cardano icon"
              />
            </a>
            <a
              href="https://www.polkadot.network/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="mx-10"
                height={50}
                width={50}
                src={dotLogo}
                alt="Polkadot icon"
              />
            </a>
            <a href="https://chain.link/" target="_blank" rel="noreferrer">
              <Image
                className="mx-10"
                height={50}
                width={50}
                src={linkLogo}
                alt="Chainlink icon"
              />
            </a>
            <a
              href="https://polygon.technology/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="mx-10"
                height={50}
                width={50}
                src={maticLogo}
                alt="Polygon icon"
              />
            </a>
            <a href="https://solana.com/" target="_blank" rel="noreferrer">
              <Image
                className="mx-10"
                height={50}
                width={50}
                src={solLogo}
                alt="Solana icon"
              />
            </a>
            <a href="https://ripple.com/xrp/" target="_blank" rel="noreferrer">
              <Image
                className="mx-10"
                height={50}
                width={50}
                src={xrpLogo}
                alt="XRP icon"
              />
            </a>
            <a href="https://arbitrum.io/" target="_blank" rel="noreferrer">
              <Image
                className="mx-10"
                height={50}
                width={50}
                src={arbitrumLogo}
                alt="Arbitrum icon"
              />
            </a>
            <a href="https://fundingchain.io" target="_blank" rel="noreferrer">
              <Image
                className="mx-10"
                height={55}
                width={75}
                src={fcLogo}
                alt="Smart Contract Verifier icon"
              />
            </a>
            <a
              href="https://smartcontractverifier.com"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="mx-10"
                height={55}
                width={45}
                src={scvLogo}
                alt="Smart Contract Verifier icon"
              />
            </a>
            <a
              href="https://decentralized-ventures.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="mx-10"
                height={40}
                width={65}
                src={dvLogo}
                alt="Decentralized Ventures icon"
              />
            </a>
          </div>
        )}
      </Ticker>
    </Row>
  );
};

export default CryptoBrandTicker;
