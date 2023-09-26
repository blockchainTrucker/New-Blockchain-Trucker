import { useState, useEffect } from "react";

const usePrices = () => {
  const [ethPrice, setEthPrice] = useState(0);
  const [hbarPrice, setHbarPrice] = useState(0);
  const [maticPrice, setMaticPrice] = useState(0);
  const [adaPrice, setAdaPrice] = useState(0);
  const [dotPrice, setDotPrice] = useState(0);
  const [linkPrice, setLinkPrice] = useState(0);
  const [solPrice, setSolPrice] = useState(0);
  const [xrpPrice, setXrpPrice] = useState(0);
  const [btcPrice, setBtcPrice] = useState(0);

  useEffect(() => {
    priceFetch();
    setInterval(() => {
      priceFetch();
    }, 1000 * 60);
  }, []);

  // Current price setter
  const priceFetch = () => {
    fetch("https://api.coinbase.com/v2/prices/ETH-USD/spot")
      .then((response) => response.json())
      .then((data) => {
        setEthPrice(data.data.amount);
      });
    fetch("https://api.coinbase.com/v2/prices/hbar-usd/spot")
      .then((response) => response.json())
      .then((data) => {
        setHbarPrice(data.data.amount);
      });
    fetch("https://api.coinbase.com/v2/prices/btc-usd/spot")
      .then((response) => response.json())
      .then((data) => {
        setBtcPrice(data.data.amount);
      });
    fetch("https://api.coinbase.com/v2/prices/matic-usd/spot")
      .then((response) => response.json())
      .then((data) => {
        setMaticPrice(data.data.amount);
      });
    fetch("https://api.coinbase.com/v2/prices/ada-usd/spot")
      .then((response) => response.json())
      .then((data) => {
        setAdaPrice(data.data.amount);
      });
    fetch("https://api.coinbase.com/v2/prices/dot-usd/spot")
      .then((response) => response.json())
      .then((data) => {
        setDotPrice(data.data.amount);
      });
    fetch("https://api.coinbase.com/v2/prices/sol-usd/spot")
      .then((response) => response.json())
      .then((data) => {
        setSolPrice(data.data.amount);
      });
    fetch("https://api.coinbase.com/v2/prices/link-usd/spot")
      .then((response) => response.json())
      .then((data) => {
        setLinkPrice(data.data.amount);
      });
    fetch("https://api.coinbase.com/v2/prices/xrp-usd/spot")
      .then((response) => response.json())
      .then((data) => {
        setXrpPrice(data.data.amount);
      });
  };

  return {
    ethPrice,
    hbarPrice,
    btcPrice,
    maticPrice,
    adaPrice,
    dotPrice,
    linkPrice,
    solPrice,
    xrpPrice,
  };
};

export default usePrices;
