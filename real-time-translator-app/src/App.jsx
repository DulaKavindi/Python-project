import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Download from './pages/Download';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="nav-container">
            <div className="logo">LumiSub</div>
            <div className="nav-links">
              <Link to="/">Download</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </nav>

        <div className="page-content">
          <Routes>
            <Route path="/" element={<Download />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

       <Footer />
      </div>
    </Router>

    
  );
}

export default App;
