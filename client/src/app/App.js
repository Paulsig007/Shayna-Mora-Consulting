import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';

// === Components ===
import Nav from '../components/nav/Nav';

// ===== Pages =====
// import Home from '../pages/home/Home';
// import About from '../pages/about/About';
// import Contact from '../pages/contact/Contact';
// import Services from '../pages/services/Services';


function App() {
  return (
    <Router>
    <Container maxWidth="sm">
    <div className="App">
      <Nav />
      {/* <Routes> */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/services" element={<Services />} /> */}
      {/* </Routes> */}
    </div>
    </Container>
    </Router>
  );
}

export default App;
