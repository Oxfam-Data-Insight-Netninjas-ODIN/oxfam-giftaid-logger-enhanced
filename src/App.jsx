import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import StoreData from './components/StoreData'
import Leaderboard from './components/Leaderboard'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
import Marquee from './components/Marquee';
import Login from './components/Login';
import Counter from './components/Counter';
import Screensaver from './components/Screensaver';

function App() {
  return (
    <Router>
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={
            <>
              <Marquee />
              <Home />
            </>
          } />
          <Route path="/StoreData" element={<StoreData />} />
          <Route path="/Leaderboard" element={<Leaderboard />} />
        </Routes>
    </div>
  </Router>
  );
}

export default App;
