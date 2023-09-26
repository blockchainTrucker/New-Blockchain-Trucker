// import media files
import pizzaKing from "assets/images/portfolio/logos/pizza-king-logo.png";
import fundingChain from "assets/images/portfolio/logos/funding-chain.png";
import scv from "assets/images/portfolio/logos/scv-1000.png";
import decentralizedVentures from "assets/images/portfolio/logos/decentralized-ventures.png";
import videoTutorials from "assets/images/video-tutorials/video-tutorials-home-loggedin.png";
import cookUni from "assets/images/cookuni/cookuni-home.png";
import bcrypt from "assets/images/bcrypt/bcrypt1.png";
import ethers from "assets/images/ethereumWallet/welcome.jpg";
import hgames from "assets/images/hunger-games/hunger-games.jpg";
import blockchain from "assets/images/blockchain/explorer.png";
import { v4 as uuid } from "uuid";
const portfolioData = [
  {
    id: uuid(),
    image: scv,
    category: "Personal Project",
    title: "Smart Contract Verifier",
    details:
      "A smart contract verification tool that is currently running on Ethereum Mainnet as an MVP.",
    link: "/portfolio/smart-contract-verifier",
  },
  {
    id: uuid(),
    image: fundingChain,
    category: "Personal Project",
    title: "Funding Chain",
    details:
      "A crowd funding platform that uses smart contracts currently in development.",
    link: "/portfolio/funding-chain",
  },
  {
    id: uuid(),
    image: decentralizedVentures,
    category: "Personal Project",
    title: "Decentralized Ventures",
    details: `My company's main customer facing website made using React.`,
    link: "/portfolio/decentralized-ventures",
  },
  {
    id: uuid(),
    image: blockchain,
    category: "School Project",
    title: "Custom Blockchain",
    details: `A custom blockchain that was my final project for my Blockchain Engineer certification.`,
    link: "/portfolio/custom-blockchain",
  },
  {
    id: uuid(),
    image: pizzaKing,
    category: "School Project",
    title: "Pizza King",
    details:
      "The final project for my Full Stack Developer certification made using the MERN stack.",
    link: "/portfolio/pizza-king",
  },
  {
    id: uuid(),
    image: videoTutorials,
    category: "School Project",
    title: "Video Tutorials",
    details:
      "Module 5 backend project at Kingsland University using Express and Handlebars.",
    link: "/portfolio/video-tutorials",
  },
  {
    id: uuid(),
    image: cookUni,
    category: "School Project",
    title: "CookUni",
    details:
      "Module 4 frontend project at Kingsland University using Sammy and Handlebars.",
    link: "/portfolio/cookuni",
  },
  {
    id: uuid(),
    image: hgames,
    category: "Example",
    title: "Hunger Games Solidity Example",
    details:
      "An example of a timed game that selects a random winner using Solidity.",
    link: "/portfolio/hunger-games",
  },
  {
    id: uuid(),
    image: bcrypt,
    category: "Example",
    title: "Hashing Example",
    details:
      "An example of using Bcrypt to hash a password and then compare it in an API.",
    link: "/portfolio/hashing",
  },
  {
    id: uuid(),
    image: ethers,
    category: "Example",
    title: "Etherium Wallet Using Ethers.js",
    details:
      "A single page application where you can create, recover, and use an Etherium wallet.",
    link: "/portfolio/ethereum-wallet",
  },
];

export default portfolioData;
