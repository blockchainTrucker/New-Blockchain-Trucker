import { Routes, Route, Navigate } from "react-router-dom";
import "assets/scss/theme.scss";

import Redirect from "components/functions/Redirect";

// Landing
import MainLanding from "components/landing/LandingMain";

//Portfolio
import Portfolio from "components/portfolio/Portfolio.jsx";
import PizzaKing from "components/portfolio/projects/PizzaKing.jsx";
import VideoTutorials from "components/portfolio/projects/VideoTutorials.jsx";
import CookUni from "components/portfolio/projects/CookUni.jsx";
import Hashing from "components/portfolio/examples/Hashing.jsx";
import EthereumWallet from "components/portfolio/examples/EthereumWallet.jsx";
import HungerGames from "components/portfolio/examples/HungerGames.jsx";
import Blockchain from "components/portfolio/projects/Blockchain.jsx";

//Contact
import Contact from "components/contact/Contact";

//About
import About from "components/about/About";

export default function AllRoutes(login) {
  return (
    <div>
      <Routes>
        {/* Landing */}
        <Route exact path="/" element={<MainLanding />} />
        {/* Portfolio */}
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route
          exact
          path="/portfolio/smart-contract-verifier"
          element={<Redirect to="https://www.smartcontractverifier.com" />}
        />
        <Route
          exact
          path="/portfolio/funding-chain"
          element={<Redirect to="https://www.fundingchain.io" />}
        />
        <Route
          exact
          path="/portfolio/decentralized-ventures"
          element={<Redirect to="https://www.decentralized-ventures.com" />}
        />
        <Route exact path="/portfolio/pizza-king" element={<PizzaKing />} />
        <Route
          exact
          path="/portfolio/video-tutorials"
          element={<VideoTutorials />}
        />
        <Route exact path="/portfolio/hashing" element={<Hashing />} />
        <Route exact path="/portfolio/cookuni" element={<CookUni />} />
        <Route
          exact
          path="/portfolio/ethereum-wallet"
          element={<EthereumWallet />}
        />
        <Route exact path="/portfolio/hunger-games" element={<HungerGames />} />
        <Route
          exact
          path="/portfolio/custom-blockchain"
          element={<Blockchain />}
        />
        {/* Contact */}
        <Route exact path="/contact-me" element={<Contact />} />
        {/* About */}
        <Route exact path="/about-me" element={<About />} />
        {/* Catch */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
