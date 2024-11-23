import './App.css';
import SignUp from './pages/SignUp';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="page-conatiner">
      <div className="content-wrap">
        <Router>
          <Routes>
            <Route path="/signup" element={<SignUp/>}/>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
