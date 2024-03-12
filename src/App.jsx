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

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Marquee />
        <Counter />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Login />} /> {}
            <Route path="/Home" element={<Home/>} />
            <Route path="/StoreData" element={<StoreData/>} />
            <Route path="/Leaderboard" element={<Leaderboard/>} />
          </Routes>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
