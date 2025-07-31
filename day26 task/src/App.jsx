import React from 'react';
import './App.css';
import All from './All';
import FullStackDevelopment from './FullStackDevelopment';
import DataScience from './DataScience';
import CyberSecurity from './CyberSecurity';
import Career from './Career';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
              <img src='/busy-officer.jpg' alt='no'></img>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
              <Link to="/all/" className="navbar-link" href="#">
                All
              </Link>
              <Link
                to="/full-stack-development"
                className="nav-link active"
                aria-current="page"
                href="#">
                Full Stack development
              </Link>
              <Link to="/data-science" className="nav-link" href="#">
                Data Science
              </Link>
              <Link to="/cyber-security" className="nav-link" href="#">
                Cyber Security
              </Link>
              <Link
                to="/career"
                className="nav-link disabled"
                aria-disabled="true">
                Career
              </Link>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/all/" element={<All />} />
          <Route path="/full-stack-development"  element={<FullStackDevelopment />}/>
          <Route path="/data-science" element={<DataScience />}/>
          <Route path="/cyber-security" element={<CyberSecurity />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
