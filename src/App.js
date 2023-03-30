import React from 'react';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignUp2 from './pages/SignUp2';
import { Routes, Route } from 'react-router-dom';
import ComingSoon from './pages/ComingSoon';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/signup-2" element={<SignUp2 />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/comingsoon" element={<ComingSoon />}/>
      </Routes>
    </div>
  );
}

export default App;
