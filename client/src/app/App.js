import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';

// === Data ===
import serviceData from "../assets/serviceData";

// === Components ===
import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';

// ===== Pages =====
import Home from '../pages/home/Home';
import styles from './App.module.css';
import About from '../pages/about/About';
// import Contact from '../pages/contact/Contact';
function App() {

  return (
    <Router>
    <Container maxWidth="false" className={styles.App}>
      <Nav />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* {serviceData.map((data) => (
        <Route key={data.serviceLink} path={data.serviceLink} element={
          data.servicePage} />
        ))} */}
      </Routes>
      <Footer />
    </Container>
    </Router>
  );
}

export default App;
