import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages';
import SignupPage from './components/pages/signup';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<SignupPage />} />
          <Route exact path="/home" element={ <Home /> }  />
        </Routes>
      </Router>
    </>
  );
}

export default App;
