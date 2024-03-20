import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import StoreData from './components/StoreData'
import Leaderboard from './components/Leaderboard'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Marquee from './components/Marquee';
import Login from './components/Login';
import Screensaver from './components/Screensaver';
import Wrapper from './components/Wrapper';
import { TourComponent, TourSteps } from './components/Tour';
import qmark from '../src/assets/qmark.svg';

function App() {
  const [isTourOpen, setIsTourOpen] = useState(false);

  return (
    <Router>
    <div>
      <Navbar />
      <img id='tour' src={qmark} width={75} onClick={() => setIsTourOpen(true)} alt="Start Tour" />
        <TourComponent steps={TourSteps} isOpen={isTourOpen} onRequestClose={() => setIsTourOpen(false)} />
      <Wrapper>
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
        </Wrapper>
    </div>
  </Router>
  );
}

export default App;
