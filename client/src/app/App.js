import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';

// === Data ===
import data from "../assets/serviceNavMenuData";

// === Components ===
import Nav from '../components/nav/Nav';

// ===== Pages =====
import Home from '../pages/home/Home';
import styles from './App.module.css';
// import About from '../pages/about/About';
// import Contact from '../pages/contact/Contact';
// import Services from '../pages/services/Services';
function App() {

  return (
    <Router>
    <Container maxWidth="false" className={styles.App}>
      <Nav />
        {data.map((data) => (
      <Routes key={data.serviceLink}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path={serviceLink} element={{servicePage}} /> */}
      </Routes>
        ))}
    </Container>
    </Router>
  );
}

export default App;
