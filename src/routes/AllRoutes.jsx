import { Routes, Route, Navigate } from "react-router-dom";
import "assets/scss/theme.scss";
import Redirect from "components/functions/Redirect";
import MainLanding from "components/landing/LandingMain";
import Portfolio from "components/portfolio/Portfolio.jsx";
import Contact from "components/contact/Contact";
import About from "components/about/About";

export default function AllRoutes() {
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
        <Route
          exact
          path="/portfolio/rraft"
          element={<Redirect to="https://www.rraft.io" />}
        />
        <Route
          exact
          path="/portfolio/thrilld"
          element={<Redirect to="https://www.thrilldlabs.io/" />}
        />
        <Route
          exact
          path="/portfolio/gnus"
          element={<Redirect to="https://www.gnus.ai" />}
        />
        <Route
          exact
          path="/portfolio/qe-coin"
          element={<Redirect to="https://qecoin.io" />}
        />
        <Route
          exact
          path="/portfolio/hyper-future"
          element={<Redirect to="https://www.hyperfuture.app" />}
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
