import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/navbar';
import Darkmode from './components/Darkmode';
import Bmi from './components/bmi';
import Calorie from './components/calorie'; 
import Water from './components/water';
import Sleep from './components/sleep';


function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ marginTop: '0.5cm' }}>
        <Darkmode />
      </div>
      <div style={{ marginTop: '1rem' }}>
        <Routes>
          <Route path="/" element={<Bmi />} />
          <Route path="/calorie" element={<Calorie />} />
          <Route path="/water" element={<Water />} />
          <Route path="/sleep" element={<Sleep />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

