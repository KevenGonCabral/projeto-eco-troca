import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Profile from './pages/Profile.jsx'
import Signup from './pages/Signup.jsx'
import Signin from './pages/Signin.jsx'
import Home from './pages/Home.jsx'
import './App.css'

function App() {

  return (
    <>
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Signin/>} />
          <Route path="/cadastrar" element={<Signup/>} />
          <Route path="/perfil" element={<Profile/>} />
        </Routes>
    </Router>
    </>
  );
}

export default App
