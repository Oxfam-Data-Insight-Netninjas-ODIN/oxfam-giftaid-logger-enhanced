import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import LocalScores from './components/LocalScores'
import TopScores from './components/TopScores'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/LocalScores" element={<LocalScores/>} />
            <Route path="/TopScores" element={<TopScores/>} />
          </Routes>
        </Wrapper>
        <Footer />
      </div>
    </Router>
);
}

export default App;