// import media files
import fundingChain from "assets/images/portfolio/logos/funding-chain.png";
import scv from "assets/images/portfolio/logos/scv-1000.png";
import decentralizedVentures from "assets/images/portfolio/logos/decentralized-ventures.png";
import rraft from "assets/images/portfolio/logos/rraft-logo-400.png";
import gnus from "assets/images/portfolio/logos/gnus-logo.png";
import qec from "assets/images/portfolio/logos/qecoin-black.png";
import hf from "assets/images/portfolio/logos/hfFull.png";
import thrilld from "assets/images/portfolio/logos/thrilld.png";
import { v4 as uuid } from "uuid";
const portfolioData = [
  [
    {
      id: uuid(),
      image: fundingChain,
      title: "Funding Chain",
      details:
        "A platform that uses smart contracts for faster, more transparent, and censorship free crowdfunding. Currently running on Ethereum and Hedera mainnets.",
      link: "/portfolio/funding-chain",
    },
    {
      id: uuid(),
      image: scv,
      title: "Smart Contract Verifier",
      details:
        "A smart contract verification tool that is currently running on Ethereum and Hedera Mainnets as an MVP. It was made with Next.js.",
      link: "/portfolio/smart-contract-verifier",
    },

    {
      id: uuid(),
      image: decentralizedVentures,
      title: "Decentralized Ventures",
      details: `My company's main customer facing website made using React.`,
      link: "/portfolio/decentralized-ventures",
    },
  ],
  [
    {
      id: uuid(),
      image: rraft,
      title: "Rraft",
      details:
        "A gamified platform that rewards behaviors promoting care and investment in one’s living space, that is currently in development.",
      link: "/portfolio/rraft",
    },
    {
      id: uuid(),
      image: gnus,
      title: "GNUS.AI",
      details:
        "An open source DEPIN system that processes Artificial Intelligence and Machine Learning data on an end-user device that is in development.",
      link: "/portfolio/gnus",
    },
    {
      id: uuid(),
      image: qec,
      title: "QE Coin",
      details:
        "A Universal reward token designated for equity crowdfunding and building a community to enhance everyday activities, from shopping, entertainment, giving, and beyond.",
      link: "/portfolio/qe-coin",
    },
    {
      id: uuid(),
      image: hf,
      title: "Hyper Future",
      details:
        "A web3 mobile gaming platform for hyper-casual games with AAA graphics currently in development.",
      link: "/portfolio/hyper-future",
    },
    {
      id: uuid(),
      image: thrilld,
      title: "Thrilld",
      details:
        "A free and open-access business app that allows Web3 projects, professional investors, developers, and Web3 service providers from around the world to find each other and talk synergies in a streamlined manner.",
      link: "/portfolio/thrilld",
    },
  ],
];

export default portfolioData;
