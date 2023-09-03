import React from 'react';
//import {Formik, Field, Form } from 'formik'
//import axios from "axios";
//import { useEffect, useState } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import DashBoard from './Dashboard';
import Books from './Books';
import Author from './Author';

function App() {


  return (
    <Router>
<div>


<nav className="navbar navbar-expand-lg bg-body-tertiary">
<div className="container-fluid">
  <div className="collapse navbar-collapse" id="navbarNav">
    <Link to="/Home/" className="navbar-link" href="#">
      Home
    </Link>
    <Link to="/Books" className="nav-link" href="#">
      Books
    </Link>
    <Link to="/Author" className="nav-link" href="#">
      Author
    </Link>
  </div>
</div>
</nav>

    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/Home" element={<DashBoard />} />
      <Route path="/Books" element={<Books />} />
      <Route path="/Author" element={<Author />} />
    </Routes>
    </div>
  </Router>
  );
}

export default App;
