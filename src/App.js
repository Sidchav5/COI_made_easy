import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HeroSection from './components/HeroSection';
import CardSection from './components/CardSection';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import Preamble from './components/Preamble'; // ⬅️ Added
import PartsIndex from './components/PartsIndex';
import PartDetail from './components/PartDetail';

import FundamentalRights from './components/FundamentalRights';
import RightI from './components/RightI';
import RightII from './components/RightII';
import RightIII from './components/RightIII';
import RightIV from './components/RightIV';
import RightV from './components/RightV';
import RightVI from './components/RightVI';
import DutiesIndex from './components/DutiesIndex';
import Duty1 from './components/Duty1';
import Duty3 from './components/Duty3';
import Duty2 from './components/Duty2';
import Duty4 from './components/Duty4';
import Duty5 from './components/Duty5';
import Duty6 from './components/Duty6';
import Duty7 from './components/Duty7';
import Duty8 from './components/Duty8';
import Duty9 from './components/Duty9';
import Duty10 from './components/Duty10';
import Duty11 from './components/Duty11';

import History from './components/History';
import AIConstitutionGuide from './components/AIConstitutionGuide';
import Chatbot from './components/ChatBot';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={
          <>
            <HeroSection />
            <CardSection />
            <AIConstitutionGuide/>
            <Footer />
          </>
        } />

        {/* Auth Pages */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Preamble Page */}
        <Route path="/preamble" element={<Preamble />} /> {/* ⬅️ Added */}

        {/* Parts */}
        <Route path="/parts" element={<PartsIndex />} />
        <Route path="/parts/:partNumber" element={<PartDetail />} />

         {/* ... existing routes */}
        <Route path="/rights" element={<FundamentalRights />} />
        <Route path="/rights/right1" element={<RightI />} />
        <Route path="/rights/right2" element={<RightII />} />
        <Route path="/rights/right3" element={<RightIII />} />
        <Route path="/rights/right4" element={<RightIV />} />
        <Route path="/rights/right5" element={<RightV />} />
        <Route path="/rights/right6" element={<RightVI />} />

       
        <Route path="/duties" element={<DutiesIndex />} />
        <Route path="/duties/1" element={<Duty1 />} />
        <Route path="/duties/2" element={<Duty2/>} />
        <Route path="/duties/3" element={<Duty3 />} />
        <Route path="/duties/4" element={<Duty4 />} />
         <Route path="/duties/5" element={<Duty5 />} />
        <Route path="/duties/6" element={<Duty6/>} />
        <Route path="/duties/7" element={<Duty7 />} />
        <Route path="/duties/8" element={<Duty8 />} />
         <Route path="/duties/9" element={<Duty9 />} />
        <Route path="/duties/10" element={<Duty10/>} />
        <Route path="/duties/11" element={<Duty11 />} />
        <Route path="/history" element={<History />} />

         <Route path="/ChatBot" element={<Chatbot />} />
       
      </Routes>
    </Router>
  );
}

export default App;
