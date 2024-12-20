import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";
import { Helmet } from "react-helmet";

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
  FractionalLeadership,
  ChangeManagement,
  LeadershipDevelopment,
  ComprehensiveConsulting,
} from "../pages/servicePages/index";

function App() {
  return (
    <Router>
      <Helmet>
        <title>Mora Consulting - Professional Leadership & Strategy Solutions</title>
        <meta
          name="description"
          content="Expert consulting services in fractional leadership, change management, and organizational strategy. Transforming businesses through comprehensive solutions and leadership development."
        />
        <meta 
          property="og:title" 
          content="Mora Consulting - Professional Leadership & Strategy Solutions" 
        />
        <meta 
          property="og:description" 
          content="Transform your organization with expert consulting in fractional leadership, change management, and strategic development." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="moraconsulting.co" />
      </Helmet>  
      <Container maxWidth="false" className={styles.App} sx={{
        padding: "0",
      }}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fractional-executive-leadership-and-organizational-strategy" element={<FractionalLeadership />} />
          <Route path="/change-management-and-culture-transformation" element={<ChangeManagement />} />
          <Route path="/leadership-development-and-people-operations" element={<LeadershipDevelopment />}/>
          <Route path="/comprehensive-consulting-and-networked-solutions" element={<ComprehensiveConsulting />} />
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
