import React from 'react';
import './App.css';
import Navbar from './navbar';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import Home from './home';
import Content from './content';
import Dashboard from './dashboard';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content" element={<Content />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
