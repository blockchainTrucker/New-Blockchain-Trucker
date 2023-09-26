import React, { useEffect, useRef, useState } from "react";
import ethLogo from "../../assets/images/icons/ethereum-icon.png";
import hbarLogo from "../../assets/images/icons/hedera-icon.png";
import adaLogo from "../../assets/images/icons/cardano-icon.png";
import dotLogo from "../../assets/images/icons/dot-icon.png";
import linkLogo from "../../assets/images/icons/link-icon.png";
import maticLogo from "../../assets/images/icons/matic-icon.png";
import solLogo from "../../assets/images/icons/sol-icon.png";
import xrpLogo from "../../assets/images/icons/xrp-icon.png";
import btcLogo from "../../assets/images/icons/bitcoin-icon.png";
import { Image } from "react-bootstrap";
import CountUp from "react-countup";
import VerticalTicker from "../tickers/vertical/VerticalTicker.jsx";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import usePrices from "hooks/prices/usePrices";

const PriceTicker = () => {
  const [parent] = useAutoAnimate();
  const {
    ethPrice,
    hbarPrice,
    maticPrice,
    adaPrice,
    dotPrice,
    linkPrice,
    solPrice,
    xrpPrice,
    btcPrice,
  } = usePrices();
  const currentPriceRef = useRef("eth");
  const [showTicker, setShowTicker] = useState(false);
  const formattedEthPriceRef = useRef(0);
  const lastEthPriceRef = useRef(0);
  const formattedHbarPriceRef = useRef(0);
  const lastHbarPriceRef = useRef(0);
  const formattedBtcPriceRef = useRef(0);
  const lastBtcPriceRef = useRef(0);
  const formattedAdaPriceRef = useRef(0);
  const lastAdaPriceRef = useRef(0);
  const formattedSolPriceRef = useRef(0);
  const lastSolPriceRef = useRef(0);
  const formattedMaticPriceRef = useRef(0);
  const lastMaticPriceRef = useRef(0);
  const formattedDotPriceRef = useRef(0);
  const lastDotPriceRef = useRef(0);
  const formattedLinkPriceRef = useRef(0);
  const lastLinkPriceRef = useRef(0);
  const formattedXrpPriceRef = useRef(0);
  const lastXrpPriceRef = useRef(0);

  useEffect(() => {
    formattedEthPriceRef.current = parseFloat(ethPrice).toFixed(2);
    if (lastEthPriceRef.current === 0) {
      lastEthPriceRef.current = formattedEthPriceRef.current * 0.99;
    }
  }, [ethPrice]);

  useEffect(() => {
    formattedHbarPriceRef.current = parseFloat(hbarPrice).toFixed(5);
    if (lastHbarPriceRef.current === 0) {
      lastHbarPriceRef.current = formattedHbarPriceRef.current * 0.99;
    }
  }, [hbarPrice]);

  useEffect(() => {
    formattedBtcPriceRef.current = parseFloat(btcPrice).toFixed(5);
    if (lastBtcPriceRef.current === 0) {
      lastBtcPriceRef.current = formattedBtcPriceRef.current * 0.999;
    }
  }, [btcPrice]);

  useEffect(() => {
    formattedAdaPriceRef.current = parseFloat(adaPrice).toFixed(5);
    if (lastAdaPriceRef.current === 0) {
      lastAdaPriceRef.current = formattedAdaPriceRef.current * 0.99;
    }
  }, [adaPrice]);

  useEffect(() => {
    formattedSolPriceRef.current = parseFloat(solPrice).toFixed(3);
    if (lastSolPriceRef.current === 0) {
      lastSolPriceRef.current = formattedSolPriceRef.current * 0.99;
    }
  }, [solPrice]);

  useEffect(() => {
    formattedMaticPriceRef.current = parseFloat(maticPrice).toFixed(5);
    if (lastMaticPriceRef.current === 0) {
      lastMaticPriceRef.current = formattedMaticPriceRef.current * 0.99;
    }
  }, [maticPrice]);

  useEffect(() => {
    formattedDotPriceRef.current = parseFloat(dotPrice).toFixed(4);
    if (lastDotPriceRef.current === 0) {
      lastDotPriceRef.current = formattedDotPriceRef.current * 0.99;
    }
  }, [dotPrice]);

  useEffect(() => {
    formattedLinkPriceRef.current = parseFloat(linkPrice).toFixed(4);
    if (lastLinkPriceRef.current === 0) {
      lastLinkPriceRef.current = formattedLinkPriceRef.current * 0.99;
    }
  }, [linkPrice]);

  useEffect(() => {
    formattedXrpPriceRef.current = parseFloat(xrpPrice).toFixed(4);
    if (lastXrpPriceRef.current === 0) {
      lastXrpPriceRef.current = formattedXrpPriceRef.current * 0.99;
    }
  }, [xrpPrice]);

  const updateLast = () => {
    if (currentPriceRef.current === "eth") {
      lastEthPriceRef.current = formattedEthPriceRef.current;
      currentPriceRef.current = "hbar";
    } else if (currentPriceRef.current === "hbar") {
      lastHbarPriceRef.current = formattedHbarPriceRef.current;
      currentPriceRef.current = "btc";
    } else if (currentPriceRef.current === "btc") {
      lastBtcPriceRef.current = formattedBtcPriceRef.current;
      currentPriceRef.current = "ada";
    } else if (currentPriceRef.current === "ada") {
      lastAdaPriceRef.current = formattedAdaPriceRef.current;
      currentPriceRef.current = "sol";
    } else if (currentPriceRef.current === "sol") {
      lastSolPriceRef.current = formattedSolPriceRef.current;
      currentPriceRef.current = "matic";
    } else if (currentPriceRef.current === "matic") {
      lastMaticPriceRef.current = formattedMaticPriceRef.current;
      currentPriceRef.current = "dot";
    } else if (currentPriceRef.current === "dot") {
      lastDotPriceRef.current = formattedDotPriceRef.current;
      currentPriceRef.current = "link";
    } else if (currentPriceRef.current === "link") {
      lastLinkPriceRef.current = formattedLinkPriceRef.current;
      currentPriceRef.current = "xrp";
    } else if (currentPriceRef.current === "xrp") {
      lastXrpPriceRef.current = formattedXrpPriceRef.current;
      currentPriceRef.current = "eth";
    }
  };

  const Eth = () => {
    return (
      <div className="d-flex">
        <p className="align-middle pt-2 nladj">
          ETH Price: <Image height={17} src={ethLogo} alt="Ethereum Icon" />1 =
          $
        </p>
        <div className="align-middle pt-2 nladj">
          <CountUp
            start={lastEthPriceRef.current}
            end={formattedEthPriceRef.current}
            duration={5}
            separator=","
            decimals={2}
            decimal="."
          />
        </div>
      </div>
    );
  };

  const Hbar = () => {
    return (
      <div className="d-flex">
        <p className="align-middle pt-2 nladj">
          HBAR Price: <Image height={14} src={hbarLogo} alt="Hedera Icon" />1 =
          $
          <CountUp
            start={lastHbarPriceRef.current}
            end={formattedHbarPriceRef.current}
            duration={5}
            separator=","
            decimals={5}
            decimal="."
          />
        </p>
      </div>
    );
  };

  const Btc = () => {
    return (
      <div className="d-flex">
        <p className="align-middle pt-2 nladj">
          BTC Price: <Image height={14} src={btcLogo} alt="Bitcoin Icon" />1 = $
          <CountUp
            start={lastBtcPriceRef.current}
            end={formattedBtcPriceRef.current}
            duration={5}
            separator=","
            decimals={2}
            decimal="."
          />
        </p>
      </div>
    );
  };

  const Ada = () => {
    return (
      <div className="d-flex">
        <p className="align-middle pt-2 nladj">
          ADA Price: <Image height={14} src={adaLogo} alt="Cardano Icon" />1 = $
          <CountUp
            start={lastAdaPriceRef.current}
            end={formattedAdaPriceRef.current}
            duration={5}
            separator=","
            decimals={5}
            decimal="."
          />
        </p>
      </div>
    );
  };

  const Sol = () => {
    return (
      <div className="d-flex">
        <p className="align-middle pt-2 nladj">
          SOL Price: <Image height={14} src={solLogo} alt="Solana Icon" />1 = $
          <CountUp
            start={lastSolPriceRef.current}
            end={formattedSolPriceRef.current}
            duration={5}
            separator=","
            decimals={3}
            decimal="."
          />
        </p>
      </div>
    );
  };

  const Matic = () => {
    return (
      <div className="d-flex">
        <p className="align-middle pt-2 nladj">
          MATIC Price: <Image height={14} src={maticLogo} alt="Polygon Icon" />1
          = $
          <CountUp
            start={lastMaticPriceRef.current}
            end={formattedMaticPriceRef.current}
            duration={5}
            separator=","
            decimals={5}
            decimal="."
          />
        </p>
      </div>
    );
  };

  const Dot = () => {
    return (
      <div className="d-flex">
        <p className="align-middle pt-2 nladj">
          DOT Price: <Image height={14} src={dotLogo} alt="Polkadot Icon" />1 =
          $
          <CountUp
            start={lastDotPriceRef.current}
            end={formattedDotPriceRef.current}
            duration={5}
            separator=","
            decimals={4}
            decimal="."
          />
        </p>
      </div>
    );
  };

  const Link = () => {
    return (
      <div className="d-flex">
        <p className="align-middle pt-2 nladj">
          LINK Price: <Image height={14} src={linkLogo} alt="Chainlink Icon" />1
          = $
          <CountUp
            start={lastLinkPriceRef.current}
            end={formattedLinkPriceRef.current}
            duration={5}
            separator=","
            decimals={4}
            decimal="."
          />
        </p>
      </div>
    );
  };

  const Xrp = () => {
    return (
      <div className="d-flex">
        <p className="align-middle pt-2 nladj">
          XRP Price: <Image height={14} src={xrpLogo} alt="XRP Icon" />1 = $
          <CountUp
            start={lastXrpPriceRef.current}
            end={formattedXrpPriceRef.current}
            duration={5}
            separator=","
            decimals={4}
            decimal="."
          />
        </p>
      </div>
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTicker(true);
    }, 1000); // 2000 milliseconds = 2 seconds

    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={parent}>
      {showTicker && (
        <div className="ticker pt-3 text-nowrap">
          <VerticalTicker
            className="p-0"
            hasMoved={updateLast}
            direction={1}
            rowHeight={50}
            speed={400}
            duration={6000}
            maxRows={1}
          >
            <Eth />
            <Hbar />
            <Btc />
            <Ada />
            <Sol />
            <Matic />
            <Dot />
            <Link />
            <Xrp />
          </VerticalTicker>
        </div>
      )}
    </div>
  );
};

export default PriceTicker;
