import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";

// === Data ===
// import serviceData from "../assets/serviceData";

// === Components ===
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";

// ===== Pages =====
import Home from "../pages/home/Home";
import styles from "./App.module.css";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import {
  TalentCulture,
  MgmtDevelopment,
  FinancialCompliance,
  ProjectInnovation,
  StrategySupport,
  BoardGovernance,
} from "../pages/servicePages/index";

function App() {
  return (
    <Router>
      <Container maxWidth="false" className={styles.App}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/talent-culture" element={<TalentCulture />} />
          <Route path="/mgmt-development" element={<MgmtDevelopment />} />
          <Route path="/financial-compliance" element={<FinancialCompliance />}/>
          <Route path="/projects-innovation" element={<ProjectInnovation />} />
          <Route path="/strategy-support" element={<StrategySupport />} />
          <Route path="/board-governance" element={<BoardGovernance />} />
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
